
const canvas = document.getElementById("heroCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let revealed = false, particles = [], fade = 0, noiseT = 0;

  function R(a, b) { return Math.random() * (b - a) + a; }
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  addEventListener("resize", resize);

  function addSplash(x, y) {
    for (let i = 0; i < 40; i++) {
      const r = R(12, 70), h = R(310, 400);
      const vx = Math.cos(R(0, Math.PI * 2)) * R(0.8, 4);
      const vy = Math.sin(R(0, Math.PI * 2)) * R(0.8, 4);
      particles.push({ x: x + R(-90, 90), y: y + R(-90, 90), r, h, vx, vy, a: 0.6, dec: R(0.96, 0.985) });
    }
  }

  function step() {
    noiseT += 0.006;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

   
    for (let i = 0; i < 110; i++) {
      const x = canvas.width / 2 + Math.sin(noiseT + i * 0.33) * 230;
      const y = canvas.height / 2 + Math.cos(noiseT * 0.8 + i * 0.23) * 140;
      const s = 1.3 + Math.sin(noiseT * 1.2 + i) * 1.1;
      ctx.beginPath();
      ctx.fillStyle = `hsla(${(noiseT * 120 + i * 7) % 360},90%,60%,.18)`;
      ctx.arc(x, y, s, 0, Math.PI * 2);
      ctx.fill();
    }

    
    for (const p of particles) {
      ctx.beginPath();
      ctx.fillStyle = `hsla(${p.h},100%,60%,${p.a})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.97;
      p.vy *= 0.97;
      p.a *= p.dec;
    }

    particles = particles.filter(p => p.a > 0.03);

    if (revealed && fade < 1) fade = Math.min(1, fade + 0.035);
    if (fade > 0) {
      ctx.fillStyle = `rgba(10,10,12,${fade * 0.92})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    requestAnimationFrame(step);
  }
  step();

  function smoothReveal() {
    const section = document.getElementById("oldCoppellMap");
    if (!section) return;
    section.style.display = "block";
    section.style.opacity = "0";
    section.style.transform = "translateY(24px)";
    requestAnimationFrame(() => {
      section.style.transition = "opacity .6s ease, transform .6s ease";
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      section.scrollIntoView({ behavior: "smooth" });
    });
  }

  function parallax(e) {
    const heroTitle = document.querySelector(".hero-title");
    if (!heroTitle) return;
    const rx = (e.clientX / window.innerWidth - 0.5) * 6;
    const ry = (e.clientY / window.innerHeight - 0.5) * -6;
    heroTitle.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
  }

  canvas.addEventListener("pointermove", parallax);
  canvas.addEventListener("click", (e) => {
    addSplash(e.clientX, e.clientY);
    if (!revealed) {
      revealed = true;
      setTimeout(smoothReveal, 700);
    }
  });
}


function initMapPins() {
  const pins = document.querySelectorAll(".pin");
  const label = document.getElementById("mapLabel") || document.getElementById("mapInfo");
  pins.forEach((p) => {
    p.addEventListener("mouseenter", () => {
      if (label) label.textContent = p.dataset.label;
      p.style.transform = "scale(1.3)";
    });
    p.addEventListener("mouseleave", () => {
      if (label) label.textContent = "Hover or tap a pin to see its name";
      p.style.transform = "scale(1)";
    });
    p.addEventListener("click", () => {
      if (label) label.textContent = p.dataset.label;
    });
  });
}
document.addEventListener("DOMContentLoaded", initMapPins);

const nav = document.querySelector(".blonded-nav");
if (nav) {
  window.addEventListener("scroll", () => {
    nav.style.background = window.scrollY > 50
      ? "rgba(10,10,12,.85)"
      : "rgba(10,10,12,.35)";
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const root = document.documentElement;


  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") root.classList.add("light-mode");

  toggle?.addEventListener("click", () => {
    root.classList.toggle("light-mode");
    const isLight = root.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-menu a");
  const currentPage = location.pathname.split("/").pop();
  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) link.classList.add("active");
  });
});
