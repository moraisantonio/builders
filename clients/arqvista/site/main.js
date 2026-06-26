/*
  ArqVista — interações. Vanilla JS, sem dependências.
  Nav, menu mobile, reveals no scroll, abas de segmentos e animação de
  "planta generativa" no hero (malha de pontos/linhas em canvas).
*/

// --- Navbar scrolled ---
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// --- Menu mobile ---
const burger = document.getElementById("burger");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll(".nav__links a").forEach((a) =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

// --- Reveal no scroll ---
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
);
document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

// --- Abas de segmentos ---
const tabs = document.querySelectorAll(".cases__tab");
const panels = document.querySelectorAll(".cases__panel");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const idx = tab.dataset.tab;
    tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
    panels.forEach((p) => p.classList.toggle("is-active", p.dataset.panel === idx));
  });
});

// --- Animação "planta generativa" no hero ---
(function blueprint() {
  const canvas = document.getElementById("blueprint");
  if (!canvas || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  let w, h, dpr, points;

  const COUNT = 70;
  const LINK = 150;
  const accent = "79,125,255"; // azul da marca

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
  }
  function seed() {
    points = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.6, pulse: Math.random() * Math.PI * 2,
    }));
  }
  function frame() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < points.length; i++) {
      const a = points[i];
      a.x += a.vx; a.y += a.vy;
      if (a.x < 0 || a.x > w) a.vx *= -1;
      if (a.y < 0 || a.y > h) a.vy *= -1;
      for (let j = i + 1; j < points.length; j++) {
        const b = points[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < LINK) {
          ctx.strokeStyle = `rgba(${accent},${(1 - dist / LINK) * 0.22})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    const t = performance.now() * 0.002;
    for (const p of points) {
      const glow = 0.5 + 0.5 * Math.sin(p.pulse + t);
      ctx.fillStyle = `rgba(${accent},${0.35 + glow * 0.4})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r + glow * 0.8, 0, Math.PI * 2); ctx.fill();
    }
    requestAnimationFrame(frame);
  }
  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(frame);
})();
