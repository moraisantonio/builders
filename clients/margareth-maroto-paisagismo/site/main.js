// Menu mobile. Sem framework — isto é um teste de home, não o site final.
const toggle = document.querySelector(".navbar__toggle");
const nav = document.querySelector(".navbar__nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const aberto = nav.dataset.aberto === "true";
    nav.dataset.aberto = String(!aberto);

    Object.assign(nav.style, {
      display: aberto ? "" : "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "18px",
      position: "absolute",
      top: "88px",
      right: "28px",
      background: "#16241c",
      border: "1px solid rgba(255,255,255,0.14)",
      padding: "24px",
      borderRadius: "14px",
    });
  });
}
