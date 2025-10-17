const body=document.body,themeBtn=document.getElementById("toggleTheme")||document.querySelector(".btn-outline-light.btn-sm");
if(themeBtn){themeBtn.addEventListener("click",()=>body.classList.toggle("theme-light"))}
const pc=document.getElementById("paintCanvas");
if(pc){const ctx=pc.getContext("2d");function r(){pc.width=pc.clientWidth;pc.height=pc.clientHeight}window.addEventListener("resize",r);r();let t=0;function loop(){t+=0.01;ctx.clearRect(0,0,pc.width,pc.height);for(let i=0;i<120;i++){const x=pc.width/2+Math.sin(t+i*.3)*220,y=pc.height/2+Math.cos(t*.8+i*.21)*140,s=1.5+Math.sin(t*1.2+i)*1.2;ctx.beginPath();ctx.fillStyle=`hsla(${(t*120+i*7)%360},90%,60%,.35)`;ctx.arc(x,y,s,0,Math.PI*2);ctx.fill()}requestAnimationFrame(loop)}loop()}
function countUp(id,end){const el=document.getElementById(id);if(!el)return;let s=0;const d=1600;let st=null;function u(ts){if(!st)st=ts;const p=Math.min((ts-st)/d,1);el.textContent=Math.floor(p*end);if(p<1)requestAnimationFrame(u)}requestAnimationFrame(u)}
if(document.getElementById("partners")){countUp("partners",18);countUp("events",12);countUp("initiatives",9)}
if(document.getElementById("a_partners")){countUp("a_partners",18);countUp("a_events",12);countUp("a_initiatives",9)}
const pins=document.querySelectorAll(".pin"),info=document.getElementById("mapInfo");
pins.forEach(p=>{p.addEventListener("mouseenter",()=>info&&(info.textContent=`${p.dataset.title} — ${p.dataset.desc}`));p.addEventListener("mouseleave",()=>info&&(info.textContent="Hover or tap a pin to see its story."));p.addEventListener("click",()=>info&&(info.textContent=`${p.dataset.title} — ${p.dataset.desc}`))});
