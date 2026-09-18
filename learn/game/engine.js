(function (root) {
  'use strict';
  const Field=typeof module!=='undefined'?require('./tactical.js'):root.DaqinField;
  const Nav=typeof module!=='undefined'?require('./navigation.js'):root.DaqinNav;
  const SAVE_VERSION=4;
  const F = ['大秦', '波斯', '罗马'];
  const NAMES = ['咸阳', '巴蜀', '漠北', '天竺', '波斯', '巴比伦', '南洋', '埃及', '迦太基', '罗马', '玛雅', '高卢'];
  const POS = [[.82,.38],[.77,.51],[.76,.22],[.665,.61],[.625,.40],[.545,.45],[.845,.73],[.52,.59],[.41,.50],[.49,.31],[.18,.63],[.40,.22]];
  const ROADS = [[0,1],[0,2],[0,6],[1,2],[1,3],[2,4],[3,4],[3,6],[4,5],[4,9],[5,7],[7,8],[7,9],[8,9],[8,10],[9,11],[10,11],[6,10]];
  const TYPES = ['枪兵','骑兵','弓兵'];
  const BUILD = {homes:'民居', farms:'农田', barracks:'兵营', walls:'城墙'};
  const HEROES = [
    ['蒙恬',0,88,94,'cavalry','北疆铁骑 · 骑兵伤害 +25%'],['王翦',0,94,97,'siege','百战不殆 · 攻城伤害 +20%'],['李斯',0,99,72,'supply','统筹粮道 · 出征粮耗 -35%'],
    ['阿尔达',1,88,94,'cavalry','重装骑军 · 骑兵伤害 +25%'],['巴赫拉',1,94,97,'siege','破城军势 · 攻城伤害 +20%'],['米特拉',1,99,72,'supply','王道补给 · 出征粮耗 -35%'],
    ['马库斯',2,88,94,'archer','军团齐射 · 弓兵伤害 +25%'],['卢修斯',2,94,97,'siege','鹰旗征服 · 攻城伤害 +20%'],['盖乌斯',2,99,72,'supply','军团后勤 · 出征粮耗 -35%']
  ];
  const total = a => a.reduce((x,y)=>x+y,0);
  const adjacent = (a,b) => a!==b && ROADS.some(r => r.includes(a)&&r.includes(b));
  const income = c => ({gold:1+c.homes*2,food:1+c.farms});
  function create(player=0,difficulty='normal') {
    const s = {version:1,schema:SAVE_VERSION,mode:'single',humans:[player],substep:0,results:[null,null,null],winner:null,metrics:[],player,difficulty,time:0,nextId:1,ended:null,paused:false,selected:player===0?0:player===1?4:9,
      factions:F.map(()=>({gold:320,food:300,eliminated:false})),cities:[],heroes:[],armies:[],battles:[],logs:[],aiClock:0,
      aiNext:[45,45,45],aiCursor:[0,0,0],aiSeen:[{},{},{}],economy:[],
      tutorial:{build:false,guard:false,capture:false},rewarded:false};
    s.cities=NAMES.map((name,id)=>({id,name,x:POS[id][0],y:POS[id][1],owner:[0,1].includes(id)?0:[4,5].includes(id)?1:[9,11].includes(id)?2:-1,
      troops:[0,1,4,5,9,11].includes(id)?[65,35,40]:[22,12,16],homes:1,farms:1,barracks:1,walls:1,recruitAt:0,guard:null,formation:'balanced'}));
    s.heroes=HEROES.map((a,id)=>({id,name:a[0],owner:a[1],command:a[2],force:a[3],skill:a[4],description:a[5],level:1,xp:0,city:[[0,0,1],[4,4,5],[9,9,11]][a[1]][id%3],army:null,healUntil:0}));
    [1,4,7].forEach(id=>{const h=s.heroes[id];s.cities[h.city].guard=id;});
    log(s,'始皇诏令：六国既一，拓土四海。先修内政，再图天下。');return s;
  }
  function log(s,text,details=[]) {const mentioned=s.cities.filter(c=>text.includes(c.name));const audience=F.map((_,o)=>o).filter(o=>mentioned.length&&mentioned.every(c=>worldVisible(s,o).has(c.id)));s.logs.unshift({time:s.time,text,details,audience});s.logs=s.logs.slice(0,500);}
  const fighting = (s,id) => s.battles.some(b=>b.city===id);
  const ready = (s,h) => h && h.army===null && h.city!==null && h.healUntil<=s.time;
  function buildCost(c,key){return 100*c[key];}
  function build(s,id,key,owner=s.player){
    const c=s.cities[id];if(s.ended||!c||c.owner!==owner||!Object.hasOwn(BUILD,key))return '请选择己方城池';
    if(fighting(s,id))return '交战期间不能建设';if(c[key]>=3)return '建筑已达三级';
    const price=buildCost(c,key),f=s.factions[owner];if(f.gold<price)return '金币不足';
    f.gold-=price;c[key]++;if(owner===s.player)s.tutorial.build=true;log(s,`${c.name}：${BUILD[key]}升至 ${c[key]} 级（${price}金）`);return null;
  }
  function recruit(s,id,type,owner=s.player){
    const c=s.cities[id];if(s.ended||!c||c.owner!==owner||![0,1,2].includes(type))return '请选择己方城池与兵种';
    if(fighting(s,id))return '交战期间不能招兵';if(c.recruitAt>s.time)return '兵营正在整备';
    const f=s.factions[owner];if(f.gold<32||f.food<24)return '招兵需要 32 金、24 粮';
    f.gold-=32;f.food-=24;c.troops[type]+=20;log(s,`${c.name}征募${TYPES[type]}20人（32金、24粮）`);c.recruitAt=s.time+12/c.barracks;return null;
  }
  function guard(s,id,hid,owner=s.player){
    const c=s.cities[id],h=s.heroes[hid];if(s.ended||!c||c.owner!==owner||!ready(s,h)||h.owner!==owner||h.city!==id)return '将领须在本城且已结束休养';
    if(fighting(s,id))return '交战期间不能更换守将';c.guard=hid;if(owner===s.player)s.tutorial.guard=true;return null;
  }
  function formation(s,id,value,owner=s.player){const c=s.cities[id];if(s.ended||!c||c.owner!==owner||fighting(s,id)||!['attack','defense','balanced'].includes(value))return '无法调整阵型';c.formation=value;return null;}
  function foodCost(t,h){return Math.ceil(total(t)*.32*(h?.skill==='supply'?.65:1));}
  function send(s,from,to,t,hid,form='balanced',owner=s.player){
    const c=s.cities[from],dest=s.cities[to],h=hid===null?null:s.heroes[hid];
    if(s.ended||!c||!dest||c.owner!==owner||!adjacent(from,to))return '只能从己方城池向相邻城池出兵';
    if(fighting(s,from))return '城池交战中，不能出征';
    if(!['attack','defense','balanced'].includes(form))return '阵型无效';
    if(!Array.isArray(t)||t.length!==3||t.some((n,i)=>!Number.isInteger(n)||n<0||n>c.troops[i]))return '出征兵力超过驻军或数量无效';
    if(hid!==null&&(!ready(s,h)||h.city!==from||h.owner!==owner))return '主将不在本城或正在休养';
    if(total(t)===0&&(!h||dest.owner!==owner))return '攻击需要士兵；零兵力仅可调动将领至己方城池';
    const cost=foodCost(t,h),f=s.factions[owner];if(f.food<cost)return `粮食不足，出征需要 ${cost} 粮`;
    f.food-=cost;c.troops=c.troops.map((n,i)=>n-t[i]);
    const a={id:s.nextId++,owner,from,to,troops:t.slice(),hero:hid,formation:form,depart:s.time,arrive:s.time+18+Math.hypot(POS[from][0]-POS[to][0],POS[from][1]-POS[to][1])*50,status:'march'};
    if(h){h.city=null;h.army=a.id;if(c.guard===hid)c.guard=null;}
    s.armies.push(a);observeThreats(s);log(s,`${F[owner]}军自${c.name}向${dest.name}${dest.owner===owner?'增援':'进军'}（${total(t)}兵）`);return null;
  }
  function xp(h,n){if(!h)return;h.xp+=n;while(h.level<5&&h.xp>=h.level*60){h.xp-=h.level*60;h.level++;}if(h.level===5)h.xp=0;}
  function settleHero(s,a,city){if(a.hero===null)return;const h=s.heroes[a.hero];h.army=null;h.city=city;}
  function wound(s,hid){if(hid===null)return;const h=s.heroes[hid],city=s.cities.find(c=>c.owner===h.owner);h.army=null;h.city=city?city.id:null;h.healUntil=s.time+35;}
  function power(t,h,form,enemy,attack,walls=0){
    const n=total(enemy)||1;let p=0;
    t.forEach((count,i)=>{const prey=[1,2,0][i],predator=[2,0,1][i];let bonus=1+.4*enemy[prey]/n-.2*enemy[predator]/n;
      if(h&&((h.skill==='cavalry'&&i===1)||(h.skill==='archer'&&i===2)))bonus*=1.25;p+=count*bonus;});
    if(h)p*=1+(h.command+h.force)/1400+(h.level-1)*.045;
    if(attack&&h?.skill==='siege')p*=1.2;
    p*=form==='attack'?1.2:form==='defense'?.87:1;
    if(!attack)p*=1+walls*.06;return p;
  }
  function damage(t,amount){let left=Math.min(total(t),Math.max(1,Math.round(amount)));const original=left;
    while(left>0){let i=t.indexOf(Math.max(...t));if(t[i]<=0)break;t[i]--;left--;}return original-left;}
  function eliminate(s){F.forEach((_,o)=>{if(!s.factions[o].eliminated&&!s.cities.some(c=>c.owner===o)){
    s.factions[o].eliminated=true;s.armies=s.armies.filter(a=>a.owner!==o);s.battles=s.battles.filter(b=>s.armies.some(a=>a.id===b.army));
    s.heroes.filter(h=>h.owner===o).forEach(h=>{h.city=null;h.army=null;});log(s,`${F[o]}势力覆灭。`);
  }});s.results=s.results||[null,null,null];const result=(o,value)=>({result:value,time:s.time,logs:s.logs.filter(l=>l.audience?.includes(o)).map(l=>({time:l.time,text:l.text})),metrics:s.metrics.filter(m=>m.actor===o),economy:s.economy.map(e=>({time:e.time,...e.factions[o]}))});F.forEach((_,o)=>{if(s.factions[o].eliminated&&!s.results[o])s.results[o]=result(o,'lose');});
    const winner=F.findIndex((_,o)=>s.cities.every(c=>c.owner===o));if(winner>=0){s.winner=winner;if(!s.results[winner])s.results[winner]=result(winner,'win');s.ended=winner===s.player?'win':'lose';}
    else if(s.mode!=='multi'&&s.factions[s.player].eliminated)s.ended='lose';
  }
  function round(s,b,dt=1,hurt=true){const a=s.armies.find(a=>a.id===b.army),c=s.cities[b.city];if(!a)return;
    const ah=a.hero===null?null:s.heroes[a.hero],dh=c.guard===null?null:s.heroes[c.guard];
    if(!b.units)b.units=Field.begin(a,c);
    const beforeA=total(a.troops),beforeD=total(c.troops);
    const stats=[{hero:ah,formation:a.formation,attack:true,walls:0},{hero:dh,formation:c.formation,attack:false,walls:c.walls}].map(v=>({
      hero:v.hero,bonus:(v.hero?1+(v.hero.command+v.hero.force)/1400+(v.hero.level-1)*.045:1)*(v.attack&&v.hero?.skill==='siege'?1.2:1)*(v.formation==='attack'?1.2:v.formation==='defense'?.87:1)*(v.attack?1:1+v.walls*.06),
      armor:(v.formation==='defense'?.8:v.formation==='attack'?1.12:1)/(v.attack?1:1+v.walls*.13)
    }));
    Field.step(b.units,stats,dt,hurt);a.troops=Field.totals(b.units,0);c.troops=Field.totals(b.units,1);
    const al=beforeA-total(a.troops),dl=beforeD-total(c.troops);
    if(hurt){b.round++;b.details.push(`第${b.round}回合：攻方损失${al}，守方损失${dl}；余兵 ${total(a.troops)} / ${total(c.troops)}`);}
    if(al||dl){s.metrics.push({time:s.time,kind:'casualty',actor:a.owner,city:c.id,lost:al});s.metrics.push({time:s.time,kind:'casualty',actor:c.owner,city:c.id,lost:dl});s.metrics=s.metrics.slice(-2000);}
    if(b.details.length>202)b.details.splice(2,b.details.length-202);
    if(total(a.troops)&&total(c.troops))return;
    const victory=total(a.troops)>0,old=c.owner;
    c.garrison=b.units.filter(u=>u.side===(victory?0:1)&&u.count>0).map(u=>({...u,side:1,order:'hold',target:null,goal:null,path:null}));c.garrisonKey=(victory?a.troops:c.troops).join(',');
    if(victory){c.owner=a.owner;c.troops=a.troops.slice();c.guard=a.hero;c.formation=a.formation;
      if(old>=0)s.metrics.push({time:s.time,kind:'cityLost',actor:old,city:c.id});
      s.heroes.filter(h=>h.city===c.id&&h.owner!==a.owner).forEach(h=>wound(s,h.id));settleHero(s,a,c.id);xp(ah,75);xp(dh,25);
      if(a.owner===s.player&&old===-1)s.tutorial.capture=true;
    }else{xp(ah,25);xp(dh,55);wound(s,a.hero);}
    log(s,`${c.name}战报：${F[a.owner]}军${victory?'攻克城池':'进攻受挫'}`,b.details);
    s.armies=s.armies.filter(x=>x.id!==a.id);s.battles=s.battles.filter(x=>x!==b);eliminate(s);
  }
  function arrivals(s){for(const a of [...s.armies].sort((a,b)=>a.arrive-b.arrive||a.id-b.id)){
    if(a.status==='battle'||a.arrive>s.time)continue;
    if(fighting(s,a.to)&&s.cities[a.to].owner!==a.owner)continue;
    const c=s.cities[a.to];if(c.owner===a.owner){const battle=s.battles.find(b=>b.city===c.id);if(battle){if(!battle.units){const attacker=s.armies.find(v=>v.id===battle.army);battle.units=Field.begin(attacker,c);}Field.reinforcement(battle,a.troops);}c.troops=c.troops.map((n,i)=>n+a.troops[i]);settleHero(s,a,c.id);if(c.guard===null&&a.hero!==null)c.guard=a.hero;s.armies=s.armies.filter(x=>x.id!==a.id);log(s,`${c.name}收到${F[a.owner]}军增援。`);}
    else if(!total(a.troops)){wound(s,a.hero);s.armies=s.armies.filter(x=>x.id!==a.id);log(s,'调动目标易主，将领撤回休养。');}
    else{a.status='battle';s.battles.push({army:a.id,city:c.id,round:0,units:Field.begin(a,c),details:[`兵种克制：枪→骑→弓→枪；攻方${a.formation==='attack'?'攻击':a.formation==='defense'?'防守':'均衡'}阵，城墙${c.walls}级。`,`${a.hero===null?'无主将':s.heroes[a.hero].name+'：'+s.heroes[a.hero].description}；守将${c.guard===null?'无':s.heroes[c.guard].name+'：'+s.heroes[c.guard].description}`]});log(s,`${c.name}交战！${F[a.owner]}军抵达城下。`);}
  }}
  // One successful order per faction every eight simulation seconds, independent of empire size.
  // Both difficulties use the same bandwidth; hard changes target/counter selection only.
  function ai(s,o){
    if(s.ended||s.paused||s.time<s.aiNext[o])return false;
    observeThreats(s);
    const issue=command=>applyCommand(s,o,command);
    const cities=s.cities.filter(c=>c.owner===o&&!fighting(s,c.id)),hard=s.difficulty==='hard';
    for(const b of s.battles){
      const side=fieldSide(s,b.city,o);if(side<0)continue;
      const units=fieldUnits(s,b.city),own=units.filter(u=>u.side===side&&u.count>0),enemies=units.filter(u=>u.side!==side&&u.count>0&&fieldVisible(s,b.city,u,o));
      if(side===1&&!enemies.length&&own.some(u=>Math.hypot(u.x-Nav.rally.x,u.y-Nav.rally.y)>18)&&own.some(u=>u.order!=='move')){
        if(!issue({type:'tactical',city:b.city,ids:own.map(u=>u.id),kind:'rally',x:Nav.rally.x,y:Nav.rally.y,target:null})){s.aiNext[o]=s.time+8;return true;}
      }
      if(hard&&enemies.length&&own.some(u=>u.order!=='attack'||!enemies.some(e=>e.id===u.target))){
        const target=enemies.sort((a,b)=>a.count-b.count)[0];
        if(!issue({type:'tactical',city:b.city,ids:own.map(u=>u.id),kind:'attack',x:target.x,y:target.y,target:target.id})){s.aiNext[o]=s.time+8;return true;}
      }
    }
    if(!cities.length)return false;
    const seen=worldVisible(s,o);
    const incoming=id=>s.armies.some(a=>a.to===id&&a.owner!==o&&seen.has(a.from)&&seen.has(a.to)&&s.time-(s.aiSeen[o][a.id]??Infinity)>=6);
    const act=(error,c)=>{if(error)return false;s.aiNext[o]=s.time+8;s.aiCursor[o]=c.id+1;return true;};
    const ordered=[...cities].sort((a,b)=>(a.id-s.aiCursor[o]+12)%12-(b.id-s.aiCursor[o]+12)%12);
    for(const c of ordered){
      if(incoming(c.id)&&c.formation!=='defense')return act(issue({type:'formation',city:c.id,value:'defense'}),c);
      const local=s.heroes.filter(h=>h.owner===o&&h.city===c.id&&ready(s,h)),hero=local.sort((a,b)=>b.level-a.level)[0]||null;
      const neighbors=s.cities.filter(d=>adjacent(c.id,d.id));
      const threatened=neighbors.filter(d=>d.owner===o&&(incoming(d.id)||fighting(s,d.id))).sort((a,b)=>total(a.troops)-total(b.troops))[0];
      if(threatened&&!incoming(c.id)&&total(c.troops)>95&&!s.armies.some(a=>a.owner===o&&a.from===c.id&&a.to===threatened.id)){
        const fraction=(total(c.troops)-40)/total(c.troops);
        if(act(issue({type:'dispatch',rows:[{from:c.id,to:threatened.id,troops:c.troops.map(n=>Math.floor(n*fraction)),hero:hero?.id??null,formation:'defense'}]}),c))return true;
      }
    }
    for(const c of ordered){
      const local=s.heroes.filter(h=>h.owner===o&&h.city===c.id&&ready(s,h)),hero=local.sort((a,b)=>b.level-a.level)[0]||null;
      const enemies=s.cities.filter(d=>d.owner!==o&&adjacent(c.id,d.id)).sort((a,b)=>total(a.troops)*(1+a.walls*.2)-total(b.troops)*(1+b.walls*.2));
      const target=enemies[0],f=s.factions[o];
      if(target&&!incoming(c.id)&&!s.armies.some(a=>a.owner===o&&a.to===target.id)&&total(c.troops)>total(target.troops)*(hard?1.6:2)+55){
        const fraction=(total(c.troops)-35)/total(c.troops);
        if(act(issue({type:'dispatch',rows:[{from:c.id,to:target.id,troops:c.troops.map(n=>Math.floor(n*fraction)),hero:hero?.id??null,formation:hard?'attack':'balanced'}]}),c))return true;
      }
      if(c.guard===null&&local.length&&act(issue({type:'guard',city:c.id,hero:local[0].id}),c))return true;
      if(c.homes<2&&f.gold>=180&&act(issue({type:'build',city:c.id,key:'homes'}),c))return true;
      if(total(c.troops)<360&&c.recruitAt<=s.time){
        let type=Math.floor(s.time/8+c.id)%3;
        if(hard&&target)type=[2,0,1][target.troops.indexOf(Math.max(...target.troops))];
        if(act(issue({type:'recruit',city:c.id,troop:type}),c))return true;
      }
      if(!target&&!incoming(c.id)&&total(c.troops)>120){
        const queue=[[c.id]],seen=new Set([c.id]);let front=null;
        while(queue.length){const path=queue.shift(),id=path[path.length-1];
          if(path.length>1&&s.cities.some(d=>d.owner!==o&&adjacent(id,d.id))){front=s.cities[path[1]];break;}
          cities.filter(d=>adjacent(id,d.id)&&!seen.has(d.id)).forEach(d=>{seen.add(d.id);queue.push([...path,d.id]);});
        }
        if(front&&!s.armies.some(a=>a.owner===o&&a.from===c.id&&a.to===front.id)){
          const fraction=(total(c.troops)-40)/total(c.troops);
          if(act(issue({type:'dispatch',rows:[{from:c.id,to:front.id,troops:c.troops.map(n=>Math.floor(n*fraction)),hero:hero?.id??null,formation:'balanced'}]}),c))return true;
        }
      }
      if(f.gold>240){const key=['homes','farms','barracks','walls'].filter(k=>c[k]<3).sort((a,b)=>c[a]-c[b])[0];
        if(key&&act(issue({type:'build',city:c.id,key}),c))return true;
      }
    }
    return false;
  }
  function step(s){if(s.ended||s.paused)return;s.substep=(s.substep||0)+1;const second=s.substep===10;if(second){s.substep=0;s.time++;s.cities.forEach(c=>{if(c.owner>=0){s.factions[c.owner].gold+=income(c).gold;s.factions[c.owner].food+=income(c).food;}});}
    for(const c of s.cities){if(!fighting(s,c.id)){const units=Field.ensure(c),index=new Nav.Index(units);units.forEach(u=>{if(u.order==='move'){Field.move(u,u.goal,.1,index);if(Math.hypot(u.x-u.goal.x,u.y-u.goal.y)<.3)u.order='hold';}});}}
    for(const b of [...s.battles]){if(s.ended)break;round(s,b,.1,second);}if(s.ended)return;
    if(second){arrivals(s);observeThreats(s);s.aiClock++;if(s.aiClock>=1){s.aiClock=0;F.forEach((_,o)=>{if(!(s.humans||[s.player]).includes(o)&&!s.factions[o].eliminated)ai(s,o);});}eliminate(s);
      if(s.time%30===0){s.economy.push({time:s.time,factions:s.factions.map((f,o)=>({gold:Math.floor(f.gold),food:Math.floor(f.food),income: s.cities.filter(c=>c.owner===o).reduce((n,c)=>n+income(c).gold,0),cities:s.cities.filter(c=>c.owner===o).length,troops:s.cities.filter(c=>c.owner===o).reduce((n,c)=>n+total(c.troops),0)}))});s.economy=s.economy.slice(-120);}}
  }
  function tick(s){for(let i=0;i<10;i++)step(s);}
  function fieldUnits(s,id){const c=s.cities[id],b=s.battles.find(b=>b.city===id);if(b){if(!b.units)b.units=Field.begin(s.armies.find(a=>a.id===b.army),c);return b.units;}return Field.ensure(c);}
  function fieldSide(s,id,owner=s.player){const c=s.cities[id],b=s.battles.find(b=>b.city===id);return c.owner===owner?1:b&&s.armies.find(a=>a.id===b.army)?.owner===owner?0:-1;}
  function fieldVisible(s,id,u,owner=s.player){const side=fieldSide(s,id,owner);if(side<0)return false;return Field.visible(fieldUnits(s,id),side,u);}
  function fieldOrder(s,id,ids,kind,x,y,target,owner=s.player){if(s.ended||fieldSide(s,id,owner)<0)return '此处没有可指挥的己方军队';if(kind==='attack'){const enemy=fieldUnits(s,id).find(u=>u.id===target);if(!enemy||!fieldVisible(s,id,enemy,owner))return '目标不在视野内';}return Field.order(fieldUnits(s,id),fieldSide(s,id,owner),ids,kind,x,y,target);}
  function serialize(s){return JSON.stringify(s);}
  function restore(raw){const s=JSON.parse(raw);if(!s||s.version!==1||!Number.isInteger(s.player)||s.player<0||s.player>2||!['normal','hard'].includes(s.difficulty)||!Number.isFinite(s.time)||s.time<0||!Array.isArray(s.cities)||s.cities.length!==12||!Array.isArray(s.heroes)||s.heroes.length!==9||!Array.isArray(s.factions)||s.factions.length!==3||!Array.isArray(s.armies)||!Array.isArray(s.battles)||!Array.isArray(s.logs)||!s.tutorial)throw Error('存档格式损坏');
    if(!Number.isInteger(s.selected)||!s.cities[s.selected]||!Number.isInteger(s.nextId)||s.nextId<1||!Number.isFinite(s.aiClock)||![null,'win','lose'].includes(s.ended)||typeof s.paused!=='boolean'||typeof s.rewarded!=='boolean'||['build','guard','capture'].some(k=>typeof s.tutorial[k]!=='boolean'))throw Error('战局数据损坏');
    s.cities.forEach((c,i)=>{if(c.id!==i||![-1,0,1,2].includes(c.owner)||!Array.isArray(c.troops)||c.troops.length!==3||c.troops.some(n=>!Number.isInteger(n)||n<0)||Object.keys(BUILD).some(k=>![1,2,3].includes(c[k])))throw Error('城池数据损坏');});
    if(s.factions.some(f=>!Number.isFinite(f.gold)||f.gold<0||!Number.isFinite(f.food)||f.food<0))throw Error('资源数据损坏');
    s.heroes.forEach((h,i)=>{if(h.id!==i||![0,1,2].includes(h.owner)||![1,2,3,4,5].includes(h.level)||!Number.isFinite(h.healUntil)||!(h.city===null||Number.isInteger(h.city)&&s.cities[h.city]?.owner===h.owner)||!(h.army===null||s.armies.some(a=>a.id===h.army&&a.hero===i&&a.owner===h.owner))||h.city!==null&&h.army!==null)throw Error('武将数据损坏');});
    s.armies.forEach(a=>{if(!Number.isInteger(a.id)||![0,1,2].includes(a.owner)||!adjacent(a.from,a.to)||!Number.isFinite(a.arrive)||!Number.isFinite(a.depart)||a.arrive<a.depart||!Array.isArray(a.troops)||a.troops.length!==3||a.troops.some(n=>!Number.isInteger(n)||n<0)||!(a.hero===null||s.heroes[a.hero]?.army===a.id))throw Error('行军数据损坏');});
    if(new Set(s.armies.map(a=>a.id)).size!==s.armies.length||s.battles.some(b=>!s.armies.some(a=>a.id===b.army&&a.to===b.city&&a.status==='battle')||!Array.isArray(b.details)||!Number.isInteger(b.round)||b.round<0)||new Set(s.battles.map(b=>b.city)).size!==s.battles.length)throw Error('战斗数据损坏');
    if(s.armies.some(a=>a.id>=s.nextId||!['march','battle'].includes(a.status)||!['balanced','attack','defense'].includes(a.formation)||a.status==='battle'&&!s.battles.some(b=>b.army===a.id)))throw Error('军令数据损坏');
    s.cities.forEach((c,i)=>{if(c.guard!==null&&(!s.heroes[c.guard]||s.heroes[c.guard].city!==i||s.heroes[c.guard].owner!==c.owner)||!Number.isFinite(c.recruitAt)||!['balanced','attack','defense'].includes(c.formation))throw Error('驻防数据损坏');c.name=NAMES[i];c.x=POS[i][0];c.y=POS[i][1];});
    if(s.logs.some(l=>typeof l.text!=='string'||!Number.isFinite(l.time)||!Array.isArray(l.details)||l.details.some(d=>typeof d!=='string')))throw Error('战报数据损坏');
    if(!s.aiNext)s.aiNext=F.map(()=>s.time+8);
    if(!s.aiCursor)s.aiCursor=[0,0,0];
    if(!s.economy)s.economy=[];
    if(!Array.isArray(s.aiNext)||s.aiNext.length!==3||s.aiNext.some(n=>!Number.isFinite(n))||!Array.isArray(s.aiCursor)||s.aiCursor.length!==3||s.aiCursor.some(n=>!Number.isInteger(n)||n<0||n>12)||!Array.isArray(s.economy))throw Error('决策记录损坏');
    const validUnits=units=>Array.isArray(units)&&new Set(units.map(u=>u.id)).size===units.length&&units.every(u=>typeof u.id==='string'&&[0,1].includes(u.side)&&[0,1,2].includes(u.type)&&Number.isInteger(u.count)&&u.count>=0&&u.count<=20&&Number.isFinite(u.x)&&u.x>=0&&u.x<=100&&Number.isFinite(u.y)&&u.y>=0&&u.y<=100&&['hold','advance','move','attack'].includes(u.order)&&(!(u.order==='move')||u.goal)&&(!u.goal||Number.isFinite(u.goal.x)&&u.goal.x>=0&&u.goal.x<=100&&Number.isFinite(u.goal.y)&&u.goal.y>=0&&u.goal.y<=100));
    if(s.cities.some(c=>c.garrison&&!validUnits(c.garrison))||s.battles.some(b=>b.units&&(!validUnits(b.units)||Field.totals(b.units,1).join(',')!==s.cities[b.city].troops.join(',')||Field.totals(b.units,0).join(',')!==s.armies.find(a=>a.id===b.army).troops.join(','))))throw Error('战场数据损坏');
    const point=p=>p&&Number.isFinite(p.x)&&Number.isFinite(p.y)&&p.x>=0&&p.x<=100&&p.y>=0&&p.y<=100;
    for(const units of [...s.cities.map(c=>c.garrison||[]),...s.battles.map(b=>b.units||[])])for(const u of units){if(u.path!==undefined&&u.path!==null&&(!Array.isArray(u.path)||u.path.length>10001||u.path.some(p=>!point(p)))||u.pathGoal&&!point(u.pathGoal)||u.approach&&!point(u.approach))throw Error('寻路数据损坏');}
    if(s.cities.some(c=>c.unitSerial!==undefined&&(!Number.isSafeInteger(c.unitSerial)||c.unitSerial<0)))throw Error('军阵编号损坏');
    if(s.schema!==undefined&&![3,SAVE_VERSION].includes(s.schema))throw Error('不支持的引擎存档版本');
    if(s.schema!==SAVE_VERSION){for(const c of s.cities){c.garrison=null;c.garrisonKey=null;c.unitSerial=0;}for(const b of s.battles){const a=s.armies.find(a=>a.id===b.army);b.units=Field.begin(a,s.cities[b.city]);}}
    s.schema=SAVE_VERSION;s.mode=s.mode||'single';s.humans=s.humans||[s.player];s.results=s.results||[null,null,null];s.winner=s.winner??null;s.substep=s.substep||0;s.metrics=s.metrics||[];s.aiSeen=s.aiSeen||[{},{},{}];
    if(!Array.isArray(s.aiSeen)||s.aiSeen.length!==3||s.aiSeen.some(v=>!v||typeof v!=='object'||Object.values(v).some(t=>!Number.isFinite(t)||t<0||t>s.time)))throw Error('侦察时钟损坏');
    if(!['single','multi'].includes(s.mode)||!Array.isArray(s.humans)||s.humans.some(o=>![0,1,2].includes(o))||!Number.isInteger(s.substep)||s.substep<0||s.substep>9)throw Error('多人状态损坏');
    s.paused=true;return s;
  }
  function worldVisible(s,o){return new Set(s.cities.filter(c=>c.owner===o||s.cities.some(d=>d.owner===o&&adjacent(c.id,d.id))||s.battles.some(b=>b.city===c.id&&s.armies.some(a=>a.id===b.army&&a.owner===o))).map(c=>c.id));}
  function observeThreats(s){s.aiSeen=s.aiSeen||[{},{},{}];for(let o=0;o<3;o++){const seen=worldVisible(s,o),known=s.aiSeen[o];for(const id of Object.keys(known))if(!s.armies.some(a=>String(a.id)===id))delete known[id];for(const a of s.armies)if(a.owner!==o&&seen.has(a.from)&&seen.has(a.to)&&known[a.id]===undefined)known[a.id]=s.time;}}
  function applyCommand(s,actor,command){
    if(!Number.isInteger(actor)||actor<0||actor>2||s.factions[actor].eliminated||s.ended)return '此势力已结束对局';
    if(s.mode==='multi'&&s.paused)return '联机暂停期间不能下达军令';
    if(!command||typeof command!=='object')return '军令格式无效';
    const c=command;let error;const before={gold:s.factions[actor].gold,food:s.factions[actor].food};
    if(['build','recruit','guard','formation','tactical'].includes(c.type)&&(!Number.isInteger(c.city)||c.city<0||c.city>11))return '城池编号无效';
    switch(c.type){
      case 'build':error=build(s,c.city,c.key,actor);break;
      case 'recruit':error=recruit(s,c.city,c.troop,actor);break;
      case 'guard':error=guard(s,c.city,c.hero,actor);break;
      case 'formation':error=formation(s,c.city,c.value,actor);break;
      case 'dispatch':{
        if(!Array.isArray(c.rows)||!c.rows.length||c.rows.length>12||new Set(c.rows.map(r=>r?.from)).size!==c.rows.length)return '出兵来源无效或重复';
        const trial=JSON.parse(serialize(s));for(const r of c.rows){if(!r||!Number.isInteger(r.from)||!Number.isInteger(r.to)||!worldVisible(s,actor).has(r.to))return '目标不在视野内';error=send(trial,r.from,r.to,r.troops,r.hero??null,r.formation||'balanced',actor);if(error)return error;}Object.assign(s,trial);error=null;break;
      }
      case 'tactical':{const trial=JSON.parse(serialize(s));error=fieldOrder(trial,c.city,c.ids,c.kind,c.x,c.y,c.target,actor);if(!error)Object.assign(s,trial);break;}
      default:return '未知军令';
    }
    if(!error){s.metrics.push({time:s.time,actor,kind:c.type,gold:before.gold-s.factions[actor].gold,food:before.food-s.factions[actor].food});s.metrics=s.metrics.slice(-2000);}return error;
  }
  function projectState(s,o){const seen=worldVisible(s,o),eliminated=s.factions[o].eliminated;
    const view={schema:SAVE_VERSION,matchId:s.matchId||s.recordId||null,mode:s.mode,player:o,difficulty:s.difficulty,time:s.time,substep:s.substep,paused:s.paused,ended:s.results[o]?.result||null,result:s.results[o],winner:s.winner,resources:{...s.factions[o]},cities:[],armies:[],heroes:[],logs:[],fields:{},income:0};
    if(eliminated){view.logs=s.results[o]?.logs||[];view.time=s.results[o]?.time||s.time;view.winner=null;view.substep=0;return JSON.parse(JSON.stringify(view));}
    view.cities=s.cities.map(c=>{if(!seen.has(c.id))return {id:c.id,hidden:true};const v={};for(const k of ['id','name','owner','troops','homes','farms','barracks','walls','recruitAt','guard','formation'])v[k]=c[k];if(c.owner===o)view.income+=income(c).gold;return v;});
    view.armies=s.armies.filter(a=>a.owner===o||seen.has(a.from)&&seen.has(a.to)).map(a=>({id:a.id,owner:a.owner,from:a.from,to:a.to,troops:a.troops,depart:a.depart,arrive:a.arrive,status:a.status==='march'&&a.arrive<=s.time?'waiting':a.status}));
    view.heroes=s.heroes.filter(h=>h.owner===o).map(h=>({...h}));view.logs=s.logs.filter(l=>l.audience?.includes(o)).slice(0,50).map(l=>({time:l.time,text:l.text,details:[]}));
    for(const id of seen){const side=fieldSide(s,id,o);if(side<0)continue;const units=fieldUnits(s,id),index=new Nav.Index(units),b=s.battles.find(b=>b.city===id),a=b&&s.armies.find(a=>a.id===b.army);view.fields[id]={side,round:b?.round||0,units:units.filter(u=>Field.visible(units,side,u,index)).map(u=>{const v={id:u.id,side:u.side,owner:u.side===1?s.cities[id].owner:a?.owner,type:u.type,count:u.count,x:u.x,y:u.y,moving:!!u.moving,attacking:!!u.attacking};if(u.side===side){v.order=u.order;v.goal=u.goal;v.target=u.target;}return v;})};}
    return JSON.parse(JSON.stringify(view));
  }
  const api={SAVE_VERSION,F,NAMES,POS,ROADS,TYPES,BUILD,total,adjacent,income,create,buildCost,build,recruit,guard,formation,foodCost,send,tick,step,serialize,restore,ready,power,ai,fieldUnits,fieldSide,fieldOrder,fieldVisible,worldVisible,applyCommand,projectState,eliminate};
  if(typeof module!=='undefined')module.exports=api;root.Daqin=api;
})(typeof globalThis!=='undefined'?globalThis:window);
