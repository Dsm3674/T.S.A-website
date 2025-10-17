
const toggle=document.querySelector(".mode"),body=document.body;
toggle.addEventListener("click",()=>body.classList.toggle("theme-dark"));
const c=document.getElementById("orbCanvas"),ctx=c.getContext("2d");
let w,h,orb=0;
function resize(){w=c.width=window.innerWidth;h=c.height=window.innerHeight}
window.addEventListener("resize",resize);resize();
function draw(){ctx.clearRect(0,0,w,h);const t=Date.now()/1000;
for(let i=0;i<50;i++){const x=w/2+Math.sin(t+i)*120,y=h/2+Math.cos(t+i*0.7)*60,r=2+Math.sin(t+i)*1.5;ctx.beginPath();ctx.fillStyle=`hsla(${(t*40+i*10)%360},70%,60%,.4)`;ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();}
requestAnimationFrame(draw)}draw();
const pins=document.querySelectorAll(".pin"),info=document.getElementById("mapInfo");
pins.forEach(p=>{p.addEventListener("mouseenter",()=>info.textContent=p.dataset.info);p.addEventListener("mouseleave",()=>info.textContent="Hover over a pin to see its story.")});
function animateCounter(id,end){let start=0,el=document.getElementById(id),dur=1500,startTime=null;function update(ts){if(!startTime)startTime=ts;const p=Math.min((ts-startTime)/dur,1);el.textContent=Math.floor(p*end);if(p<1)requestAnimationFrame(update)}requestAnimationFrame(update)}
if(document.getElementById("volunteers")){animateCounter("volunteers",230);animateCounter("events",42);animateCounter("hours",5800);}

