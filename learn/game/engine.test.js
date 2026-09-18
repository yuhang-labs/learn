'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const E = require('./engine.js');
const run = (s,n) => {for(let i=0;i<n;i++)E.tick(s);};
// Exclude autonomous decisions only in focused fixtures; the campaign tests retain them.
const quiet = () => {const s=E.create();s.aiClock=-100000;return s;};
function invariants(s){
  for(const f of s.factions){assert.ok(f.gold>=0&&Number.isFinite(f.gold));assert.ok(f.food>=0&&Number.isFinite(f.food));}
  for(const c of s.cities){c.troops.forEach(n=>assert.ok(Number.isInteger(n)&&n>=0));if(c.guard!==null){const h=s.heroes[c.guard];assert.equal(h.city,c.id);assert.equal(h.owner,c.owner);assert.equal(h.army,null);}}
  for(const a of s.armies){a.troops.forEach(n=>assert.ok(Number.isInteger(n)&&n>=0));if(a.hero!==null){assert.equal(s.heroes[a.hero].army,a.id);assert.equal(s.heroes[a.hero].city,null);}}
  for(const h of s.heroes){assert.ok(!(h.army!==null&&h.city!==null));if(h.army!==null)assert.ok(s.armies.some(a=>a.id===h.army&&a.hero===h.id));if(h.city!==null)assert.equal(s.cities[h.city].owner,h.owner);}
}
test('opening: twelve connected cities; equal economic and military resources',()=>{
  const s=E.create();assert.equal(s.cities.length,12);assert.equal(s.cities.filter(c=>c.owner===-1).length,6);
  for(let o=0;o<3;o++){assert.equal(s.cities.filter(c=>c.owner===o).length,2);assert.equal(s.heroes.filter(h=>h.owner===o).length,3);assert.equal(s.factions[o].gold,320);assert.equal(s.cities.filter(c=>c.owner===o).reduce((n,c)=>n+E.total(c.troops),0),280);}
  const seen=new Set([0]);for(let i=0;i<12;i++)E.ROADS.forEach(([a,b])=>{if(seen.has(a))seen.add(b);if(seen.has(b))seen.add(a);});assert.equal(seen.size,12);invariants(s);
});
test('AI and player pay identical building/recruitment costs and cooldowns',()=>{
  const s=quiet();for(const [id,o]of [[0,0],[4,1],[9,2]]){assert.equal(E.build(s,id,'barracks',o),null);assert.equal(E.recruit(s,id,0,o),null);assert.equal(s.factions[o].gold,188);assert.equal(s.factions[o].food,276);assert.equal(s.cities[id].recruitAt,6);assert.ok(E.recruit(s,id,1,o));}invariants(s);
});
test('building level limits and resource exhaustion reject without side effects',()=>{
  const s=quiet();E.build(s,0,'homes');E.build(s,0,'homes');assert.equal(s.cities[0].homes,3);assert.ok(E.build(s,0,'homes'));s.factions[0].gold=0;const before=E.serialize(s);assert.ok(E.build(s,0,'walls'));assert.ok(E.recruit(s,0,0));assert.equal(E.serialize(s),before);
});
test('command validation and unrestricted all-troop dispatch',()=>{
  assert.equal(E.adjacent(0,0),false);assert.ok(E.send(quiet(),0,0,[1,0,0],null));
  const s=quiet();assert.ok(E.send(s,4,5,[1,0,0],null));assert.ok(E.send(s,0,11,[1,0,0],null));assert.ok(E.send(s,0,2,[-1,0,0],0));assert.ok(E.send(s,0,2,[1.5,0,0],0));assert.ok(E.send(s,0,2,[Infinity,0,0],0));assert.equal(E.send(s,0,2,[65,35,40],null),null);assert.equal(E.total(s.cities[0].troops),0);assert.ok(E.send(s,0,2,[0,0,0],0));invariants(s);
});
test('march deducts troops exactly once; friendly reinforcement and general movement conserve troops',()=>{
  const s=quiet();const before=s.cities.filter(c=>c.owner===0).reduce((n,c)=>n+E.total(c.troops),0);
  assert.equal(E.send(s,0,1,[20,10,10],0),null);assert.equal(E.total(s.cities[0].troops),100);assert.ok(E.send(s,0,1,[1,0,0],0));run(s,60);assert.equal(s.heroes[0].city,1);assert.equal(s.armies.length,0);assert.equal(s.cities.filter(c=>c.owner===0).reduce((n,c)=>n+E.total(c.troops),0),before);
  assert.equal(E.send(s,1,0,[0,0,0],0),null);run(s,60);assert.equal(s.heroes[0].city,0);invariants(s);
});
test('grain exhaustion blocks new dispatch but existing marches complete',()=>{
  const s=quiet();E.send(s,0,1,[20,0,0],0);s.factions[0].food=0;assert.ok(E.send(s,0,2,[20,0,0],1));assert.ok(E.recruit(s,0,0));run(s,70);assert.equal(s.heroes[0].city,1);invariants(s);
});
test('only one guard, valid stationed general; cannot change guard or leave a besieged city',()=>{
  const s=quiet();assert.equal(E.guard(s,0,0),null);assert.equal(s.cities[0].guard,0);assert.equal(E.guard(s,0,1),null);assert.equal(s.cities[0].guard,1);assert.ok(E.guard(s,0,2));s.heroes[0].healUntil=30;assert.ok(E.guard(s,0,0));s.battles.push({city:0});assert.ok(E.guard(s,0,1));assert.ok(E.send(s,0,1,[10,0,0],1));assert.ok(E.build(s,0,'walls'));assert.ok(E.recruit(s,0,1));
});
test('troop counters and formation change battle power',()=>{
  assert.ok(E.power([100,0,0],null,'balanced',[0,100,0],true)>E.power([100,0,0],null,'balanced',[0,0,100],true));
  assert.ok(E.power([100,0,0],null,'attack',[100,0,0],true)>E.power([100,0,0],null,'defense',[100,0,0],true));
});
test('real capture gives experience; defeated general returns wounded',()=>{
  const s=quiet();assert.equal(E.send(s,0,2,[65,35,40],0),null);run(s,120);assert.equal(s.cities[2].owner,0);assert.equal(s.heroes[0].city,2);assert.equal(s.heroes[0].level,2);assert.equal(s.tutorial.capture,true);assert.ok(s.logs.some(l=>l.details.length>2));invariants(s);
  const d=quiet();d.cities[2].troops=[100,100,100];E.send(d,0,2,[5,0,0],0);while(d.armies.length&&d.time<160)E.tick(d);assert.equal(d.cities[2].owner,-1);assert.equal(d.heroes[0].army,null);assert.equal(d.heroes[0].city,0);assert.ok(d.heroes[0].healUntil>d.time);invariants(d);
});
test('overlapping arrivals wait and later become friendly reinforcement',()=>{
  const s=quiet();E.send(s,0,2,[65,35,40],0);E.send(s,1,2,[40,20,20],2);run(s,120);assert.equal(s.cities[2].owner,0);assert.equal(s.heroes[0].city,2);assert.equal(s.heroes[2].city,2);assert.equal(s.armies.length,0);assert.equal(s.battles.length,0);assert.equal(s.logs.filter(l=>l.text.includes('攻克城池')).length,1);invariants(s);
});
test('a zero-troop general transfer cannot capture a target that changes hands',()=>{
  const s=quiet();E.send(s,0,1,[0,0,0],0);s.cities[1].owner=1;s.heroes[2].city=0;run(s,50);assert.equal(s.cities[1].owner,1);assert.equal(s.heroes[0].city,0);invariants(s);
});
test('save and reload marches and active battle without diverging subsequent results',()=>{
  const s=quiet();E.send(s,0,2,[65,35,40],0);run(s,10);let copy=E.restore(E.serialize(s));assert.equal(copy.paused,true);copy.paused=false;assert.deepEqual(copy,s);
  while(!s.battles.length)E.tick(s);copy=E.restore(E.serialize(s));copy.paused=false;run(s,100);run(copy,100);assert.deepEqual(copy,s);invariants(copy);
});
test('corrupt data and unsupported version rejected',()=>{
  assert.throws(()=>E.restore('{broken'));const s=quiet();s.version=9;assert.throws(()=>E.restore(E.serialize(s)));s.version=1;s.cities[0].troops[0]=-1;assert.throws(()=>E.restore(E.serialize(s)));
});
test('pause preserves simulation; final capture wins and final city loss loses',()=>{
  const s=quiet();s.paused=true;const raw=E.serialize(s);run(s,10);assert.equal(E.serialize(s),raw);
  const win=quiet();win.cities.forEach(c=>{c.owner=0;c.guard=null;});win.heroes.filter(h=>h.owner!==0).forEach(h=>h.city=null);win.cities[2].owner=-1;win.cities[2].troops=[0,0,0];E.send(win,0,2,[10,0,0],0);run(win,100);assert.equal(win.ended,'win');invariants(win);
  const lose=quiet();lose.cities[0].owner=-1;lose.cities[0].guard=null;lose.heroes.filter(h=>h.owner===0).forEach(h=>h.city=1);lose.cities[1].troops=[0,0,0];lose.cities[2].owner=1;lose.cities[2].troops=[50,0,0];E.send(lose,2,1,[50,0,0],null,'balanced',1);run(lose,100);assert.equal(lose.ended,'lose');invariants(lose);
});
for(const difficulty of ['normal','hard'])test(`${difficulty}: 25-minute live campaign preserves invariants and AI expands`,()=>{
  const s=E.create(0,difficulty);let attacked=false,upgraded=false;
  for(let i=0;i<1500&&!s.ended;i++){if(i%8===0)E.ai(s,0);E.tick(s);attacked ||=s.armies.some(a=>a.owner!==0);upgraded ||=s.cities.some(c=>c.owner>0&&c.homes>1);invariants(s);if(i%60===0)E.restore(E.serialize(s));}
  assert.ok(attacked);assert.ok(upgraded);assert.ok(s.cities.filter(c=>c.owner===-1).length<6);
  console.log(`${difficulty}: t=${s.time}s, ownership=${s.cities.map(c=>c.owner).join(',')}, result=${s.ended||'ongoing'}`);
});
test('AI prioritizes threatened neighbouring cities and uses the same dispatch restrictions',()=>{
  const s=quiet();s.cities[2].owner=0;s.cities[2].troops=[100,0,0];E.send(s,2,4,[100,0,0],null);
  s.time=45;E.ai(s,1);assert.equal(s.cities[4].formation,'defense');assert.equal(s.armies.filter(a=>a.owner===1).length,0);s.time+=8;E.ai(s,1);assert.ok(s.armies.some(a=>a.owner===1&&a.from===5&&a.to===4));invariants(s);
});
for(const difficulty of ['normal','hard'])test(`${difficulty}: idle player can actually lose to AI expansion`,()=>{
  const s=E.create(0,difficulty);run(s,3600);assert.equal(s.ended,'lose');invariants(s);
});
test('economy: opening 6 gold/sec and first housing upgrade repays in 50 seconds',()=>{
  const s=quiet();run(s,10);assert.equal(s.factions[0].gold,380);
  const before=s.factions[0].gold;E.build(s,0,'homes');run(s,50);
  assert.equal(s.factions[0].gold,before+300);
  for(const f of s.factions)assert.ok(f.gold>=0);
});
for(const difficulty of ['normal','hard'])test(difficulty+': AI has preparation time and one order per eight seconds regardless of city count',()=>{
  const s=E.create(0,difficulty);run(s,44);assert.equal(s.armies.length,0);assert.ok(s.cities.every(c=>c.homes===1));
  E.tick(s);const before=E.serialize(s);assert.equal(E.ai(s,1),false);assert.equal(E.ai(s,2),false);assert.equal(E.serialize(s),before);
  for(let i=0;i<200;i++){const clocks=s.aiNext.slice();E.tick(s);clocks.forEach((v,o)=>{if(s.aiNext[o]!==v){assert.equal(s.aiNext[o],s.time+8);assert.ok(s.time>=v);}});}
});
test('old saves migrate AI and battlefield state; corrupt unit positions are rejected',()=>{
  const s=quiet();delete s.aiNext;delete s.aiCursor;delete s.economy;
  const restored=E.restore(E.serialize(s));assert.equal(restored.aiNext[0],8);assert.deepEqual(restored.economy,[]);
  E.fieldUnits(restored,0)[0].x=Infinity;assert.throws(()=>E.restore(E.serialize(restored)));
});
test('tactical orders: owned squads only, movement, stop, persistence and shared fog',()=>{
  const s=quiet(),units=E.fieldUnits(s,0),id=units[0].id,x=units[0].x;
  assert.ok(E.fieldOrder(s,4,['d0'],'move',20,20,null));
  // The former (40,40) destination is now a mapped building footprint.
  assert.ok(E.fieldOrder(s,0,[id],'move',40,40,null));
  assert.equal(E.fieldOrder(s,0,[id],'move',61,50,null),null);run(s,3);assert.ok(E.fieldUnits(s,0)[0].x<x);
  const copy=E.restore(E.serialize(s));copy.paused=false;run(s,3);run(copy,3);assert.deepEqual(copy,s);
  assert.equal(E.fieldOrder(s,0,[id],'hold',40,40,null),null);const stopped=E.fieldUnits(s,0)[0].x;run(s,3);assert.equal(E.fieldUnits(s,0)[0].x,stopped);
  E.send(s,0,2,[65,35,40],0);while(!s.battles.length)E.tick(s);
  const b=s.battles[0],enemy=b.units.find(u=>u.side===1),own=b.units.find(u=>u.side===0);
  assert.equal(E.fieldVisible(s,2,enemy,0),false);assert.ok(E.fieldOrder(s,2,[own.id],'attack',enemy.x,enemy.y,enemy.id));
  assert.equal(E.fieldVisible(s,2,own,0),true);own.x=enemy.x-.8;own.y=enemy.y;
  assert.equal(E.fieldVisible(s,2,enemy,0),true);assert.equal(E.fieldOrder(s,2,[own.id],'attack',enemy.x,enemy.y,enemy.id),null);
});
test('reinforcements enter an ongoing friendly defense and conserve soldiers',()=>{
  const s=quiet();s.cities[2].owner=1;s.cities[2].troops=[80,40,60];E.send(s,2,0,[80,40,60],null,'balanced',1);
  while(!s.battles.length)E.tick(s);assert.equal(E.send(s,1,0,[20,10,10],2),null);
  const reinforcement=s.armies.find(a=>a.owner===0);reinforcement.arrive=s.time+1;
  E.tick(s);const b=s.battles.find(b=>b.city===0);assert.ok(b);assert.ok(b.units.some(u=>u.id.startsWith('r')));
  assert.equal(b.units.filter(u=>u.side===1).reduce((n,u)=>n+u.count,0),E.total(s.cities[0].troops));assert.ok(!s.armies.includes(reinforcement));E.restore(E.serialize(s));invariants(s);
});
test('normal: a complete autonomous campaign can unify the map under the same action budget',()=>{
  // City streets, walls and congestion now add real travel time inside each siege.
  const s=E.create();for(let i=0;i<7200&&!s.ended;i++){if(i%8===0)E.ai(s,0);E.tick(s);}
  assert.equal(s.ended,'win');assert.equal(s.cities.filter(c=>c.owner===0).length,12);invariants(s);
});
