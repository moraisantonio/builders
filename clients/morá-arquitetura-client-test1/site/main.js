/*
  Morá Arquitetura — interações.
  Vanilla JS, sem dependências. Animações leves e suaves (reveal no scroll,
  nav que reage ao scroll, contagem dos números, parallax discreto no hero).
*/

// --- WhatsApp ---
// Número ainda não definido. Quando a Morá passar o número, preencha aqui
// (só os dígitos, ex: "5511999999999") e os botões viram link de WhatsApp.
const WHATSAPP_NUMERO = "";
const WHATSAPP_MSG = "Olá! Vim pelo site e quero conversar sobre meu apartamento.";
if (WHATSAPP_NUMERO) {
  const waUrl = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = waUrl;
    a.target = "_blank";
    a.rel = "noopener";
  });
}
// Sem número: os botões mantêm href="#contato" (rolam até a seção de contato).

// --- Navbar: estado "scrolled" ---
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
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

// --- Reveal no scroll (fade-up + reveal de imagem) ---
const revealEls = document.querySelectorAll("[data-reveal], [data-reveal-img]");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
);
revealEls.forEach((el) => io.observe(el));

// --- Contagem dos números ao entrar na tela ---
const counters = document.querySelectorAll(".stat__num[data-count]");
const countIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || "";
      const dur = 1400;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countIO.unobserve(el);
    });
  },
  { threshold: 0.6 }
);
counters.forEach((el) => countIO.observe(el));

// --- Parallax discreto na imagem do hero ---
const heroMedia = document.querySelector(".hero__media");
if (heroMedia && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 600);
        heroMedia.style.transform = `translateY(${y * 0.06}px)`;
        ticking = false;
      });
    },
    { passive: true }
  );
}
