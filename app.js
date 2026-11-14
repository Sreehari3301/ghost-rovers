/* Ghost Rovers. Story data lives in data.json. Edit that file to change stories and facts. */
var WORLDS=[{id:"moon",label:"The Moon"},{id:"mars",label:"Mars"},{id:"deep-space",label:"Deep Space"}];
var M=[];
var MAPS={
moon:'<img src="moon.jpg" class="map-img" alt="Real mosaic of the near side of the Moon, from NASA Lunar Reconnaissance Orbiter images">',
mars:'<img src="mars.jpg" class="map-img" alt="Real mosaic map of Mars, made from NASA Viking Orbiter images">',
"deep-space":'<svg viewBox="0 0 400 400" role="img" aria-label="Stylized map of the solar system with the asteroid belt"><rect width="400" height="400" fill="#070a18"/><circle cx="40" cy="360" r="46" fill="#ffc861"/><g fill="none" stroke="#3b4375" stroke-width="2"><circle cx="40" cy="360" r="110"/><circle cx="40" cy="360" r="170"/><circle cx="40" cy="360" r="340"/></g><circle cx="40" cy="360" r="255" fill="none" stroke="#8a90b8" stroke-width="22" stroke-dasharray="2 7" opacity=".7"/><text x="200" y="125" fill="#aab0cc" font-size="14" font-family="sans-serif">asteroid belt</text></svg><img src="ceres.jpg" class="map-photo" style="left:42%;top:56%;width:26%" alt="Ceres, photographed by NASA Dawn"><img src="eros.jpg" class="map-photo" style="left:72%;top:34%;width:26%" alt="Asteroid Eros, photographed by NASA NEAR Shoemaker">'};
var cur="moon",sel=null;
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
function tabs(){var t=document.getElementById("tabs");t.innerHTML="";WORLDS.forEach(function(w){var b=el("button","",w.label);b.setAttribute("role","tab");b.setAttribute("aria-selected",w.id===cur);b.onclick=function(){cur=w.id;sel=null;tabs();map();show(null)};t.appendChild(b)})}
function map(){var m=document.getElementById("map");m.className=cur==="mars"?"map map-wide":"map";m.innerHTML=MAPS[cur];M.filter(function(x){return x.world===cur}).forEach(function(x){var b=el("button","mk",'<i></i><span>'+x.label+'</span>');b.style.left=x.x+"%";b.style.top=x.y+"%";b.setAttribute("aria-label","Open the story of "+x.name);b.setAttribute("aria-pressed",sel===x.id);b.onclick=function(){sel=x.id;map();show(x);document.getElementById("panel").focus({preventScroll:false})};m.appendChild(b)})}
function list(a){return"<ul>"+a.map(function(s){return"<li>"+s+"</li>"}).join("")+"</ul>"}
function stopSpeak(){if('speechSynthesis' in window){speechSynthesis.cancel()}var b=document.getElementById('listenBtn');if(b){b.textContent='▶ Listen to this story';b.setAttribute('aria-label','Listen to this story')}}
function toggleSpeak(x){if(!('speechSynthesis' in window))return;if(speechSynthesis.speaking){stopSpeak();return}var u=new SpeechSynthesisUtterance(x.story.replace(/\n\n/g,' '));u.lang='en-US';u.rate=.95;u.onend=function(){stopSpeak()};u.onerror=function(){stopSpeak()};speechSynthesis.speak(u);var b=document.getElementById('listenBtn');if(b){b.textContent='■ Stop listening';b.setAttribute('aria-label','Stop listening')}}
function show(x){stopSpeak();updateSideLinks(x);var p=document.getElementById("panel");if(!x){p.innerHTML='<p class="empty">Tap a glowing signal on the map to wake up a machine.</p>';return}
var h='<h2>'+x.name+'</h2><p class="hook">“'+x.hook+'”</p>';
if('speechSynthesis' in window){h+='<button id="listenBtn" class="listen" aria-label="Listen to this story">▶ Listen to this story</button>'}
h+=x.story.split('\n\n').map(function(s){return '<p>'+s+'</p>'}).join('');
var end=x.ending+(x.nowAt?' I am still there — '+x.nowAt.replace(/\.$/,'')+'.':'');
h+='<p class="ending">'+end+'</p>';
p.innerHTML=h;var lb=document.getElementById('listenBtn');if(lb){lb.onclick=function(){toggleSpeak(x)}}}
function sideLinksHTML(x){var u=[];if(x){u=x.sources}else{M.forEach(function(m){m.sources.forEach(function(s){if(u.indexOf(s)<0)u.push(s)})})}return '<ul>'+u.map(function(s){return'<li><a href="'+s+'" target="_blank" rel="noopener">'+s.replace("https://","")+'</a></li>'}).join('')+'</ul>'}
function updateSideLinks(x){var d=document.getElementById('sideLinks');if(d)d.innerHTML=sideLinksHTML(x)}
function openSide(){document.body.classList.add('side-open');var b=document.getElementById('sideBtn');if(b)b.setAttribute('aria-expanded','true');var c=document.getElementById('sideClose');if(c)c.focus()}
function closeSide(){document.body.classList.remove('side-open');var b=document.getElementById('sideBtn');if(b){b.setAttribute('aria-expanded','false');b.focus()}}
fetch("data.json")
  .then(function(r){return r.json()})
  .then(function(d){M=d.machines;tabs();map();show(null)})
  .catch(function(){document.getElementById("panel").innerHTML='<p class="empty">Could not load data.json. Run a local server (see README) or check the file name.</p>'});
var sb=document.getElementById('sideBtn');if(sb)sb.onclick=function(){document.body.classList.contains('side-open')?closeSide():openSide()};
var sc=document.getElementById('sideClose');if(sc)sc.onclick=closeSide;
var ov=document.getElementById('sideOverlay');if(ov)ov.onclick=closeSide;
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&document.body.classList.contains('side-open'))closeSide()});
