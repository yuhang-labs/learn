/* Native city image annotations, expressed as percentages. Shared by client/server. */
(function(root){
  'use strict';
  const polygons = [
    {kind:'water',points:[[0,33],[7,36],[8,51],[18,64],[25,71],[45,90],[45,100],[36,96],[20,82],[8,68],[0,51]]},
    {kind:'water',points:[[70,69],[80,70],[90,73],[100,77],[100,93],[88,84],[78,84],[69,76]]},
    {kind:'building',points:[[45,27],[54,19],[62,31],[62,40],[53,47],[45,39]]},
    {kind:'building',points:[[34,37],[38,34],[43,39],[41,44],[35,45]]},
    {kind:'building',points:[[28,44],[31,41],[35,45],[33,49],[29,50]]},
    {kind:'building',points:[[34,51],[39,48],[43,54],[41,59],[35,59]]},
    {kind:'building',points:[[48,51],[52,47],[57,51],[56,56],[50,58]]},
    {kind:'building',points:[[62,39],[66,35],[71,39],[68,45],[63,46]]},
    {kind:'building',points:[[70,32],[76,31],[80,37],[76,42],[71,40]]},
    {kind:'building',points:[[73,46],[77,43],[82,46],[81,51],[76,54]]},
    {kind:'building',points:[[57,55],[61,53],[66,57],[64,62],[59,63]]},
    {kind:'building',points:[[58,15],[62,14],[67,18],[66,22],[61,23]]}
  ];
  const walls=[[[14,45],[39,25]],[[42,23],[60,7]],[[60,7],[75,25]],[[78,28],[92,40]],[[92,40],[76,59]],[[71,64],[47,82]],[[47,82],[32,65]],[[27,61],[14,45]]];
  const bridges=[[[17,79],[24,72]],[[38,95],[46,87]],[[76,72],[81,76]]];
  const gates=[{x:40,y:24},{x:76.5,y:26.5},{x:73.5,y:61.5},{x:29.5,y:63}];
  const rally={x:66,y:54},spawns=[{x:26,y:72},{x:65,y:53}];
  function inside(p,poly){let v=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a[1]>p.y)!==(b[1]>p.y)&&p.x<(b[0]-a[0])*(p.y-a[1])/(b[1]-a[1])+a[0])v=!v;}return v;}
  function segmentDistance(p,a,b){const dx=b[0]-a[0],dy=b[1]-a[1],t=Math.max(0,Math.min(1,((p.x-a[0])*dx+(p.y-a[1])*dy)/(dx*dx+dy*dy)));return Math.hypot(p.x-a[0]-t*dx,p.y-a[1]-t*dy);}
  function blocked(p,sight=false){if(p.x<1||p.y<1||p.x>99||p.y>99)return true;
    if(walls.some(([a,b])=>segmentDistance(p,a,b)<.85))return true;
    return polygons.some(o=>(!sight||o.kind==='building')&&inside(p,o.points)&&!(o.kind==='water'&&bridges.some(([a,b])=>segmentDistance(p,a,b)<1.8)));
  }
  const grid=new Uint8Array(10000);for(let y=0;y<100;y++)for(let x=0;x<100;x++)grid[y*100+x]=blocked({x:x+.5,y:y+.5})?1:0;
  const key=p=>Math.floor(p.y)*100+Math.floor(p.x),pos=k=>({x:k%100+.5,y:Math.floor(k/100)+.5});
  const walkable=p=>Number.isFinite(p?.x)&&Number.isFinite(p?.y)&&p.x>=1&&p.x<99&&p.y>=1&&p.y<99&&!grid[key(p)];
  const sightGrid=new Uint8Array(10000);for(let y=0;y<100;y++)for(let x=0;x<100;x++)sightGrid[y*100+x]=blocked({x:x+.5,y:y+.5},true)?1:0;
  const sightCache=new Map();
  function line(a,b,sight=true){let cacheKey;if(sight){const ka=key(a),kb=key(b);cacheKey=Math.min(ka,kb)*10000+Math.max(ka,kb);if(sightCache.has(cacheKey))return sightCache.get(cacheKey);a=pos(ka);b=pos(kb);}
    const n=Math.max(1,Math.ceil(Math.hypot(a.x-b.x,a.y-b.y)*2));let clear=true;for(let i=0;i<=n;i++){const p={x:a.x+(b.x-a.x)*i/n,y:a.y+(b.y-a.y)*i/n};if(sight?sightGrid[key(p)]:!walkable(p)){clear=false;break;}}
    if(sight){if(sightCache.size>180000)sightCache.clear();sightCache.set(cacheKey,clear);}return clear;
  }
  function nearest(p,used=new Set()){for(let r=0;r<100;r++)for(let dy=-r;dy<=r;dy++)for(let dx=-r;dx<=r;dx++){if(Math.max(Math.abs(dx),Math.abs(dy))!==r)continue;const q={x:Math.floor(p.x)+dx+.5,y:Math.floor(p.y)+dy+.5};if(walkable(q)&&!used.has(key(q)))return q;}return null;}
  const cache=new Map();
  function flow(goal){const k=key(goal);if(cache.has(k))return cache.get(k);const dist=new Int16Array(10000).fill(-1),queue=new Int32Array(10000);let head=0,tail=0;queue[tail++]=k;dist[k]=0;
    while(head<tail){const at=queue[head++],x=at%100,y=Math.floor(at/100);for(const [dx,dy]of [[1,0],[-1,0],[0,1],[0,-1]]){const nx=x+dx,ny=y+dy,n=ny*100+nx;if(nx<1||ny<1||nx>98||ny>98||grid[n]||dist[n]>=0)continue;dist[n]=dist[at]+1;queue[tail++]=n;}}
    cache.set(k,dist);if(cache.size>128)cache.delete(cache.keys().next().value);return dist;
  }
  function path(start,goal,avoid=null){if(!walkable(start)||!walkable(goal))return null;
    if(avoid){const source=key(start),target=key(goal),previous=new Int32Array(10000).fill(-1),queue=new Int32Array(10000);let head=0,tail=0;queue[tail++]=source;previous[source]=source;
      while(head<tail&&previous[target]<0){const at=queue[head++];for(const n of [at-100,at-1,at+1,at+100]){if(n<101||n>9898||grid[n]||previous[n]>=0||avoid.has(n)&&n!==target)continue;previous[n]=at;queue[tail++]=n;}}
      if(previous[target]<0)return null;const result=[];for(let n=target;n!==source;n=previous[n])result.push(pos(n));result.reverse();result.push({...goal});return result;
    }
    const dist=flow(goal);let at=key(start);if(dist[at]<0)return null;const result=[];while(dist[at]>0){const next=[at-100,at-1,at+1,at+100].find(n=>n>=0&&n<10000&&dist[n]===dist[at]-1);if(next===undefined)return null;at=next;result.push(pos(at));}result.push({...goal});return result;}
  class Index{constructor(units,size=6){this.size=size;this.cells=new Map();for(const u of units){if(u.count<=0)continue;const k=this.cell(u);if(!this.cells.has(k))this.cells.set(k,[]);this.cells.get(k).push(u);}}cell(u){return Math.floor(u.x/this.size)+','+Math.floor(u.y/this.size);}near(p,r){const out=[];for(let y=Math.floor((p.y-r)/this.size);y<=Math.floor((p.y+r)/this.size);y++)for(let x=Math.floor((p.x-r)/this.size);x<=Math.floor((p.x+r)/this.size);x++)for(const u of this.cells.get(x+','+y)||[])if(Math.hypot(u.x-p.x,u.y-p.y)<=r)out.push(u);return out;}}
  const api={polygons,walls,bridges,gates,rally,spawns,grid,walkable,line,nearest,path,Index,key};if(typeof module!=='undefined')module.exports=api;root.DaqinNav=api;
})(typeof globalThis!=='undefined'?globalThis:window);
