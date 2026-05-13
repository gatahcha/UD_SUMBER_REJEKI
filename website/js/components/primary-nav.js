import { NAV_CONFIG, navLabel, slugFromPageDataset } from "../routes.js";
import { getLang } from "../locale-store.js";

const NAV_TEXT = new Set(
  NAV_CONFIG.flatMap((row) => [row.labels.en, row.labels.id]),
);

export function bindPrimaryNavigation() {
  translateHeaderNav(getLang());
}

/** @returns {HTMLAnchorElement[]} */
export function collectHeaderNavAnchors() {
  const header = document.querySelector("header");
  if (!header) return [];
  return [...header.querySelectorAll("a")].filter((a) =>
    NAV_TEXT.has(a.textContent.trim()),
  );
}

export function translateHeaderNav(loc = getLang()) {
  const lc = loc === "en" ? "en" : "id";
  const nodes = [...collectHeaderNavAnchors()].slice(0, NAV_CONFIG.length);

  nodes.forEach((a, idx) => {
    const byText = NAV_CONFIG.find(
      (n) =>
        n.labels.en === a.textContent.trim() ||
        n.labels.id === a.textContent.trim(),
    );
    const slug = byText?.slug ?? NAV_CONFIG[idx]?.slug;
    if (!slug) return;

    const row = NAV_CONFIG.find((x) => x.slug === slug);
    if (!row) return;

    a.dataset.navSlug = slug;
    a.setAttribute("href", row.href);
    a.textContent = navLabel(slug, lc);

    const here = slugFromPageDataset() === slug;
    const ACTIVE =
      "text-primary font-body-md font-bold border-b-2 border-primary pb-1 transition-colors duration-200";
    const IDLE =
      "text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200";
    const extra = [...a.classList].filter((c) =>
      /^(active:|transition-transform|underline)$/i.test(c),
    );

    const core = here ? ACTIVE : IDLE;
    a.className = extra.length ? `${core} ${extra.join(" ")}` : core;
    if (here) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
}
