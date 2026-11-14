/* Ghost Rovers. Story data lives in data.json. Edit that file to change stories and facts. */
var WORLDS=[{id:"moon",label:"The Moon"},{id:"mars",label:"Mars"},{id:"deep-space",label:"Deep Space"}];
var M=[];
var MAPS={
moon:'<svg viewBox="0 0 400 400" role="img" aria-label="Stylized map of the Moon"><defs><radialGradient id="gm" cx="40%" cy="35%"><stop offset="0" stop-color="#d8d6d0"/><stop offset="1" stop-color="#6f6e72"/></radialGradient></defs><rect width="400" height="400" fill="#070a18"/><circle cx="200" cy="200" r="185" fill="url(#gm)"/><g fill="#8b8a8f" opacity=".55"><ellipse cx="150" cy="150" rx="55" ry="40"/><ellipse cx="260" cy="170" rx="45" ry="55"/><ellipse cx="230" cy="260" rx="50" ry="30"/></g><g fill="none" stroke="#5a5960" stroke-width="3" opacity=".6"><circle cx="110" cy="260" r="26"/><circle cx="300" cy="100" r="18"/><circle cx="170" cy="330" r="20"/><circle cx="310" cy="280" r="14"/></g></svg>',
mars:'<svg viewBox="0 0 400 400" role="img" aria-label="Stylized map of Mars"><defs><radialGradient id="gr" cx="40%" cy="35%"><stop offset="0" stop-color="#e59a62"/><stop offset="1" stop-color="#8a3d22"/></radialGradient></defs><rect width="400" height="400" fill="#070a18"/><circle cx="200" cy="200" r="185" fill="url(#gr)"/><g fill="#6b2f1b" opacity=".5"><ellipse cx="140" cy="200" rx="60" ry="35"/><ellipse cx="270" cy="250" rx="55" ry="40"/><ellipse cx="230" cy="130" rx="40" ry="25"/></g><ellipse cx="200" cy="40" rx="70" ry="14" fill="#f3e9df" opacity=".8"/></svg>',
"deep-space":'<svg viewBox="0 0 400 400" role="img" aria-label="Stylized map of the solar system with the asteroid belt"><rect width="400" height="400" fill="#070a18"/><circle cx="40" cy="360" r="46" fill="#ffc861"/><g fill="none" stroke="#3b4375" stroke-width="2"><circle cx="40" cy="360" r="110"/><circle cx="40" cy="360" r="170"/><circle cx="40" cy="360" r="340"/></g><circle cx="40" cy="360" r="255" fill="none" stroke="#8a90b8" stroke-width="22" stroke-dasharray="2 7" opacity=".7"/><text x="200" y="125" fill="#aab0cc" font-size="14" font-family="sans-serif">asteroid belt</text></svg>'};
var cur="moon",sel=null;
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
function tabs(){var t=document.getElementById("tabs");t.innerHTML="";WORLDS.forEach(function(w){var b=el("button","",w.label);b.setAttribute("role","tab");b.setAttribute("aria-selected",w.id===cur);b.onclick=function(){cur=w.id;sel=null;tabs();map();show(null)};t.appendChild(b)})}
function map(){var m=document.getElementById("map");m.innerHTML=MAPS[cur];M.filter(function(x){return x.world===cur}).forEach(function(x){var b=el("button","mk",'<i></i><span>'+x.label+'</span>');b.style.left=x.x+"%";b.style.top=x.y+"%";b.setAttribute("aria-label","Open the story of "+x.name);b.setAttribute("aria-pressed",sel===x.id);b.onclick=function(){sel=x.id;map();show(x);document.getElementById("panel").focus({preventScroll:false})};m.appendChild(b)})}
function list(a){return"<ul>"+a.map(function(s){return"<li>"+s+"</li>"}).join("")+"</ul>"}
function show(x){var p=document.getElementById("panel");if(!x){p.innerHTML='<p class="empty">Tap a glowing signal on the map to wake up a machine.</p>';return}
var h='<h2>'+x.name+'</h2><p class="hook">“'+x.hook+'”</p><p>'+x.story+'</p><h3>Key facts</h3>'+list(x.facts);
if(x.howItWorked.length)h+='<h3>How it worked</h3>'+list(x.howItWorked);
h+='<details><summary>Read the ending</summary><p>'+x.ending+'</p>'+(x.nowAt?'<p><b>Where it is now:</b> '+x.nowAt+'</p>':'')+'</details>';
h+='<h3>Sources</h3>'+list(x.sources.map(function(u){return'<a href="'+u+'" target="_blank" rel="noopener">'+u.replace("https://","")+'</a>'}));
p.innerHTML=h}
fetch("data.json")
  .then(function(r){return r.json()})
  .then(function(d){M=d.machines;tabs();map();show(null)})
  .catch(function(){document.getElementById("panel").innerHTML='<p class="empty">Could not load data.json. Run a local server (see README) or check the file name.</p>'});
