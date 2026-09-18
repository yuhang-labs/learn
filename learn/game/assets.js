/* Script manifest deliberately works on file:// and on Pages subdirectories. */
window.DaqinAssets={maps:{world:'assets/processed/world-map.png',city:'assets/processed/city-scene.png'},
  // Hand-registered against visible coasts/mountains, not an equirectangular projection.
  // Geographic anchors document the intended region; artwork coordinates are separate from travel costs.
  positions:[[.450,.411],[.424,.470],[.441,.275],[.324,.521],[.247,.450],[.208,.443],[.423,.704],[.157,.489],[.105,.377],[.103,.278],[.826,.501],[.091,.228]],
  geography:[
    {city:'咸阳',region:'中国陕西关中，今咸阳一带',latitude:34.33,longitude:108.71},
    {city:'巴蜀',region:'中国四川盆地，以成都为锚点',latitude:30.67,longitude:104.07},
    {city:'漠北',region:'蒙古高原，戈壁以北',latitude:47.9,longitude:106.9},
    {city:'天竺',region:'印度北部，以德里地区为锚点',latitude:28.6,longitude:77.2},
    {city:'波斯',region:'伊朗高原西南，波斯波利斯一带',latitude:29.93,longitude:52.89},
    {city:'巴比伦',region:'今伊拉克中部，美索不达米亚',latitude:32.54,longitude:44.42},
    {city:'南洋',region:'马来半岛南端与马六甲海峡地区',latitude:2.19,longitude:102.25},
    {city:'埃及',region:'尼罗河下游，孟菲斯一带',latitude:29.85,longitude:31.25},
    {city:'迦太基',region:'今突尼斯北岸',latitude:36.85,longitude:10.32},
    {city:'罗马',region:'意大利半岛中西部',latitude:41.9,longitude:12.5},
    {city:'玛雅',region:'中美洲尤卡坦半岛',latitude:20.68,longitude:-88.57},
    {city:'高卢',region:'今法国北部，以巴黎盆地为锚点',latitude:48.86,longitude:2.35}
  ],troops:['spearman','cavalry','archer'],actions:{idle:[0],move:[0,1],attack:[0,1],death:[0]},anchor:[64,112],size:128};
