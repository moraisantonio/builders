/*
  Morá Arquitetura — interações. Vanilla JS, sem dependências.
  Nav, menu mobile, reveals no scroll, contadores, carrossel de
  depoimentos e acordeão de FAQ.
*/

// --- Nav scrolled + menu mobile ---
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const burger = document.getElementById("burger");
burger.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll(".nav__links a").forEach((a) =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

// --- Reveals ---
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }),
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
);
document.querySelectorAll("[data-reveal], [data-reveal-img]").forEach((el) => io.observe(el));

// --- Contadores (com prefixo/sufixo e separador pt-BR) ---
const countIO = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const pre = el.dataset.prefix || "";
    const suf = el.dataset.suffix || "";
    const dur = 1500, start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const val = Math.round(target * (1 - Math.pow(1 - p, 3)));
      el.textContent = pre + val.toLocaleString("pt-BR") + suf;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countIO.unobserve(el);
  }),
  { threshold: 0.6 }
);
document.querySelectorAll(".stat__n[data-count]").forEach((el) => countIO.observe(el));

// --- Carrossel de depoimentos ---
(function quotes() {
  const track = document.getElementById("qtrack");
  if (!track) return;
  const prev = document.getElementById("qprev");
  const next = document.getElementById("qnext");
  const cards = [...track.children];
  let i = 0;
  const step = () => {
    const a = cards[0].getBoundingClientRect();
    const b = cards[1] ? cards[1].getBoundingClientRect() : a;
    return (cards[1] ? b.left - a.left : a.width);
  };
  const perView = () => (window.innerWidth <= 900 ? 1 : 2);
  const maxI = () => Math.max(0, cards.length - perView());
  const go = () => { track.style.transform = `translateX(${-i * step()}px)`; };
  prev.addEventListener("click", () => { i = Math.max(0, i - 1); go(); });
  next.addEventListener("click", () => { i = Math.min(maxI(), i + 1); go(); });
  window.addEventListener("resize", () => { i = Math.min(i, maxI()); go(); });
})();

// --- FAQ acordeão ---
document.querySelectorAll(".faq__item").forEach((item) => {
  const q = item.querySelector(".faq__q");
  const a = item.querySelector(".faq__a");
  q.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    // fecha os outros
    document.querySelectorAll(".faq__item.open").forEach((other) => {
      if (other !== item) { other.classList.remove("open"); other.querySelector(".faq__a").style.maxHeight = null; }
    });
    item.classList.toggle("open", !isOpen);
    a.style.maxHeight = isOpen ? null : a.scrollHeight + "px";
  });
});
