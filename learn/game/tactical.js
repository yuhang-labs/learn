(function(root){
  'use strict';
  const Nav=typeof module!=='undefined'?require('./navigation.js'):root.DaqinNav;
  const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
  function squads(troops,side,prefix='unit',start=0,occupied=[]){const units=[],used=new Set();const reserve=p=>{for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++)used.add(Nav.key({x:p.x+dx,y:p.y+dy}));};occupied.filter(u=>u.count>0).forEach(reserve);troops.forEach((count,type)=>{while(count>0){const p=Nav.nearest(Nav.spawns[side],used);reserve(p);units.push({id:prefix+':'+start++,side,type,count:Math.min(20,count),...p,order:side?'hold':'advance',target:null,goal:null});count-=20;}});return units;}
  function ensure(c){const signature=c.troops.join(',');if(c.garrisonKey!==signature||!c.garrison){const old=c.garrison||[],next=[];c.unitSerial=c.unitSerial||0;
    c.troops.forEach((count,type)=>{for(const u of old.filter(u=>u.type===type&&u.count>0)){if(count<=0)break;const n=Math.min(count,u.count);next.push({...u,count:n});count-=n;}if(count){const added=squads([type===0?count:0,type===1?count:0,type===2?count:0],1,'c'+c.id,c.unitSerial,[...old,...next]);c.unitSerial+=added.length;next.push(...added);}});c.garrison=next;c.garrisonKey=signature;}return c.garrison;}
  function begin(a,c){return [...squads(a.troops,0,'a'+a.id),...ensure(c).map(u=>({...u,side:1}))];}
  function move(u,p,dt=1,index=null){if(!p||!Nav.walkable(p))return false;
    if(!u.path||!u.pathGoal||distance(u.pathGoal,p)>1){u.path=Nav.path(u,p);u.pathGoal={...p};}
    if(!u.path)return false;let budget=(u.type===1?4:2.6)*dt;u.moving=false;
    while(budget>.001&&u.path.length){const q=u.path[0],d=distance(u,q);if(d<.02){u.path.shift();continue;}const f=Math.min(budget,d)/d,n={x:u.x+(q.x-u.x)*f,y:u.y+(q.y-u.y)*f};
      if(index&&index.near(n,.65).some(v=>v.id!==u.id&&distance(v,n)<.55)){
        u.blocked=(u.blocked||0)+dt;
        const step=Math.min(budget,.4),dx=(q.x-u.x)/d,dy=(q.y-u.y)/d;
        const options=[1,-1].map(sign=>({x:u.x+(dx*.25-dy*sign)*step,y:u.y+(dy*.25+dx*sign)*step}));
        const free=options.find(p=>Nav.walkable(p)&&Nav.line(u,p,false)&&!index.near(p,.7).some(v=>v.id!==u.id&&distance(v,p)<.56));
        if(free){u.x=free.x;u.y=free.y;u.moving=true;}
        if(u.blocked>1){const avoid=new Set(index.near(u,40).filter(v=>v.id!==u.id).map(Nav.key)),route=Nav.path(u,p,avoid);if(route)u.path=route;u.blocked=0;}return false;
      }
      if(!Nav.line(u,n,false)){u.path=null;return false;}u.x=n.x;u.y=n.y;u.moving=true;budget-=d*f;if(f>=1)u.path.shift();
    }u.blocked=0;return true;
  }
  function order(units,side,ids,kind,x,y,target){
    if(!['move','attack','hold','advance','rally'].includes(kind)||!Number.isFinite(x)||!Number.isFinite(y)||x<1||x>99||y<1||y>99)return '军令或位置无效';
    if(!Array.isArray(ids)||!ids.length||new Set(ids).size!==ids.length||ids.some(id=>!units.some(u=>u.id===id&&u.side===side&&u.count>0)))return '请框选仍有效的己方军阵';
    if(kind==='attack'&&!units.some(u=>u.id===target&&u.side!==side&&u.count>0))return '请选择敌方部队';
    if(kind==='rally'&&side!==1)return '仅守方可在城内集结';
    const destination=kind==='rally'?Nav.rally:{x,y},used=new Set(),changes=[];
    if(['move','rally'].includes(kind)&&!Nav.walkable(destination))return '目标不可达：建筑、城墙或水域阻挡';
    for(const id of ids){const u=units.find(u=>u.id===id),goal=['move','rally'].includes(kind)?Nav.nearest(destination,used):destination;if(goal)used.add(Nav.key(goal));const path=['move','rally'].includes(kind)?Nav.path(u,goal):null;if(['move','rally'].includes(kind)&&!path)return '目标不可达：没有通行道路';changes.push({u,goal,path});}
    for(const {u,goal,path}of changes){u.order=kind==='rally'?'move':kind;u.target=kind==='attack'?target:null;u.goal=goal;u.path=path;u.pathGoal=goal;}return null;
  }
  function visible(units,side,u,index=new Nav.Index(units)){return u.side===side||index.near(u,29).some(v=>v.side===side&&Nav.line(v,u))||side===1&&distance(u,Nav.rally)<=25&&Nav.line(Nav.rally,u);}
  function step(units,stats,dt=1,hurt=true){const alive=units.filter(u=>u.count>0),index=new Nav.Index(alive),hits=new Map(),seen=[new Set(),new Set()];
    for(const u of alive)for(const side of [0,1])if(visible(alive,side,u,index))seen[side].add(u.id);
    for(const u of alive){u.moving=false;u.attacking=false;if(u.order==='move'){move(u,u.goal,dt,index);if(distance(u,u.goal)<.3)u.order='hold';continue;}
      const enemies=index.near(u,58).filter(e=>e.side!==u.side&&seen[u.side].has(e.id)).sort((a,b)=>distance(u,a)-distance(u,b)),enemy=enemies.find(e=>e.id===u.target)||enemies[0];
      if(!enemy){if(u.order==='attack'&&u.goal&&distance(u,u.goal)<1){u.order='advance';u.target=null;u.goal=null;}if(u.order==='advance'||u.order==='attack')move(u,u.goal||Nav.rally,dt,index);continue;}
      if(u.order==='attack')u.goal={x:enemy.x,y:enemy.y};
      const range=u.type===2?23:u.type===1?6:5;
      if(distance(u,enemy)>range||!Nav.line(u,enemy)){if(u.order==='advance'||u.order==='attack'){
        if(!u.approach||u.approachTarget!==enemy.id||!Nav.line(u.approach,enemy)||distance(u.approach,enemy)>range){
          const candidates=[];for(let i=0;i<16;i++){const angle=i*Math.PI/8,p={x:enemy.x+Math.cos(angle)*range*.75,y:enemy.y+Math.sin(angle)*range*.75};if(Nav.walkable(p)&&Nav.line(p,enemy)&&!index.near(p,.8).some(v=>v.id!==u.id))candidates.push(p);}
          candidates.sort((a,b)=>distance(u,a)-distance(u,b));u.approach=candidates.find(p=>Nav.path(u,p))||Nav.nearest(enemy);u.approachTarget=enemy.id;
        }move(u,u.approach,dt,index);
      }continue;}
      u.attacking=true;if(!hurt)continue;const counter=[1,2,0][u.type]===enemy.type?1.4:[2,0,1][u.type]===enemy.type?.8:1,stat=stats[u.side],def=stats[enemy.side],skill=stat.hero&&((stat.hero.skill==='cavalry'&&u.type===1)||(stat.hero.skill==='archer'&&u.type===2))?1.25:1;
      hits.set(enemy.id,(hits.get(enemy.id)||0)+Math.max(1,Math.round(u.count*.065*counter*skill*stat.bonus*def.armor)));
    }for(const u of units)u.count=Math.max(0,u.count-(hits.get(u.id)||0));
  }
  function totals(units,side){return [0,1,2].map(type=>units.filter(u=>u.side===side&&u.type===type).reduce((n,u)=>n+u.count,0));}
  function reinforcement(b,troops,id){b.reinforcementSerial=(b.reinforcementSerial||0)+1;b.units.push(...squads(troops,1,'r'+(id??b.army)+'-'+b.reinforcementSerial,0,b.units));}
  const api={squads,ensure,begin,move,order,step,totals,reinforcement,visible};if(typeof module!=='undefined')module.exports=api;root.DaqinField=api;
})(typeof globalThis!=='undefined'?globalThis:window);
