/* UI consumes only projectState snapshots. Full single-player authority stays in this closure. */
(() => {
  'use strict';
  const E=window.Daqin,N=window.DaqinNav,A=window.DaqinAssets,$=id=>document.getElementById(id);
  const colors=['#e18c62','#789fff','#69c89c','#cfbb82'],KEY='daqin-save-v4',SLOTS='daqin-slots-v4';
  let authority=null,view=null,previous=null,snapshotAt=0,selected=0,field=null,selection=new Set(),unitSelection=new Set(),draft=null,speed=1,acc=0,last=performance.now(),uiAt=0,autoAt=0;
  let mode='single',readyAssets=false,images={},socket=null,room=null,faction=0,seq=0,commandSeq=0,serverSlots=[],saveMode='single',activeSlot=null,resultShown=null,reconnectTimer=null,closing=false,toastTimer;
  let camera={zoom:1,x:0,y:0},drag=null,pan=null,pointer=null,W=0,H=0,transform=null,frameCount=0,frameTimes=[];
  const canvas=$('map'),ctx=canvas.getContext('2d'),mini=$('minimap'),mg=mini.getContext('2d'),fog=document.createElement('canvas'),sightMask=document.createElement('canvas'),cityTerrain=document.createElement('canvas');sightMask.width=sightMask.height=100;
  let renderedUnits=[],unitLabels=[];
  const uid=()=>[...crypto.getRandomValues(new Uint8Array(16))].map(n=>n.toString(16).padStart(2,'0')).join('');
  const escape=t=>String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const time=t=>`${Math.floor(t/60)}:${String(Math.floor(t%60)).padStart(2,'0')}`;
  function toast(t){$('toast').textContent=t;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),4500);}
  function read(k,fallback=null){try{return localStorage.getItem(k)??fallback;}catch{return fallback;}}
  function write(k,v){try{localStorage.setItem(k,v);return true;}catch{toast('浏览器存储不可用或已满，请保留当前页面。');return false;}}
  function show(id){if(!$(id).open)$(id).showModal();}
  function slots(){try{return JSON.parse(read(SLOTS,read('daqin-slots-v3','[]')));}catch{return [];}}
  function autoRaw(){return read(KEY,read('daqin-save-v3'));}
  function saveAuto(){if(mode==='single'&&authority){write(KEY,E.serialize(authority));autoAt=authority.time;}}
  function accept(v){previous=view;snapshotAt=performance.now();view=v;faction=v.player;
    if(field!==null&&!v.fields[field]&&!v.cities.some(c=>c.id===field&&!c.hidden)){field=null;unitSelection.clear();camera={zoom:1,x:0,y:0};}
    const f=v.fields[field];if(f)unitSelection=new Set([...unitSelection].filter(id=>f.units.some(u=>u.id===id&&u.count>0&&u.side===f.side)));
    if(v.ended&&resultShown!==`${mode}:${room?.id||authority?.recordId}:${v.ended}`){resultShown=`${mode}:${room?.id||authority?.recordId}:${v.ended}`;recordResult();$('result-title').textContent=v.ended==='win'?'天下归一':'此役未竟';$('result-text').textContent=`${E.F[faction]} · ${time(v.result?.time||v.time)}。${mode==='multi'&&v.ended==='lose'?'你的势力已淘汰，其他势力继续争霸。':''}`;show('end');}
  }
  function refresh(){if(authority&&mode==='single')accept(E.projectState(authority,authority.player));}
  function recordResult(){const id=view?.matchId||authority?.recordId;if(!id)return;let records;try{records=JSON.parse(read('daqin-results-v4','{}'));}catch{records={};}if(!records[id+':'+faction]){records[id+':'+faction]={faction,result:view.ended,time:view.result?.time||view.time};write('daqin-results-v4',JSON.stringify(records));}saveAuto();}
  function command(c){if(!view)return;if(mode==='multi'){net('command',{commandId:++commandSeq,command:c});return;}const error=E.applyCommand(authority,faction,c);if(error)toast(error);else{refresh();saveAuto();render();}}
  function city(id=selected){return view?.cities.find(c=>c.id===id&&!c.hidden);}
  function units(){return view?.fields[field]?.units||[];}
  function enter(id){if(!city(id))return;field=id;selected=id;unitSelection.clear();draft=null;camera={zoom:1,x:0,y:0};$('details').hidden=false;render();}
  function leaveField(){field=null;unitSelection.clear();camera={zoom:1,x:0,y:0};render();}
  function select(id,append=false){const c=city(id);if(!c)return;selected=id;if(!append)selection.clear();if(c.owner===faction){if(append&&selection.has(id))selection.delete(id);else selection.add(id);}draft=null;$('details').hidden=false;renderPanel();renderOrders();}
  function renderPanel(){const c=city();if(!c){$('details').hidden=true;return;}
    const own=c.owner===faction,heroes=view.heroes.filter(h=>h.city===c.id&&h.healUntil<=view.time),f=view.fields[c.id];
    $('city-panel').innerHTML=`<h2>${escape(c.name)}</h2><p class="tip">${c.owner<0?'中立':E.F[c.owner]} · ${f?.round?'交战 第 '+f.round+' 回合':'驻防'}<br>金币 +${E.income(c).gold}/秒 · 军粮 +${E.income(c).food}/秒</p><div class="troops">${c.troops.map((n,i)=>`<span>${E.TYPES[i]} ${n}</span>`).join('')}</div><button id="enter-city" class="wide" title="双击城池也可进入">进入城市 ↗</button>${own?Object.entries(E.BUILD).map(([key,name])=>`<div class="building"><span>${name} ${c[key]}级</span><button data-build="${key}" ${c[key]>=3?'disabled':''} title="增加建筑等级，费用 ${E.buildCost(c,key)} 金">${c[key]>=3?'已满级':E.buildCost(c,key)+'金 升级'}</button></div>`).join('')+E.TYPES.map((name,i)=>`<div class="building"><span>${name}</span><button data-recruit="${i}" title="32金、24粮；整备 ${12/c.barracks} 秒">+20 · 招募</button></div>`).join('')+`<p class="tip">${c.recruitAt>view.time?'整备 '+Math.ceil(c.recruitAt-view.time)+' 秒':'兵营就绪'}</p><label>驻将<select id="guard"><option value="">选择将领</option>${heroes.map(h=>`<option value="${h.id}">${escape(h.name)} Lv.${h.level}${c.guard===h.id?' · 驻守':''}</option>`).join('')}</select></label><label>防御阵型<select id="formation"><option value="balanced">均衡</option><option value="attack">攻击</option><option value="defense">防守</option></select></label>`:'<p class="tip">相邻城池可侦察；城内需己方军阵提供视野。</p>'}`;
    $('enter-city').hidden=field===c.id;$('enter-city').onclick=()=>enter(c.id);document.querySelectorAll('[data-build]').forEach(b=>b.onclick=()=>command({type:'build',city:c.id,key:b.dataset.build}));document.querySelectorAll('[data-recruit]').forEach(b=>b.onclick=()=>command({type:'recruit',city:c.id,troop:Number(b.dataset.recruit)}));if(own){$('guard').onchange=e=>{if(e.target.value!=='')command({type:'guard',city:c.id,hero:Number(e.target.value)});};$('formation').value=c.formation;$('formation').onchange=e=>command({type:'formation',city:c.id,value:e.target.value});}
  }
  function targetCity(to){const rows=[...selection].map(id=>city(id)).filter(c=>c?.owner===faction&&E.adjacent(c.id,to)).map(c=>({from:c.id,to,troops:c.troops.map(n=>Math.floor(n*.7)),hero:null,formation:'balanced'}));if(!rows.length){toast('请选择与目标相邻的己方城池。');return;}draft={to,rows};$('details').hidden=true;renderOrders();}
  function renderOrders(){
    if(field!==null){const f=view?.fields[field],chosen=units().filter(u=>unitSelection.has(u.id)&&u.count>0);$('orders').innerHTML=`<div class="order-buttons"><strong>${escape(city(field)?.name||'城市')} · ${chosen.length} 军阵</strong><button data-tactic="hold" title="驻守当前位置 · S">驻守 S</button><button data-tactic="advance" title="自主寻找可见敌人 · A">迎敌 A</button><button data-tactic="rally" title="守方移向城内预设集结区" ${f?.side!==1?'disabled':''}>城内集结</button></div><div class="unit-cards">${chosen.map(u=>`<span>${E.TYPES[u.type]} × ${u.count}</span>`).join('')||'<span>框选己方军阵，右键移动或攻击</span>'}</div>`;document.querySelectorAll('[data-tactic]').forEach(b=>b.onclick=()=>tactic(b.dataset.tactic));return;}
    if(!draft){$('orders').innerHTML=`天下军令 · 已选 ${[...selection].map(id=>city(id)?.name).filter(Boolean).join('、')||'无'}　<span class="tip">右键邻城配兵 · 允许零人留守 · 双击进城</span>`;return;}
    $('orders').innerHTML=`<div class="order-buttons"><strong>进军 ${escape(city(draft.to)?.name)}</strong><button id="all-troops">全军</button><button id="half-troops">一半</button><button id="confirm-order" class="primary">下令 Enter</button><button id="cancel-order">取消 Esc</button><span id="order-cost"></span></div>`+draft.rows.map((r,j)=>`<div class="order-row"><b>${city(r.from).name}</b>${E.TYPES.map((name,i)=>`<label>${name}<input data-row="${j}" data-type="${i}" type="number" min="0" max="${city(r.from).troops[i]}" value="${r.troops[i]}"></label>`).join('')}<select data-hero="${j}"><option value="">无主将</option>${view.heroes.filter(h=>h.city===r.from&&h.healUntil<=view.time).map(h=>`<option value="${h.id}" ${h.id===r.hero?'selected':''}>${h.name}</option>`).join('')}</select><select data-form="${j}">${[['balanced','均衡'],['attack','攻击'],['defense','防守']].map(([v,t])=>`<option value="${v}" ${v===r.formation?'selected':''}>${t}</option>`).join('')}</select><small id="reserve-${j}"></small></div>`).join('');
    document.querySelectorAll('[data-row]').forEach(i=>i.oninput=()=>{draft.rows[i.dataset.row].troops[i.dataset.type]=Number(i.value);orderCost();});document.querySelectorAll('[data-hero]').forEach(i=>i.onchange=()=>{draft.rows[i.dataset.hero].hero=i.value===''?null:Number(i.value);orderCost();});document.querySelectorAll('[data-form]').forEach(i=>i.onchange=()=>draft.rows[i.dataset.form].formation=i.value);
    for(const [id,f]of [['all-troops',1],['half-troops',.5]])$(id).onclick=()=>{draft.rows.forEach(r=>r.troops=city(r.from).troops.map(n=>Math.floor(n*f)));renderOrders();};$('confirm-order').onclick=confirmOrder;$('cancel-order').onclick=()=>{draft=null;renderOrders();};orderCost();
  }
  function orderCost(){let cost=0;draft.rows.forEach((r,i)=>{cost+=E.foodCost(r.troops,view.heroes.find(h=>h.id===r.hero));$('reserve-'+i).textContent='留守 '+(E.total(city(r.from).troops)-E.total(r.troops));});$('order-cost').textContent=cost+' 粮';}
  function confirmOrder(){if(!draft)return;const c={type:'dispatch',rows:draft.rows};if(mode==='single'){const error=E.applyCommand(authority,faction,c);if(error){toast(error);return;}refresh();saveAuto();}else net('command',{commandId:++commandSeq,command:c});draft=null;render();}
  function tactic(kind,p={x:50,y:50},target=null){command({type:'tactical',city:field,ids:[...unitSelection],kind,x:p.x,y:p.y,target});}
  function render(){
    $('return').hidden=!view;$('continue').disabled=!readyAssets||!autoRaw();$('new').disabled=!readyAssets;$('speed').disabled=mode==='multi';
    if(!view)return;$('resources').textContent=`金 ${Math.floor(view.resources.gold)}（+${view.income}/秒）　粮 ${Math.floor(view.resources.food)}　${E.F[faction]} ${view.cities.filter(c=>c.owner===faction).length}/12 城`;
    $('clock').textContent=time(view.time)+' · '+(mode==='multi'?'局域网':view.difficulty==='hard'?'困难':'普通');$('view-title').textContent=field===null?'四海舆图':(city(field)?.name||'城市')+' · 城市作战';$('world-view').hidden=field===null;
    $('guide').textContent=field===null?'左键选城 / 框选 · Shift 追加 · 右键相邻目标配兵 · Enter 下令 · 双击进城':'一人代表一军阵 · 选中查看兵数 · 框选 / 右键移动或攻击 · S 驻守 · A 迎敌 · Esc 返回';
    $('pause').textContent=view.paused?'恢复':room?.votes?.includes(faction)?'已投暂停':'暂停';$('paused-label').hidden=!view.paused&&!room?.graceUntil;$('paused-label').textContent=room?.graceUntil?'等候掉线玩家 · 最多 30 秒':'已暂停 · '+(mode==='multi'?'军令暂停，最长 120 秒':'运筹帷幄');
    $('city-nav').innerHTML=view.cities.filter(c=>!c.hidden).map(c=>`<button data-city="${c.id}" title="选择 ${c.name}">${c.name}</button>`).join('');document.querySelectorAll('[data-city]').forEach(b=>b.onclick=()=>field===null?select(Number(b.dataset.city)):enter(Number(b.dataset.city)));
    $('fronts').textContent=view.armies.map(a=>`${E.F[a.owner]} → ${city(a.to)?.name||'远征'} ${E.total(a.troops)}兵 · ${a.status==='waiting'?'等待前战':a.status==='battle'?'交战':Math.max(0,Math.ceil(a.arrive-view.time))+'秒'}`).join('　｜　')||'驿道安宁';
    $('logs').innerHTML=view.logs.map(l=>`<p>${time(l.time)}　${escape(l.text)}</p>`).join('')||'<p>暂无可见战报</p>';
    if(!$('details').hidden&&!/INPUT|SELECT/.test(document.activeElement.tagName))renderPanel();if(!draft)renderOrders();
  }
  function resize(){const r=canvas.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);W=r.width;H=r.height;canvas.width=W*d;canvas.height=H*d;ctx.setTransform(d,0,0,d,0,0);if(readyAssets)draw(performance.now());}
  function cameraTransform(){const img=images[field===null?'world':'city'];if(!img)return null;const base=field===null?Math.min(W/img.width,H/img.height,1):Math.max(W/img.width,H/img.height),scale=base*camera.zoom,w=img.width*scale,h=img.height*scale;const limitX=field===null?w*.8:Math.max(0,(w-W)/2),limitY=field===null?h*.8:Math.max(0,(h-H)/2);camera.x=Math.max(-limitX,Math.min(limitX,camera.x));camera.y=Math.max(-limitY,Math.min(limitY,camera.y));return {x:(W-w)/2+camera.x,y:(H-h)/2+camera.y,scale,w,h,iw:img.width,ih:img.height};}
  const screen=p=>({x:transform.x+p.x/100*transform.w,y:transform.y+p.y/100*transform.h});
  const logical=p=>({x:(p.x-transform.x)/transform.w*100,y:(p.y-transform.y)/transform.h*100});
  const point=e=>{const r=canvas.getBoundingClientRect();return {x:e.clientX-r.left,y:e.clientY-r.top};};
  function hitCity(p){return view?.cities.filter(c=>!c.hidden).find(c=>{const q=screen({x:A.positions[c.id][0]*100,y:A.positions[c.id][1]*100});return Math.hypot(p.x-q.x,p.y-q.y)<24;});}
  let fogView=null,fogField=null;
  function prepareCityTerrain(f){
    if(fogView===view&&fogField===field)return;fogView=view;fogField=field;
    const image=images.city,w=image.width,h=image.height;
    if(fog.width!==w||fog.height!==h){fog.width=cityTerrain.width=w;fog.height=cityTerrain.height=h;}
    const g=fog.getContext('2d');g.clearRect(0,0,w,h);
    // Static city geography is known once occupied/entered. Fog shades it rather than erasing roofs.
    // Enemy sprites still come exclusively from the authoritative visibility projection.
    if(!f){g.fillStyle='#06111e';g.fillRect(0,0,w,h);}
    else if(f.round||f.side!==1){
      g.fillStyle=f.side===1?'rgba(4,16,32,.32)':'rgba(4,16,32,.48)';g.fillRect(0,0,w,h);
      const mask=sightMask.getContext('2d');mask.clearRect(0,0,100,100);mask.fillStyle='#fff';
      const own=f.units.filter(u=>u.side===f.side&&u.count>0),index=new N.Index(own);
      for(let y=0;y<100;y+=2)for(let x=0;x<100;x+=2){const p={x:x+1,y:y+1};if(index.near(p,29).some(u=>N.line(u,p))||f.side===1&&Math.hypot(p.x-N.rally.x,p.y-N.rally.y)<=25&&N.line(N.rally,p))mask.fillRect(x,y,2,2);}
      g.save();g.globalCompositeOperation='destination-out';g.filter='blur(12px)';g.drawImage(sightMask,0,0,w,h);g.restore();
    }
    const ground=cityTerrain.getContext('2d');ground.clearRect(0,0,w,h);ground.drawImage(image,0,0);ground.drawImage(fog,0,0);
  }
  function hitUnit(p,side=null){
    const candidates=renderedUnits.filter(u=>u.count>0&&(side===null||u.side===side));
    const label=unitLabels.find(l=>p.x>=l.x&&p.x<=l.x+l.w&&p.y>=l.y&&p.y<=l.y+l.h&&candidates.some(u=>u.id===l.id));
    if(label)return candidates.find(u=>u.id===label.id);
    return candidates.filter(u=>{const q=screen(u),size=u.spriteSize*transform.scale;return p.x>=q.x-size*.35&&p.x<=q.x+size*.35&&p.y>=q.y-size*.75&&p.y<=q.y+8;}).sort((a,b)=>{const pa=screen(a),pb=screen(b);return Math.hypot(p.x-pa.x,p.y-pa.y+12)-Math.hypot(p.x-pb.x,p.y-pb.y+12);})[0];
  }
  function drawUnitLabels(){
    const hovered=pointer&&hitUnit(pointer);unitLabels=[];const chosen=renderedUnits.filter(u=>u.count>0&&(unitSelection.has(u.id)||u.id===hovered?.id));
    const mapRect=canvas.getBoundingClientRect(),reserved=renderedUnits.filter(u=>u.count>0).map(u=>{const p=screen(u),s=u.spriteSize*transform.scale;return {x:p.x-s*.35,y:p.y-s*.75,w:s*.7,h:s*.75+5};});
    for(const element of [mini,$('city-nav'),document.querySelector('.legend'),$('paused-label')])if(!element.hidden){const r=element.getBoundingClientRect();reserved.push({x:r.left-mapRect.left,y:r.top-mapRect.top,w:r.width,h:r.height});}
    const overlaps=(a,b)=>a.x<b.x+b.w+3&&a.x+a.w+3>b.x&&a.y<b.y+b.h+3&&a.y+a.h+3>b.y;
    ctx.font='11px system-ui';ctx.textAlign='center';ctx.textBaseline='middle';
    for(const u of chosen.sort((a,b)=>a.y-b.y||a.id.localeCompare(b.id))){const p=screen(u),text=E.TYPES[u.type][0]+' '+u.count,w=Math.ceil(ctx.measureText(text).width)+12,h=19;
      if(p.x<0||p.x>W||p.y<0||p.y>H)continue;let label=null;
      for(let row=0;row<8&&!label;row++)for(const offset of [0,-1,1,-2,2]){const q={x:p.x-w/2+offset*(w+4),y:p.y+9+row*(h+4),w,h,id:u.id};if(q.x<4||q.y<4||q.x+w>W-4||q.y+h>H-4||reserved.some(r=>overlaps(q,r)))continue;label=q;break;}
      // A dense formation is summarized in the selection dock instead of printing overlapping numbers.
      if(!label)continue;reserved.push(label);unitLabels.push(label);
      ctx.strokeStyle=unitSelection.has(u.id)?'#eedb96':colors[u.owner<0?3:u.owner];ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(p.x,p.y+3);ctx.lineTo(label.x+w/2,label.y);ctx.stroke();ctx.fillStyle='#0b1e30ed';ctx.fillRect(label.x,label.y,w,h);ctx.strokeRect(label.x+.5,label.y+.5,w-1,h-1);ctx.fillStyle='#fff1c8';ctx.fillText(text,label.x+w/2,label.y+h/2);
    }ctx.textBaseline='alphabetic';
  }
  function draw(now){ctx.clearRect(0,0,W,H);transform=cameraTransform();if(!transform)return;const t=transform;ctx.save();ctx.translate(t.x,t.y);ctx.scale(t.scale,t.scale);ctx.drawImage(images[field===null?'world':'city'],0,0);
    if(view&&field===null){ctx.lineWidth=1.5/t.scale;E.ROADS.forEach(([a,b])=>{if(!city(a)||!city(b))return;ctx.strokeStyle='#ead29888';ctx.setLineDash([5/t.scale,6/t.scale]);ctx.beginPath();ctx.moveTo(A.positions[a][0]*t.iw,A.positions[a][1]*t.ih);ctx.lineTo(A.positions[b][0]*t.iw,A.positions[b][1]*t.ih);ctx.stroke();});ctx.setLineDash([]);
      for(const c of view.cities.filter(c=>!c.hidden)){const [px,py]=A.positions[c.id],x=px*t.iw,y=py*t.ih;ctx.fillStyle='#092137';ctx.strokeStyle=selection.has(c.id)?'#ffe2a0':colors[c.owner<0?3:c.owner];ctx.lineWidth=(selection.has(c.id)?3:2)/t.scale;ctx.beginPath();ctx.arc(x,y,12/t.scale,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.font=`${14/t.scale}px serif`;ctx.textAlign='center';ctx.fillStyle='#ffe5b5';ctx.strokeStyle='#061120';ctx.lineWidth=4/t.scale;const label=c.name+' '+E.total(c.troops);ctx.strokeText(label,x,y+29/t.scale);ctx.fillText(label,x,y+29/t.scale);}
      for(const a of view.armies){const from=A.positions[a.from],to=A.positions[a.to],r=Math.max(0,Math.min(1,(view.time+(view.substep||0)/10-a.depart)/(a.arrive-a.depart))),x=(from[0]+(to[0]-from[0])*r)*t.iw,y=(from[1]+(to[1]-from[1])*r)*t.ih;ctx.strokeStyle=colors[a.owner];ctx.beginPath();ctx.moveTo(from[0]*t.iw,from[1]*t.ih);ctx.lineTo(x,y);ctx.stroke();ctx.fillStyle=colors[a.owner];ctx.fillRect(x-4/t.scale,y-14/t.scale,14/t.scale,10/t.scale);ctx.font=`${10/t.scale}px sans-serif`;ctx.fillStyle='#fff';ctx.fillText(a.status==='waiting'?'等待':E.total(a.troops),x,y-20/t.scale);}
    }else if(view){const f=view.fields[field],old=previous?.fields[field],blend=view.paused?1:Math.min(1,(now-snapshotAt)/100),drawables=(f?.units||[]).map(u=>{const p=old?.units.find(v=>v.id===u.id);return {...u,x:p?p.x+(u.x-p.x)*blend:u.x,y:p?p.y+(u.y-p.y)*blend:u.y};});
      prepareCityTerrain(f);ctx.drawImage(cityTerrain,0,0);
      // One uniformly scaled representative per formation; stable size relative to city terrain.
      renderedUnits=drawables.map(u=>{u.spriteSize=28;return u;});
      const layers=[...drawables,...N.polygons.filter(p=>p.kind==='building').map(p=>({occlusion:p.points,y:Math.max(...p.points.map(p=>p[1]))})),...N.walls.map(points=>({wall:points,y:Math.max(...points.map(p=>p[1]))}))];
      for(const u of layers.sort((a,b)=>a.y-b.y)){
        if(u.occlusion||u.wall){ctx.save();ctx.beginPath();if(u.occlusion){u.occlusion.forEach(([x,y],i)=>ctx[i?'lineTo':'moveTo'](x/100*t.iw,y/100*t.ih));ctx.closePath();}else{const [a,b]=u.wall,dx=b[0]-a[0],dy=b[1]-a[1],d=Math.hypot(dx,dy),nx=-dy/d*.85,ny=dx/d*.85;for(const [i,p]of [[a[0]+nx,a[1]+ny],[b[0]+nx,b[1]+ny],[b[0]-nx,b[1]-ny],[a[0]-nx,a[1]-ny]].entries())ctx[i?'lineTo':'moveTo'](p[0]/100*t.iw,p[1]/100*t.ih);ctx.closePath();}ctx.clip();ctx.drawImage(cityTerrain,0,0);ctx.restore();continue;}
        const x=u.x/100*t.iw,y=u.y/100*t.ih,action=u.count<=0?'death':u.attacking?'attack':u.moving?'move':'idle',frames=A.actions[action],n=frames[Math.floor(now/250)%frames.length],im=images[`${A.troops[u.type]}-${action}-${n}`];if(!im)continue;const chosen=unitSelection.has(u.id),size=u.spriteSize;ctx.strokeStyle=chosen?'#f7df98':colors[u.owner<0?3:u.owner];ctx.lineWidth=(chosen?1.5:1)/t.scale;ctx.beginPath();ctx.ellipse(x,y,size*.18,size*.08,0,0,Math.PI*2);ctx.stroke();ctx.drawImage(im,x-size*A.anchor[0]/A.size,y-size*A.anchor[1]/A.size,size,size);
      }
    }ctx.restore();
    if(field!==null){drawUnitLabels();if(!view?.fields[field]){ctx.fillStyle='#c8d4df';ctx.font='16px serif';ctx.textAlign='center';ctx.fillText('尚无己方军阵进入 · 城内情报未开启',W/2,H/2);}}
    if(drag&&pointer){ctx.fillStyle='#efd79522';ctx.strokeStyle='#f5d58f';ctx.fillRect(drag.x,drag.y,pointer.x-drag.x,pointer.y-drag.y);ctx.strokeRect(drag.x,drag.y,pointer.x-drag.x,pointer.y-drag.y);}
    if(draft&&field===null){ctx.strokeStyle='#ffec9d';ctx.setLineDash([7,4]);for(const r of draft.rows){const p=screen({x:A.positions[r.from][0]*100,y:A.positions[r.from][1]*100}),q=screen({x:A.positions[r.to][0]*100,y:A.positions[r.to][1]*100});ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();}ctx.setLineDash([]);}
    const mw=210,mh=Math.round(mw*t.ih/t.iw);if(mini.height!==mh)mini.height=mh;mg.clearRect(0,0,mw,mh);mg.drawImage(field===null?images.world:cityTerrain,0,0,mw,mh);if(field===null){for(const c of view?.cities||[]){if(c.hidden)continue;mg.fillStyle=colors[c.owner<0?3:c.owner];mg.fillRect(A.positions[c.id][0]*mw-2,A.positions[c.id][1]*mh-2,4,4);}}else{for(const u of units().filter(u=>u.count>0)){mg.fillStyle=colors[u.owner<0?3:u.owner];mg.fillRect(u.x/100*mw,u.y/100*mh,2,2);}}const left=Math.max(1,-t.x/t.w*mw),top=Math.max(1,-t.y/t.h*mh),right=Math.min(mw-1,(W-t.x)/t.w*mw),bottom=Math.min(mh-1,(H-t.y)/t.h*mh);mg.strokeStyle='#fff0ad';if(right>left&&bottom>top)mg.strokeRect(left,top,right-left,bottom-top);
  }
  canvas.addEventListener('wheel',e=>{e.preventDefault();if(!transform)return;const p=point(e),q=logical(p);camera.zoom=Math.max(.7,Math.min(3,camera.zoom*Math.exp(-e.deltaY*.001)));transform=cameraTransform();const n=screen(q);camera.x+=p.x-n.x;camera.y+=p.y-n.y;},{passive:false});
  canvas.addEventListener('pointerdown',e=>{canvas.setPointerCapture(e.pointerId);if(e.button===1){e.preventDefault();pan={...point(e),cx:camera.x,cy:camera.y};}else if(e.button===0)drag=pointer=point(e);});
  canvas.addEventListener('pointermove',e=>{pointer=point(e);if(pan){camera.x=pan.cx+pointer.x-pan.x;camera.y=pan.cy+pointer.y-pan.y;}});
  let cityClick=null;
  const repeatsCityClick=e=>cityClick&&e.timeStamp-cityClick.time<500&&Math.hypot(e.clientX-cityClick.x,e.clientY-cityClick.y)<6;
  canvas.addEventListener('pointerup',e=>{if(e.button===1){pan=null;return;}if(!drag||!view||!transform){drag=null;return;}const p=point(e),box=Math.hypot(p.x-drag.x,p.y-drag.y)>6,inside=q=>q.x>=Math.min(drag.x,p.x)&&q.x<=Math.max(drag.x,p.x)&&q.y>=Math.min(drag.y,p.y)&&q.y<=Math.max(drag.y,p.y);
    if(field===null){if(box){cityClick=null;if(!e.shiftKey)selection.clear();view.cities.filter(c=>c.owner===faction&&inside(screen({x:A.positions[c.id][0]*100,y:A.positions[c.id][1]*100}))).forEach(c=>selection.add(c.id));draft=null;$('details').hidden=true;}else{const c=repeatsCityClick(e)?city(cityClick.id):hitCity(p);if(c){if(!repeatsCityClick(e))cityClick={id:c.id,x:e.clientX,y:e.clientY,time:e.timeStamp};select(c.id,e.shiftKey);}else cityClick=null;}}
    else{if(!e.shiftKey)unitSelection.clear();const own=units().filter(u=>u.side===view.fields[field]?.side&&u.count>0);if(box)own.filter(u=>inside(screen(u))).forEach(u=>unitSelection.add(u.id));else{const u=hitUnit(p,view.fields[field]?.side);if(u)unitSelection.add(u.id);}}drag=null;renderOrders();});
  canvas.addEventListener('pointercancel',()=>{drag=null;pan=null;cityClick=null;});canvas.addEventListener('dblclick',e=>{if(field===null){const c=repeatsCityClick(e)?city(cityClick.id):hitCity(point(e));cityClick=null;if(c)enter(c.id);}});
  canvas.addEventListener('contextmenu',e=>{e.preventDefault();if(!view||!transform)return;const p=point(e);if(field===null){const c=hitCity(p);if(c)targetCity(c.id);}else{const target=hitUnit(p,1-view.fields[field]?.side),q=logical(p);tactic(target?'attack':'move',target||q,target?.id);}});
  mini.onclick=e=>{if(!transform)return;const r=mini.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;camera.x=(.5-x)*transform.w;camera.y=(.5-y)*transform.h;};
  function startSingle(raw=null){if(!readyAssets)return;try{authority=raw?E.restore(raw):E.create(0,$('difficulty').value);if(authority.mode==='multi')throw Error('联机存档只能由服务器恢复');authority.recordId=authority.recordId||uid();mode='single';room=null;view=null;previous=null;resultShown=null;field=null;selection=new Set([authority.selected]);selected=authority.selected;unitSelection.clear();draft=null;camera={zoom:1,x:0,y:0};acc=0;for(const id of ['start','saves','end','lobby'])$(id).close();refresh();render();saveAuto();}catch(e){toast('载入失败：'+e.message);}}
  function pause(){if(!view||view.ended)return;if(mode==='multi')net('pause');else{authority.paused=!authority.paused;acc=0;refresh();render();}}
  function menu(){if(mode==='single'&&authority){authority.paused=true;refresh();saveAuto();}show('start');render();}
  $('new').onclick=()=>{if(mode==='multi'&&room){toast('请先退出联机房间。');return;}if(authority&&!confirm('放弃当前对局并开始新局？'))return;startSingle();};$('continue').onclick=()=>{if(mode==='multi'&&room){toast('请先退出联机房间。');return;}startSingle(autoRaw());};$('menu').onclick=menu;$('return').onclick=()=>$('start').close();$('pause').onclick=pause;$('speed').onclick=()=>{if(mode==='single'){speed=speed===1?2:1;$('speed').textContent=speed+'×';}};$('world-view').onclick=leaveField;$('close-details').onclick=()=>$('details').hidden=true;$('toggle-log').onclick=()=>$('logs').hidden=!$('logs').hidden;$('review').onclick=()=>{$('end').close();$('logs').hidden=false;};$('again').onclick=()=>{$('end').close();menu();};
  function showSaves(kind=mode){saveMode=kind;if(kind==='single'&&authority){authority.paused=true;refresh();saveAuto();}if(kind==='multi')net('listSaves');$('save-title').textContent=kind==='multi'?'服务器存档 · 创建者管理':'单机存档 · 本机浏览器';renderSaves();show('saves');}
  function renderSaves(){const list=saveMode==='multi'?serverSlots:[...(autoRaw()?[{id:'auto',name:'自动存档（旧版读取副本迁移）',raw:autoRaw()}]:[]),...slots()];$('save-current').disabled=saveMode==='single'?!authority:!room||room.creatorFaction!==faction;$('save-list').innerHTML=list.map(s=>`<article class="save-row"><strong>${escape(s.name)}</strong><p class="tip">${escape(s.saved||'本机存档')}</p><button data-load="${escape(s.id)}">载入</button>${s.id==='auto'?'':`<button data-overwrite="${escape(s.id)}">覆盖</button>`}<button data-delete="${escape(s.id)}">删除</button></article>`).join('')||'<p>暂无存档</p>';
    document.querySelectorAll('[data-load]').forEach(b=>b.onclick=()=>{if(view&&!confirm('载入将放弃当前页面对局，继续？'))return;if(saveMode==='multi'){net('load',{save:b.dataset.load});$('saves').close();show('lobby');}else{activeSlot=b.dataset.load;startSingle(list.find(s=>s.id===activeSlot).raw);}});
    document.querySelectorAll('[data-overwrite]').forEach(b=>b.onclick=()=>{if(!confirm('覆盖所选存档？'))return;storeSlot(b.dataset.overwrite,list.find(s=>s.id===b.dataset.overwrite).name);});
    document.querySelectorAll('[data-delete]').forEach(b=>b.onclick=()=>{if(!confirm('删除所选存档？'))return;if(saveMode==='multi')net('deleteSave',{save:b.dataset.delete});else if(b.dataset.delete==='auto'){try{localStorage.removeItem(KEY);localStorage.removeItem('daqin-save-v3');}catch{toast('删除失败');}}else write(SLOTS,JSON.stringify(slots().filter(s=>s.id!==b.dataset.delete)));renderSaves();});
  }
  function storeSlot(id=null,name=$('slot-name').value.trim()){if(!name){toast('请输入存档名称。');return;}if(saveMode==='multi'){net('save',{save:id,name});return;}if(!authority)return;let next=slots();if(!id&&next.length>=12){toast('最多 12 个手动存档。');return;}id=id||uid();next=[{id,name,raw:E.serialize(authority),saved:new Date().toLocaleString()},...next.filter(s=>s.id!==id)];write(SLOTS,JSON.stringify(next));renderSaves();}
  $('save').onclick=()=>showSaves();$('manage-saves').onclick=()=>showSaves('single');$('save-current').onclick=()=>storeSlot();$('close-saves').onclick=()=>$('saves').close();
  function net(type,data={}){if(!socket||socket.readyState!==WebSocket.OPEN){toast('服务连接已断开，正在重连。');return;}socket.send(JSON.stringify({v:1,room:room?.id||null,id:uid(),type,...data}));}
  function identity(){let token=read('daqin-lan-identity-v1');if(!token){token=[...crypto.getRandomValues(new Uint8Array(32))].map(n=>n.toString(16).padStart(2,'0')).join('');write('daqin-lan-identity-v1',token);}return token;}
  function connect(){let url;try{url=new URL($('server-address').value);if(!['http:','https:'].includes(url.protocol))throw Error();}catch{toast('请输入 http://局域网地址:端口');return;}clearTimeout(reconnectTimer);closing=true;socket?.close();closing=false;const ws=new WebSocket(url.href.replace(/^http/,'ws'));socket=ws;seq=0;$('connection').textContent='连接中…';ws.onopen=()=>{if(ws!==socket)return;net('hello',{token:identity()});};
    ws.onmessage=e=>{if(ws!==socket)return;let m;try{m=JSON.parse(e.data);}catch{return;}if(m.v!==1)return;if(m.type==='joined'){if(room?.id!==m.room){view=null;previous=null;field=null;selection.clear();unitSelection.clear();draft=null;}room={id:m.room};seq=0;faction=m.faction;commandSeq=m.commandSeq;write('daqin-last-room',m.room);}
      if(m.room&&m.room!==room?.id)return;if(m.seq&&m.seq<=seq)return;if(m.seq)seq=m.seq;
      if(m.type==='hello'){$('lobby-actions').hidden=false;$('connection').textContent='已连接';serverSlots=m.saves||[];const code=room?.id;if(code)net('join',{room:code,nickname:$('nickname').value});}
      if(m.type==='room'){room=m.info;renderRoom();}
      if(m.type==='state'){const first=mode!=='multi'||!view;mode='multi';speed=1;$('speed').textContent='1×';authority=null;accept(m.state);$('start').close();$('lobby').close();$('connection').textContent='房间 '+room.id+' · 服务器裁决';if(first)render();}
      if(m.type==='error'||m.type==='ack'&&m.error){toast(m.error);$('lobby-error').textContent=m.error;}
      if(m.type==='saves'){serverSlots=m.saves;renderSaves();}
      if(m.type==='left'){room=null;mode='single';view=null;renderRoom();}
      if(m.type==='replaced'){closing=true;room=null;toast(m.error);}
    };ws.onclose=()=>{if(ws!==socket)return;$('connection').textContent='断线 · 等候重连';if(!closing&&room)reconnectTimer=setTimeout(connect,1500);};ws.onerror=()=>{$('lobby-error').textContent='无法连接：检查地址、同一局域网、服务进程及防火墙端口。';};
  }
  function renderRoom(){if(!room){$('room-info').innerHTML='';$('room-actions').hidden=true;return;}if(!room.seats)return;$('room-actions').hidden=room.status!=='lobby';$('faction').value=faction;$('start-room').disabled=room.creatorFaction!==faction;$('room-info').innerHTML=`<h3>房间 ${room.id} · ${room.status==='lobby'?'等待准备':'征战中'}</h3>`+room.seats.map((s,i)=>`<article>${E.F[i]} · ${s?escape(s.nickname)+' · '+(s.ai?'AI 代管':s.connected?s.ready?'已准备':'在线':'缺席'):'AI 空位'}${s&&!s.connected&&!s.ai&&room.creatorFaction===faction?` <button data-delegate="${i}">明确改为 AI 代管</button>`:''}</article>`).join('');document.querySelectorAll('[data-delegate]').forEach(b=>b.onclick=()=>net('delegate',{faction:Number(b.dataset.delegate)}));}
  $('server-address').value=location.protocol==='file:'?'http://localhost:8080':location.origin;$('room-code').value=read('daqin-last-room','');$('connect').onclick=connect;$('network').onclick=()=>{show('lobby');if(location.protocol!=='file:'&&!socket)connect();};$('close-lobby').onclick=()=>$('lobby').close();$('create-room').onclick=()=>net('create',{nickname:$('nickname').value});$('join-room').onclick=()=>net('join',{room:$('room-code').value.toUpperCase(),nickname:$('nickname').value});$('ready').onclick=()=>net('ready');$('faction').onchange=e=>net('faction',{faction:Number(e.target.value)});$('start-room').onclick=()=>net('start',{difficulty:$('difficulty').value});$('leave-room').onclick=()=>{if(confirm('退出当前房间？开局后将按掉线规则由 AI 接管。'))net('leave');};$('server-saves').onclick=()=>showSaves('multi');
  $('export-records').onclick=()=>{const record={format:4,player:faction,result:view?.result,visible:view,metrics:mode==='single'?authority?.metrics.filter(m=>m.actor===faction):undefined,economy:mode==='single'?authority?.economy.map(e=>({time:e.time,...e.factions[faction]})):undefined};const url=URL.createObjectURL(new Blob([JSON.stringify(record,null,2)],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download='大秦-本势力记录.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
  document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='s'){e.preventDefault();showSaves();return;}if(document.querySelector('dialog[open]')||/INPUT|SELECT|TEXTAREA/.test(e.target.tagName))return;if(e.code==='Space'){e.preventDefault();pause();}if(e.key==='Enter')confirmOrder();if(e.key==='Escape'){if(draft){draft=null;renderOrders();}else if(field!==null)leaveField();else $('details').hidden=true;}if(field!==null&&['s','a'].includes(e.key.toLowerCase()))tactic(e.key.toLowerCase()==='s'?'hold':'advance');});
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&mode==='single'&&authority){authority.paused=true;acc=0;refresh();saveAuto();render();}});
  async function loadAssets(){readyAssets=false;show('loading');$('retry').hidden=true;const files=[...Object.entries(A.maps),...A.troops.flatMap(t=>Object.entries(A.actions).flatMap(([action,frames])=>frames.map(n=>[`${t}-${action}-${n}`,`assets/processed/troops/${t}/${action}-${String(n).padStart(2,'0')}.png`])))],failed=[];let done=0;
    await Promise.all(files.map(([key,url])=>new Promise(resolve=>{if(images[key]){done++;resolve();return;}const img=new Image();img.onload=()=>{images[key]=img;finish();};img.onerror=()=>{failed.push(url);finish();};function finish(){$('load-progress').value=++done/files.length;$('load-text').textContent=`已加载 ${done}/${files.length}`;resolve();}img.src=url;})));
    if(failed.length){$('load-text').textContent='缺失素材：\n'+failed.join('\n');$('retry').hidden=false;return;}readyAssets=true;$('loading').close();render();show('start');
  }
  $('retry').onclick=loadAssets;$('loading').addEventListener('cancel',e=>e.preventDefault());
  function frame(now){const dt=Math.min(.25,(now-last)/1000);frameTimes.push(now-last);if(frameTimes.length>600)frameTimes.shift();last=now;frameCount++;
    if(mode==='single'&&authority&&!authority.paused&&!authority.ended){acc+=dt*speed;let stepped=false;while(acc>=.1){E.step(authority);acc-=.1;stepped=true;}if(stepped)refresh();if(authority.time-autoAt>=12)saveAuto();}else acc=0;
    if(now-uiAt>700){render();uiAt=now;}if(readyAssets)draw(now);requestAnimationFrame(frame);
  }
  window.DaqinDiagnostics={performance:()=>({frames:frameCount,averageFPS:1000/(frameTimes.reduce((a,b)=>a+b,0)/frameTimes.length),viewport:[W,H]}),resetPerformance:()=>{frameCount=0;frameTimes=[];last=performance.now();},visible:()=>JSON.parse(JSON.stringify(view)),layout:()=>({field,transform:{...transform},units:field===null?[]:renderedUnits.map(u=>({id:u.id,...screen(u),size:u.spriteSize*transform.scale,side:u.side})),labels:unitLabels.map(l=>({...l}))})};
  new ResizeObserver(resize).observe(canvas);resize();loadAssets();requestAnimationFrame(frame);
})();
