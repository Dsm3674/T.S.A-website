
const canvas = document.getElementById("heroCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let revealed = false;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  function random(min, max) { return Math.random() * (max - min) + min; }

  function paintSplash(x, y) {
    for (let i = 0; i < 35; i++) {
      const radius = random(20, 80);
      const hue = random(310, 400);
      ctx.beginPath();
      ctx.fillStyle = `hsl(${hue}, 100%, 60%)`;
      ctx.globalAlpha = 0.6;
      ctx.arc(x + random(-100, 100), y + random(-100, 100), radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  canvas.addEventListener("click", (e) => {
    paintSplash(e.clientX, e.clientY);
    if (!revealed) {
      revealed = true;
      setTimeout(() => {
        const section = document.getElementById("oldCoppellMap");
        if (section) {
          section.style.display = "block";
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 800);
    }
  });
}


function initMapPins() {
  const pins = document.querySelectorAll(".pin");
  pins.forEach(pin => {
    pin.addEventListener("mouseenter", () => {
      const label = document.getElementById("mapLabel") || document.getElementById("mapInfo");
      if (label) label.textContent = pin.dataset.label;
      pin.style.transform = "scale(1.3)";
    });
    pin.addEventListener("mouseleave", () => {
      const label = document.getElementById("mapLabel") || document.getElementById("mapInfo");
      if (label) label.textContent = "Hover or tap a pin to see its name";
      pin.style.transform = "scale(1)";
    });
  });
}
document.addEventListener("DOMContentLoaded", initMapPins);


const nav = document.querySelector(".blonded-nav");
if (nav) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) nav.style.background = "rgba(10,10,12,0.85)";
    else nav.style.background = "rgba(10,10,12,0.35)";
  });
}
