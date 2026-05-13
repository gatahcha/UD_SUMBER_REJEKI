const ACTIVE =
  "bg-primary-container text-on-primary-container px-6 py-2 font-headline-sm uppercase border border-primary transition-all hover:brightness-110";
const IDLE =
  "bg-surface-container text-on-surface-variant px-6 py-2 font-headline-sm uppercase border border-border hover:border-primary hover:text-primary transition-all";

export function bindGalleryFilterBar() {
  if (document.body.dataset.sitePage !== "gallery") return;

  const toolbar = document.querySelector("main section .flex.flex-wrap.gap-2");
  if (!toolbar) return;

  const tabs = [...toolbar.querySelectorAll("button[data-gallery-filter]")];
  if (!tabs.length) return;

  const items = [
    ...document.querySelectorAll(".masonry-grid [data-gallery-category]"),
  ];

  let activeSlug = "all";

  function applyFilter(slug) {
    activeSlug = slug;
    items.forEach((el) => {
      const cats = String(el.dataset.galleryCategory || "").split(/\s+/);
    const visible =
      slug === "all" ||
      cats.some((c) => c && c.trim() === slug);
      el.style.display = visible ? "" : "none";
    });

    tabs.forEach((btn) => {
      const here = btn.dataset.galleryFilter === activeSlug;
      btn.className = here ? ACTIVE : IDLE;
      btn.setAttribute("aria-selected", here ? "true" : "false");
    });
  }

  tabs.forEach((btn) => {
    btn.type = "button";
    btn.addEventListener("click", () =>
      applyFilter(btn.dataset.galleryFilter || "all"),
    );
  });

  applyFilter("all");

  /** Re-highlight when translations replace button labels without changing slug */
  window.addEventListener("site:langchange", () =>
    applyFilter(activeSlug),
  );
}
