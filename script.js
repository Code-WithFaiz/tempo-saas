// ============================================
// PULSE BARS — hero dashboard signature visual
// ============================================
function renderPulseBars() {
  const container = document.getElementById("pulseBars");
  if (!container) return;
  const count = 24;
  for (let i = 0; i < count; i++) {
    const bar = document.createElement("div");
    bar.className = "pulse-bar";
    bar.style.animationDelay = `${(i * 0.08).toFixed(2)}s`;
    container.appendChild(bar);
  }
}

// ============================================
// FAQ DATA + accordion
// ============================================
const FAQS = [
  { q: "Do I need to change how I use my calendar?", a: "No — Tempo reads your existing calendar as-is. There's nothing to migrate or reformat." },
  { q: "What if my schedule changes a lot?", a: "Tempo re-reads your rhythm continuously, so it adapts within a few days of any real change in your routine." },
  { q: "Is my calendar data private?", a: "Yes. Your schedule data is used only to power your own rhythm detection — it's never shared or sold." },
  { q: "Can I cancel anytime?", a: "Yes, Pro and Team plans are month-to-month with no lock-in. Cancel from your account settings anytime." }
];

function renderFaq() {
  const list = document.getElementById("faqList");
  if (!list) return;
  list.innerHTML = FAQS.map((item, i) => `
    <div class="faq-item" data-index="${i}">
      <button class="faq-question">
        <span>${item.q}</span>
        <span class="plus">+</span>
      </button>
      <div class="faq-answer"><p>${item.a}</p></div>
    </div>
  `).join("");

  list.querySelectorAll(".faq-item").forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      list.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });
}

// ============================================
// NAV
// ============================================
function initNav() {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 10);
  });

  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderPulseBars();
  renderFaq();
  initNav();
});
