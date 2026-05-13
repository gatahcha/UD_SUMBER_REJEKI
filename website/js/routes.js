/** Top-level routes with bilingual chrome labels */
export const NAV_CONFIG = Object.freeze([
  {
    slug: "home",
    href: "index.html",
    labels: { id: "Beranda", en: "Home" },
  },
  {
    slug: "about",
    href: "about.html",
    labels: { id: "Tentang", en: "About" },
  },
  {
    slug: "services",
    href: "services.html",
    labels: { id: "Layanan", en: "Services" },
  },
  {
    slug: "gallery",
    href: "gallery.html",
    labels: { id: "Galeri", en: "Gallery" },
  },
  {
    slug: "contact",
    href: "contact.html",
    labels: { id: "Kontak", en: "Contact" },
  },
]);

export function navLabel(slug, lang) {
  const row = NAV_CONFIG.find((n) => n.slug === slug);
  if (!row) return slug;
  return row.labels[lang] || row.labels.en;
}

export function slugFromNavText(txt) {
  const t = (txt || "").trim();
  return NAV_CONFIG.find(
    (n) => n.labels.en === t || n.labels.id === t,
  )?.slug;
}

export function slugFromPageDataset() {
  return document.body?.dataset.sitePage || "home";
}
