'use strict';
const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),os=require('node:os');
const {WebSocketServer,WebSocket}=require('ws'),E=require('./engine.js');
const PROTOCOL=1,hash=s=>crypto.createHash('sha256').update(s).digest('hex');
function createServer({dataDir=path.join(__dirname,'server-data'),now=Date.now,autoTick=true}={}){
  fs.mkdirSync(dataDir,{recursive:true,mode:0o700});const rooms=new Map(),sockets=new Set();
  const allowed=new Set(['index.html','style.css','app.js','engine.js','navigation.js','tactical.js','assets.js']);
  const server=http.createServer((req,res)=>{let rel;try{rel=decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\/+/, '')||'index.html';}catch{res.writeHead(400).end();return;}
    if(req.method!=='GET'&&req.method!=='HEAD'){res.writeHead(405).end();return;}
    if(!allowed.has(rel)&&!/^assets\/processed\/(?:[a-z0-9-]+\/)*[a-z0-9-]+\.(png|jpg)$/.test(rel)){res.writeHead(404).end();return;}
    const file=path.join(__dirname,rel);fs.stat(file,(err,st)=>{if(err||!st.isFile()){res.writeHead(404).end();return;}res.writeHead(200,{'Content-Type':({'html':'text/html; charset=utf-8',js:'text/javascript; charset=utf-8',css:'text/css; charset=utf-8',png:'image/png',jpg:'image/jpeg'})[path.extname(file).slice(1)],'X-Content-Type-Options':'nosniff','Cache-Control':'no-cache'});if(req.method==='HEAD')res.end();else fs.createReadStream(file).pipe(res);});});
  const wss=new WebSocketServer({server,maxPayload:16384});
  wss.on('error',()=>{}); // The HTTP server reports bind errors at the CLI boundary.
  const send=(ws,type,data={},room=null,id=null)=>{if(ws?.readyState===WebSocket.OPEN)ws.send(JSON.stringify({v:PROTOCOL,room:room?.id||null,id,seq:room?++room.seq:0,type,...data}));};
  const active=r=>r.seats.filter(s=>s&&s.ws&&!s.ai&&!r.state?.factions[s.faction].eliminated);
  function roomInfo(r){return {id:r.id,status:r.status,creatorFaction:r.seats.find(s=>s?.identity===r.creator)?.faction,seats:r.seats.map(s=>s?{nickname:s.nickname,faction:s.faction,ready:s.ready,connected:!!s.ws,ai:s.ai,graceUsed:s.graceUsed}:null),paused:!!r.state?.paused,votes:[...r.votes],voteUntil:r.voteUntil,pauseUntil:r.pauseUntil,graceUntil:r.graceUntil};}
  function broadcast(r){for(const s of r.seats)if(s?.ws){send(s.ws,'room',{info:roomInfo(r)},r);if(r.state&&r.status==='running')send(s.ws,'state',{state:E.projectState(r.state,s.faction)},r);}}
  function syncHumans(r){if(r.state)r.state.humans=active(r).map(s=>s.faction);}
  function persist(r,name='自动存档',id='auto-'+r.id){if(!r.state)throw Error('尚未开局');if(!/^[a-zA-Z0-9-]{1,60}$/.test(id))throw Error('存档编号无效');
    const file=path.join(dataDir,id+'.json');if(fs.existsSync(file)){const old=JSON.parse(fs.readFileSync(file,'utf8'));if(old.creator!==r.creator)throw Error('无权覆盖此存档');}
    const value={format:1,id,name:String(name).slice(0,40),saved:now(),creator:r.creator,state:r.state,seats:r.seats.map(s=>s?{identity:s.identity,nickname:s.nickname,faction:s.faction,graceUsed:s.graceUsed,commandSeq:s.commandSeq}:null)};
    const temp=file+'.tmp';fs.writeFileSync(temp,JSON.stringify(value),{mode:0o600});fs.renameSync(temp,file);return id;
  }
  function catalog(identity){const out=[];for(const file of fs.readdirSync(dataDir)){if(!/^[a-zA-Z0-9-]+\.json$/.test(file))continue;try{const v=JSON.parse(fs.readFileSync(path.join(dataDir,file),'utf8'));if(v.creator===identity)out.push({id:v.id,name:v.name,saved:v.saved,time:v.state.time});}catch{}}return out;}
  function getRoom(ws){const r=rooms.get(ws.room);if(!r)throw Error('请先加入房间');const seat=r.seats.find(s=>s?.ws===ws);if(!seat)throw Error('席位连接已失效');return [r,seat];}
  function attach(ws,r,s){if(s.ws&&s.ws!==ws){const previous=s.ws;s.ws=null;send(previous,'replaced',{error:'此席位已在另一连接登录'});previous.close();}s.ws=ws;s.ai=false;ws.room=r.id;ws.identity=s.identity;r.votes.clear();r.voteUntil=0;syncHumans(r);if(!r.seats.some(x=>x&&!x.ws&&!x.ai&&r.state&&!r.state.factions[x.faction].eliminated))r.graceUntil=0;send(ws,'joined',{faction:s.faction,commandSeq:s.commandSeq||0},r);broadcast(r);}
  function leave(ws){const r=rooms.get(ws.room);if(!r)return;const s=r.seats.find(s=>s?.ws===ws);if(!s)return;s.ws=null;r.votes.clear();r.voteUntil=0;
    if(r.status==='running'&&!r.state.factions[s.faction].eliminated){if(!s.graceUsed){s.graceUsed=true;s.ai=false;if(!r.graceUntil)r.graceUntil=now()+30000;}else s.ai=true;}syncHumans(r);broadcast(r);}
  function onMessage(ws,raw){let m;try{m=JSON.parse(raw);if(m.v!==PROTOCOL)throw Error('网络协议版本不兼容');if(!m||typeof m.type!=='string')throw Error('消息格式无效');
    const t=now();if(t-ws.window>=1000){ws.window=t;ws.count=0;}if(++ws.count>30)throw Error('命令过于频繁，请稍候');
    if(m.type==='hello'){if(ws.identity)throw Error('身份已建立');if(typeof m.token!=='string'||! /^[a-f0-9]{64}$/.test(m.token))throw Error('重连身份无效');ws.identity=hash(m.token);send(ws,'hello',{saves:catalog(ws.identity)});return;}
    if(!ws.identity)throw Error('请先建立重连身份');
    if(m.type==='listSaves'){send(ws,'saves',{saves:catalog(ws.identity)});return;}
    if(m.type==='deleteSave'){if(!/^[a-zA-Z0-9-]{1,60}$/.test(m.save))throw Error('存档编号无效');const file=path.join(dataDir,m.save+'.json'),v=JSON.parse(fs.readFileSync(file,'utf8'));if(v.creator!==ws.identity)throw Error('只有创建者可以删除存档');fs.renameSync(file,file+'.deleted');send(ws,'saves',{saves:catalog(ws.identity)},rooms.get(ws.room));return;}
    if(m.type==='create'){
      if(ws.room)throw Error('已在房间中，请先退出');if(rooms.size>=30)throw Error('服务器房间已满');const id=crypto.randomBytes(3).toString('hex').toUpperCase(),r={id,creator:ws.identity,status:'lobby',seats:[null,null,null],seq:0,state:null,votes:new Set(),voteUntil:0,pauseUntil:0,graceUntil:0,lastSave:0};
      rooms.set(id,r);const s={identity:ws.identity,nickname:String(m.nickname||'始皇').slice(0,20),faction:0,ready:false,ai:false,graceUsed:false,commandSeq:0};r.seats[0]=s;attach(ws,r,s);return;
    }
    if(m.type==='join'){
      const r=rooms.get(String(m.room).toUpperCase());if(!r)throw Error('房间不存在');if(ws.room&&ws.room!==r.id)throw Error('已在其他房间');let s=r.seats.find(s=>s?.identity===ws.identity);
      if(!s){if(r.status!=='lobby'||r.restored)throw Error('开局或恢复后仅原席位可重连');const faction=r.seats.findIndex(s=>!s);if(faction<0)throw Error('房间已满');s={identity:ws.identity,nickname:String(m.nickname||'诸侯').slice(0,20),faction,ready:false,ai:false,graceUsed:false,commandSeq:0};r.seats[faction]=s;}attach(ws,r,s);return;
    }
    if(m.type==='load'){
      if(ws.room&&rooms.get(ws.room)?.status==='running')throw Error('不能回滚运行中的房间，请先退出');if(!/^[a-zA-Z0-9-]{1,60}$/.test(m.save))throw Error('存档编号无效');const saved=JSON.parse(fs.readFileSync(path.join(dataDir,m.save+'.json'),'utf8'));if(saved.creator!==ws.identity)throw Error('只有创建者能恢复此存档');
      if(saved.state?.mode!=='multi'||saved.state.schema!==E.SAVE_VERSION)throw Error('不能将单机或旧引擎存档用于联机');const state=E.restore(JSON.stringify(saved.state));state.paused=false;const id=crypto.randomBytes(3).toString('hex').toUpperCase(),r={id,creator:saved.creator,status:'lobby',restored:true,seats:saved.seats.map(s=>s?{...s,ws:null,ai:false,ready:false}:null),seq:0,state,votes:new Set(),voteUntil:0,pauseUntil:0,graceUntil:0,lastSave:0};leave(ws);rooms.set(id,r);attach(ws,r,r.seats.find(s=>s?.identity===ws.identity));return;
    }
    if(m.type==='leave'){leave(ws);ws.room=null;send(ws,'left');return;}
    const [r,s]=getRoom(ws);if(m.room!==r.id)throw Error('房间编号不匹配');
    switch(m.type){
      case 'faction':{if(r.status!=='lobby'||r.restored||![0,1,2].includes(m.faction)||r.seats[m.faction])throw Error('此势力不可选');r.seats[s.faction]=null;s.faction=m.faction;s.ready=false;r.seats[s.faction]=s;send(ws,'joined',{faction:s.faction,commandSeq:s.commandSeq},r);break;}
      case 'ready':if(r.status!=='lobby')throw Error('已经开局');s.ready=!s.ready;break;
      case 'delegate':if(r.creator!==ws.identity||r.status!=='lobby'||!r.restored)throw Error('仅创建者可代管缺席席位');if(!r.seats[m.faction]||r.seats[m.faction].ws)throw Error('席位没有缺席');r.seats[m.faction].ai=true;break;
      case 'start':if(r.creator!==ws.identity||r.status!=='lobby')throw Error('仅创建者可开始');if(r.seats.some(s=>s&&(!s.ws&&!s.ai||s.ws&&!s.ready)))throw Error('所有真人须准备，缺席原玩家须等待或明确代管');r.state=r.state||E.create(0,m.difficulty==='hard'?'hard':'normal');r.state.matchId=r.state.matchId||crypto.randomUUID();r.state.mode='multi';r.state.paused=false;r.status='running';syncHumans(r);persist(r);break;
      case 'command':{
        if(r.status!=='running'||r.graceUntil)throw Error('对局尚未运行或正在等候重连');if(!Number.isSafeInteger(m.commandId)||m.commandId<=0)throw Error('命令编号无效');
        if(m.commandId<=s.commandSeq){send(ws,'ack',{commandId:m.commandId,error:'重复或过期军令，未再次执行'},r,m.id);return;}s.commandSeq=m.commandId;
        const error=E.applyCommand(r.state,s.faction,m.command);send(ws,'ack',{commandId:m.commandId,error},r,m.id);break;
      }
      case 'pause':{
        if(r.status!=='running'||!active(r).includes(s)||r.state.ended)throw Error('只有参战真人可以暂停');
        if(r.state.paused){r.state.paused=false;r.pauseUntil=0;r.votes.clear();r.voteUntil=0;break;}
        if(!r.voteUntil||r.voteUntil<t){r.votes.clear();r.voteUntil=t+15000;}r.votes.add(s.faction);if(active(r).every(s=>r.votes.has(s.faction))){r.state.paused=true;r.pauseUntil=t+120000;r.votes.clear();r.voteUntil=0;}break;
      }
      case 'save':if(r.creator!==ws.identity)throw Error('仅创建者可管理房间存档');persist(r,m.name||'命名存档',m.save||crypto.randomBytes(8).toString('hex'));send(ws,'saves',{saves:catalog(ws.identity)},r);break;
      default:throw Error('未知消息');
    }broadcast(r);
  }catch(e){send(ws,'error',{error:e.code==='ENOENT'?'存档不存在':e.message},rooms.get(ws.room),m?.id);}}
  wss.on('connection',ws=>{sockets.add(ws);ws.window=now();ws.count=0;ws.alive=true;ws.on('pong',()=>ws.alive=true);ws.on('message',raw=>onMessage(ws,raw));ws.on('error',()=>{});ws.on('close',()=>{sockets.delete(ws);leave(ws);});});
  function advance(){const t=now();for(const r of rooms.values()){
    if(r.voteUntil&&t>=r.voteUntil){r.votes.clear();r.voteUntil=0;}
    if(r.pauseUntil&&t>=r.pauseUntil){r.pauseUntil=0;r.state.paused=false;}
    if(r.graceUntil&&t>=r.graceUntil){r.graceUntil=0;for(const s of r.seats)if(s&&!s.ws)s.ai=true;syncHumans(r);}
    if(r.status==='running'){if(!r.graceUntil)E.step(r.state);if(t-r.lastSave>=12000){r.lastSave=t;try{persist(r);}catch(e){for(const s of r.seats)send(s?.ws,'error',{error:'服务器存档失败：'+e.message},r);}}broadcast(r);}
  }}
  const interval=autoTick?setInterval(advance,100):null,heartbeat=setInterval(()=>{for(const ws of sockets){if(!ws.alive){ws.terminate();continue;}ws.alive=false;ws.ping();}},10000);heartbeat.unref();
  return {server,rooms,advance,persist,close:()=>new Promise(resolve=>{clearInterval(interval);clearInterval(heartbeat);for(const ws of sockets)ws.terminate();wss.close(()=>server.close(resolve));})};
}
if(require.main===module){const app=createServer(),port=Number(process.env.PORT||8080);app.server.on('error',error=>{console.error(`服务启动失败（${error.code}）：端口 ${port} 可能被占用或没有监听权限。可设置 PORT 更换端口。`);process.exitCode=1;app.close();});app.server.listen(port,'0.0.0.0',()=>{console.log(`大秦局域网服务：http://localhost:${port}`);for(const list of Object.values(os.networkInterfaces()))for(const a of list||[])if(a.family==='IPv4'&&!a.internal)console.log(`局域网：http://${a.address}:${port}`);console.log('存档：'+path.join(__dirname,'server-data'));});}
module.exports={createServer,PROTOCOL};
