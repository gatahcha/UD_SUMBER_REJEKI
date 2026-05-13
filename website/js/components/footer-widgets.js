function composeAddress(contact) {
  const a = contact?.address || {};
  return [a.street, a.city, `${a.province || ""} ${a.postalCode || ""}`.trim(), a.country]
    .filter(Boolean)
    .join(", ");
}

function mapsSrc(query) {
  const q = encodeURIComponent(query.trim());
  return `https://maps.google.com/maps?q=${q}&z=15&t=m&hl=id&output=embed&iwloc=near`;
}

async function fetchStoreSpec() {
  try {
    const res = await fetch(
      new URL("../data/store-info.json", import.meta.url),
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

/** Map block + TikTok quick link appended once per page footer. */
export async function enhanceFooterWidgets() {
  const spec = await fetchStoreSpec();
  if (!spec?.contact?.address) return;

  document.querySelectorAll("footer").forEach((footer) => {
    if (footer.dataset.siteWidgets === "1") return;

    insertMapFooter(footer, composeAddress(spec.contact), spec);
    ensureTiktokLink(
      footer,
      spec.contact.socialMedia?.tiktok || "https://www.tiktok.com/@udsumberrejeki",
    );

    footer.dataset.siteWidgets = "1";
  });
}

function insertMapFooter(footer, addrLine, spec) {
  if (footer.querySelector("[data-site-maps-root]")) return;

  const copyright = [...footer.children].find(
    (child) =>
      child instanceof HTMLElement && /\bborder-t\b/.test(child.className || ""),
  );


  const block = document.createElement("section");
  block.dataset.siteMapsRoot = "true";
  block.dataset.siteMaps = "true";
  block.className =
    "max-w-7xl mx-auto px-margin-desktop px-margin-mobile md:px-margin-desktop mt-10";

  block.innerHTML = `
    <h5 class="font-headline-sm uppercase text-primary mb-3" data-i18n-maps-heading>Find us on Maps</h5>
    <div class="w-full overflow-hidden border border-outline-variant rounded-lg shadow-sm bg-card-bg">
      <iframe class="w-full h-64 lg:h-80 border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        title="Google Maps — UD Sumber Rejeki"></iframe>
    </div>
  `.trim();

  const iframe = block.querySelector("iframe");
  if (iframe) {
    const embed = spec?.contact?.maps?.embedSrc;
    iframe.src = embed && String(embed).startsWith("https://")
      ? embed
      : mapsSrc(addrLine);
  }

  if (copyright) footer.insertBefore(block, copyright);
  else footer.appendChild(block);
}

function ensureTiktokLink(footer, href) {
  if (!/^https:\/\//.test(String(href))) return;

  [...footer.querySelectorAll("a")].forEach((a) => {
    if (/^tiktok$/i.test((a.textContent || "").trim())) {
      a.href = href;
      a.rel = "noopener noreferrer";
      a.target = "_blank";
    }
  });

  const ul =
    footer.querySelector("ul.space-y-3") || footer.querySelector("ul");

  const hasTikLi = [...footer.querySelectorAll("ul a")].some((a) =>
    /^tiktok$/i.test((a.textContent || "").trim()),
  );

  if (ul && !hasTikLi) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.dataset.social = "tiktok-quick";
    a.className =
      "text-on-surface-variant font-body-md hover:text-primary underline decoration-primary transition-opacity";
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = "TikTok";
    li.appendChild(a);
    ul.appendChild(li);
  }

  const rowFlex = [...footer.querySelectorAll("div.flex")].find(
    (div) =>
      /\bInstagram\b|\bWhatsApp\b/i.test(div.innerText || "") &&
      !div.querySelector(".material-symbols-outlined"),
  );

  if (
    rowFlex &&
    ![...rowFlex.querySelectorAll("a")].some((a) =>
      /tiktok/i.test(a.textContent || ""),
    )
  ) {
    const a = document.createElement("a");
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.dataset.social = "tiktok-footer-link";
    a.className =
      "text-on-surface-variant hover:text-primary underline decoration-primary font-body-md transition-opacity hover:opacity-80";
    a.textContent = "TikTok";
    rowFlex.appendChild(a);
  }

  /** index-style icons row → add TikTok chip */
  const iconChipRow = [...footer.querySelectorAll("div.flex.gap-4")].find(
    (div) =>
      [...div.querySelectorAll(".material-symbols-outlined")].some((ic) =>
        /public|photo_camera|map/i.test(ic.textContent || ""),
      ),
  );
  if (
    iconChipRow &&
    !iconChipRow.querySelector("[data-social='tiktok-icon']")
  ) {
    const a = document.createElement("a");
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.dataset.social = "tiktok-icon";
    a.className =
      "text-on-surface-variant hover:text-primary transition-opacity flex items-center gap-1 font-label-bold uppercase text-xs tracking-wider";
    a.innerHTML =
      '<span class="material-symbols-outlined text-base" aria-hidden="true">music_note</span>TikTok';
    iconChipRow.appendChild(a);
  }
}
