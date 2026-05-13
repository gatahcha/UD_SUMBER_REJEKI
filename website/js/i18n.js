import { STRINGS } from "./translations.js";
import { resolvePageString } from "./page-strings.js";
import { getLang, setLang } from "./locale-store.js";
import { translateHeaderNav } from "./components/primary-nav.js";
import { translateMobileDrawer } from "./components/mobile-drawer.js";

export function normalizeLang(code) {
  return code === "en" ? "en" : "id";
}

function translateFooterTitles(loc) {
  const l = normalizeLang(loc);
  document.querySelectorAll("[data-i18n-maps-heading]").forEach((h) => {
    h.textContent = STRINGS[l].footer.mapsTitle;
  });

  document.querySelectorAll("footer h4").forEach((h) => {
    const raw = (h.textContent || "").trim();
    if (/navigation|navigasi/i.test(raw))
      h.textContent = STRINGS[l].footer.navigation;
    else if (/quick\s*links|link\s*cepat/i.test(raw))
      h.textContent = STRINGS[l].footer.quickLinks;
    else if (/follow\s*us|ikuti\s*kami/i.test(raw))
      h.textContent = STRINGS[l].footer.followUs;
    else if (/find\s*us|temukan\s*kami/i.test(raw))
      h.textContent = STRINGS[l].footer.findUs;
    else if (/^connect$/i.test(raw) || /^terhubung$/i.test(raw))
      h.textContent = STRINGS[l].footer.connect;
  });

  document.querySelectorAll("footer ul a").forEach((a) => {
    const t = (a.textContent || "").trim();
    if (/Services\s*Catalog|Katalog\s*Layanan/i.test(t))
      a.textContent = l === "id" ? "Katalog Layanan" : "Services Catalog";
  });
}

function translateGalleryFilters(loc) {
  if (document.body.dataset.sitePage !== "gallery") return;
  const l = normalizeLang(loc);
  const s = STRINGS[l].gallery;
  const toolbar = document.querySelector("main section .flex.flex-wrap.gap-2");
  if (!toolbar) return;
  /** @type {Record<string,string>} */
  const mapKey = {
    all: s.filterAll,
    exterior: s.filterExterior,
    interior: s.filterInterior,
    audio: s.filterAudio,
    accessories: s.filterAccessories,
  };
  [...toolbar.querySelectorAll("button[data-gallery-filter]")].forEach((btn) => {
    const k = btn.dataset.galleryFilter || "all";
    if (mapKey[k]) btn.textContent = mapKey[k];
  });
}

/** Apply `[data-i18n]` / `[data-i18n-html]` from `page-strings.js` (full page copy). */
export function applyPageContentI18n(loc) {
  const l = normalizeLang(loc);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;
    const t = resolvePageString(l, key);
    if (t !== undefined) el.textContent = t;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (!key) return;
    const t = resolvePageString(l, key);
    if (t !== undefined) el.innerHTML = t;
  });
}

export function repaintChrome(loc) {
  const l = normalizeLang(loc);
  translateHeaderNav(l);
  translateMobileDrawer(l);
  translateFooterTitles(l);
  translateGalleryFilters(l);
  applyPageContentI18n(l);
}

export function bindLanguageSwitcher() {
  document.documentElement.lang = getLang() === "en" ? "en" : "id";

  document.querySelectorAll(".site-lang-toggle").forEach((btn) => {
    if (btn.dataset.siteI18nWired === "true") return;
    btn.dataset.siteI18nWired = "true";
    btn.setAttribute(
      "aria-pressed",
      getLang() === "en" ? "true" : "false",
    );
    btn.addEventListener("click", () => {
      const next = getLang() === "id" ? "en" : "id";
      setLang(next);
      document.documentElement.lang = next === "en" ? "en" : "id";
      btn.setAttribute("aria-pressed", next === "en" ? "true" : "false");
      repaintChrome(next);
      window.dispatchEvent(new CustomEvent("site:langchange", { detail: { lang: next } }));
    });
  });
}
