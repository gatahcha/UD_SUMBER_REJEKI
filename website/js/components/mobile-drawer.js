import { NAV_CONFIG, navLabel, slugFromPageDataset } from "../routes.js";
import { getLang } from "../locale-store.js";

const SHEET_ID = "site-mobile-nav-sheet";

function ensureMenuToggle() {
  let btn = document.querySelector("header button.md\\:hidden");
  if (btn) return btn;

  const headerInner =
    document.querySelector("header > div.flex.justify-between") ||
    document.querySelector("header > nav");
  const langBtn = headerInner?.querySelector(".site-lang-toggle");

  let slot =
    langBtn ||
    [...(headerInner?.querySelectorAll("div") || [])].find(
      (el) =>
        typeof el?.textContent === "string" &&
        (el.textContent.includes("ID | EN") ||
          el.textContent.includes("ID|EN")),
    ) ||
    headerInner?.lastElementChild ||
    null;

  if (!headerInner || !slot) return null;

  btn = document.createElement("button");
  btn.type = "button";
  btn.className = "md:hidden text-primary px-2 flex items-center";
  btn.setAttribute("aria-expanded", "false");
  btn.setAttribute("aria-controls", SHEET_ID);
  btn.innerHTML =
    '<span class="material-symbols-outlined" aria-hidden="true">menu</span>';
  btn.title = "Open menu";
  slot.before(btn);
  return btn;
}

export function translateMobileDrawer(loc = getLang()) {
  const sheet = document.getElementById(SHEET_ID);
  if (!sheet) return;
  const lc = loc === "en" ? "en" : "id";
  const anchors = [...sheet.querySelectorAll("nav a[data-nav-slug]")];
  if (!anchors.length) return;
  anchors.forEach((a) => {
    const slug = a.dataset.navSlug;
    if (!slug) return;
    const row = NAV_CONFIG.find((n) => n.slug === slug);
    if (!row) return;
    a.href = row.href;
    a.textContent = navLabel(slug, lc);
    const here = slugFromPageDataset() === slug;
    a.className = here
      ? "font-display-lg text-headline-sm uppercase tracking-wide py-3 border-l-4 border-primary pl-4 text-primary bg-surface-container/40"
      : "font-display-lg text-headline-sm uppercase tracking-wide py-3 border-b border-outline-variant text-on-surface hover:text-primary pl-4";
  });
}

function buildDrawer(toggle) {
  const existing = document.getElementById(SHEET_ID);
  const existingBackdrop = document.getElementById(`${SHEET_ID}-backdrop`);
  if (existing && existingBackdrop) {
    function close() {
      existingBackdrop.hidden = true;
      existing.hidden = true;
      existingBackdrop.classList.remove("opacity-100", "pointer-events-auto");
      existing.classList.add("translate-x-full");
      toggle?.setAttribute("aria-expanded", "false");
    }
    function open() {
      existingBackdrop.hidden = false;
      existing.hidden = false;
      requestAnimationFrame(() => {
        existingBackdrop.classList.add("opacity-100", "pointer-events-auto");
        existing.classList.remove("translate-x-full");
      });
      toggle?.setAttribute("aria-expanded", "true");
    }
    translateMobileDrawer(getLang());
    return { open, close };
  }

  const backdrop = document.createElement("div");
  backdrop.id = `${SHEET_ID}-backdrop`;
  backdrop.hidden = true;
  backdrop.className =
    "fixed inset-0 z-[60] bg-black/70 opacity-0 pointer-events-none transition-opacity duration-200";

  const sheet = document.createElement("div");
  sheet.id = SHEET_ID;
  sheet.hidden = true;
  sheet.setAttribute("role", "dialog");
  sheet.setAttribute("aria-modal", "true");
  sheet.setAttribute("aria-label", "Site navigation");
  sheet.className =
    "fixed inset-y-0 right-0 z-[70] w-[min(320px,100vw)] translate-x-full bg-surface border-l border-outline-variant shadow-2xl transition-transform duration-300 flex flex-col";

  sheet.innerHTML = `
    <div class="flex justify-between items-center h-16 px-4 border-b border-outline-variant">
      <span class="font-display-lg text-headline-sm text-primary uppercase tracking-widest">MENU</span>
      <button type="button" class="text-primary p-2 rounded hover:bg-card-bg transition-colors" data-site-close-sheet aria-label="Close menu">
        <span class="material-symbols-outlined" aria-hidden="true">close</span>
      </button>
    </div>
    <nav class="flex flex-col p-4 gap-1" data-site-sheet-links></nav>
  `;

  const navRoot = sheet.querySelector("[data-site-sheet-links]");

  NAV_CONFIG.forEach((rowCfg) => {
    const row = document.createElement("a");
    row.dataset.navSlug = rowCfg.slug;
    row.href = rowCfg.href;
    row.textContent = navLabel(rowCfg.slug, getLang() === "en" ? "en" : "id");
    const here = slugFromPageDataset() === rowCfg.slug;
    row.className = here
      ? "font-display-lg text-headline-sm uppercase tracking-wide py-3 border-l-4 border-primary pl-4 text-primary bg-surface-container/40"
      : "font-display-lg text-headline-sm uppercase tracking-wide py-3 border-b border-outline-variant text-on-surface hover:text-primary pl-4";
    row.addEventListener("click", () => queueMicrotask(close));
    navRoot.appendChild(row);
  });

  function close() {
    backdrop.hidden = true;
    sheet.hidden = true;
    backdrop.classList.remove("opacity-100", "pointer-events-auto");
    sheet.classList.add("translate-x-full");
    toggle?.setAttribute("aria-expanded", "false");
  }

  function open() {
    backdrop.hidden = false;
    sheet.hidden = false;
    requestAnimationFrame(() => {
      backdrop.classList.add("opacity-100", "pointer-events-auto");
      sheet.classList.remove("translate-x-full");
    });
    toggle?.setAttribute("aria-expanded", "true");
  }

  backdrop.addEventListener("click", close);
  sheet.querySelector("[data-site-close-sheet]")?.addEventListener(
    "click",
    close,
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !sheet.hidden) close();
  });

  document.body.append(backdrop, sheet);
  translateMobileDrawer(getLang());
  return { open, close, backdrop, sheet };
}

export function bindMobileDrawer() {
  const toggle = ensureMenuToggle();
  if (!toggle) return null;

  buildDrawer(toggle);

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    let sheetOk = document.getElementById(SHEET_ID);
    if (!sheetOk) return;

    const backdropEl = document.getElementById(`${SHEET_ID}-backdrop`);

    function close() {
      if (!backdropEl || !sheetOk) return;
      backdropEl.hidden = true;
      sheetOk.hidden = true;
      backdropEl.classList.remove("opacity-100", "pointer-events-auto");
      sheetOk.classList.add("translate-x-full");
      toggle.setAttribute("aria-expanded", "false");
    }

    function open() {
      if (!backdropEl || !sheetOk) return;
      backdropEl.hidden = false;
      sheetOk.hidden = false;
      requestAnimationFrame(() => {
        backdropEl.classList.add("opacity-100", "pointer-events-auto");
        sheetOk.classList.remove("translate-x-full");
      });
      toggle.setAttribute("aria-expanded", "true");
    }

    expanded ? close() : open();
  });

  return {};
}
