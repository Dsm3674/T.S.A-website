const themeBtn=document.getElementById("themeToggle");
if(themeBtn){themeBtn.addEventListener("click",()=>document.body.classList.toggle("theme-light"))}

const hero=document.getElementById("heroCanvas");
if(hero){
  const ctx=hero.getContext("2d");
  const resize=()=>{hero.width=hero.clientWidth;hero.height=hero.clientHeight};resize();addEventListener("resize",resize);
  const splats=[];
  function addSplat(x,y){
    const hue=[0,330,200,160,280,30][Math.floor(Math.random()*6)];
    const n=16+Math.floor(Math.random()*22);
    for(let i=0;i<n;i++){
      const a=Math.random()*Math.PI*2,s=1+Math.random()*5,r=2+Math.random()*9;
      splats.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,r,h:hue,a:1});
    }
  }
  hero.addEventListener("pointerdown",e=>{
    const r=hero.getBoundingClientRect();addSplat(e.clientX-r.left,e.clientY-r.top);
  });
  let t=0;
  (function loop(){
    t+=0.01;ctx.clearRect(0,0,hero.width,hero.height);
    for(let i=0;i<110;i++){
      const x=hero.width/2+Math.sin(t+i*.33)*230,y=hero.height/2+Math.cos(t*.8+i*.23)*140,s=1.4+Math.sin(t*1.2+i)*1.2;
      ctx.beginPath();ctx.fillStyle=`hsla(${(t*120+i*7)%360},90%,60%,.22)`;ctx.arc(x,y,s,0,Math.PI*2);ctx.fill();
    }
    for(const p of splats){
      ctx.beginPath();ctx.fillStyle=`hsla(${p.h},100%,55%,${p.a})`;ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();
      p.x+=p.vx;p.y+=p.vy;p.vx*=0.97;p.vy*=0.97;p.a*=0.965;
    }
    for(let i=splats.length-1;i>=0;i--) if(splats[i].a<0.03) splats.splice(i,1);
    requestAnimationFrame(loop);
  })();
}

const slap=document.getElementById("slapCanvas");
if(slap){
  const ctx=slap.getContext("2d");
  const resize=()=>{slap.width=slap.clientWidth;slap.height=slap.clientHeight};resize();addEventListener("resize",resize);
  function burst(x,y){
    for(let i=0;i<42;i++){
      const a=Math.random()*Math.PI*2,s=2+Math.random()*6,r=2+Math.random()*10;
      const hue=[160,40,200,30,280][Math.floor(Math.random()*5)];
      let life=60+Math.random()*40,px=x,py=y,vx=Math.cos(a)*s,vy=Math.sin(a)*s;
      (function anim(){
        ctx.globalCompositeOperation="lighter";
        ctx.fillStyle=`hsla(${hue},100%,60%,.55)`;ctx.beginPath();ctx.arc(px,py,r,0,Math.PI*2);ctx.fill();
        px+=vx;py+=vy;vx*=0.95;vy*=0.95;life--; if(life>0) requestAnimationFrame(anim);
      })();
    }
  }
  slap.addEventListener("pointerdown",e=>{
    const r=slap.getBoundingClientRect();burst(e.clientX-r.left,e.clientY-r.top);
  });
}

const pins=document.querySelectorAll(".pin"),info=document.getElementById("mapInfo");
pins.forEach(p=>{
  p.addEventListener("mouseenter",()=>info&&(info.textContent=`${p.dataset.title} — ${p.dataset.desc}`));
  p.addEventListener("mouseleave",()=>info&&(info.textContent="Hover or tap a pin to see its story."));
  p.addEventListener("click",()=>info&&(info.textContent=`${p.dataset.title} — ${p.dataset.desc}`));
});

function countUp(id,end){const el=document.getElementById(id);if(!el)return;let t0=null;const dur=1500;
  function step(ts){if(!t0)t0=ts;const p=Math.min((ts-t0)/dur,1);el.textContent=Math.floor(p*end);if(p<1)requestAnimationFrame(step)}
  requestAnimationFrame(step)
}
if(document.getElementById("metricPartners")){countUp("metricPartners",18);countUp("metricActivations",12);countUp("metricInitiatives",9)}
