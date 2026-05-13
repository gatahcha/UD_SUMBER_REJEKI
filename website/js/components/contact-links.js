function whatsappHref(phone) {
  const digitsOnly = phone.replace(/[^\d]/g, "");
  return `https://wa.me/${digitsOnly}`;
}

/** Canonical targets (used if fetch fails; matches `website/data/store-info.json`). */
const DEFAULT_CONTACT = {
  whatsappPhone: "+62 851-0004-1689",
  tiktok: "https://www.tiktok.com/@ud.sumber.rejeki.c",
  mapsShareUrl:
    "https://www.google.com/maps/search/?api=1&query=Jl.%20Kaca%20Piring%2C%20Gebang%20Tengah%2C%20Gebang%2C%20Kec.%20Patrang%2C%20Kabupaten%20Jember%2C%20Jawa%20Timur%2068117%2C%20Indonesia",
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=Jl.%20Kaca%20Piring%2C%20Gebang%20Tengah%2C%20Gebang%2C%20Kec.%20Patrang%2C%20Kabupaten%20Jember%2C%20Jawa%20Timur%2068117%2C%20Indonesia&z=15&t=m&hl=id&output=embed&iwloc=near",
};

function labelIsWhatsApp(text) {
  return /whatsapp/i.test(text);
}

function mergeContact(spec) {
  const c = spec?.contact ?? {};
  return {
    phone: {
      whatsapp: c.phone?.whatsapp ?? DEFAULT_CONTACT.whatsappPhone,
    },
    socialMedia: {
      instagram: c.socialMedia?.instagram,
      facebook: c.socialMedia?.facebook,
      tiktok: c.socialMedia?.tiktok ?? DEFAULT_CONTACT.tiktok,
    },
    maps: {
      shareUrl: c.maps?.shareUrl ?? DEFAULT_CONTACT.mapsShareUrl,
      embedSrc: c.maps?.embedSrc ?? DEFAULT_CONTACT.mapsEmbedSrc,
    },
  };
}

/** Wire WhatsApp / Instagram / TikTok / Maps URLs from `website/data/store-info.json` (with safe defaults). */
export async function hydrateContactLinks() {
  let spec = null;
  try {
    const res = await fetch(
      new URL("../data/store-info.json", import.meta.url),
    );
    if (res.ok) spec = await res.json();
  } catch {
    spec = null;
  }

  const contact = mergeContact(spec);
  const wa = whatsappHref(contact.phone.whatsapp);
  const igRaw = contact.socialMedia?.instagram;
  const ig = igRaw ? String(igRaw).trim() : "";
  const tik = String(contact.socialMedia?.tiktok || "").trim();
  const mapsShare = String(contact.maps?.shareUrl || "").trim();
  const mapsEmbed = String(contact.maps?.embedSrc || "").trim();

  if (mapsEmbed.startsWith("https://")) {
    document.querySelectorAll("iframe[data-store-map]").forEach((fr) => {
      fr.src = mapsEmbed;
      fr.title = fr.title || "Peta — UD Sumber Rejeki";
    });
  }

  if (mapsShare.startsWith("http")) {
    document.querySelectorAll("[data-store-maps-url]").forEach((el) => {
      if (!(el instanceof HTMLAnchorElement)) return;
      el.href = mapsShare;
      el.rel = "noopener noreferrer";
      el.target = "_blank";
    });
  }

  document.querySelectorAll('a[href*="wa.me"]').forEach((a) => {
    a.href = wa;
    a.rel = "noopener noreferrer";
    if (!a.target) a.target = "_blank";
  });

  document.querySelectorAll("a").forEach((a) => {
    const label = a.textContent.trim();
    const hrefEl = (a.getAttribute("href") || "").trim();

    const dest =
      ig &&
      /^instagram$/i.test(label) &&
      (!hrefEl || hrefEl.startsWith("#"))
        ? ig
        : null;

    const destWa =
      /^whatsapp$/i.test(label) && (!hrefEl || hrefEl.startsWith("#"))
        ? wa
        : null;

    const destFb =
      /^facebook$/i.test(label) && (!hrefEl || hrefEl.startsWith("#"))
        ? spec?.contact?.socialMedia?.facebook
        : null;

    const destTik =
      /^tiktok$/i.test(label) &&
      tik &&
      (!hrefEl || hrefEl === "#" || !/tiktok\.com/i.test(hrefEl))
        ? tik
        : null;

    const destMaps =
      mapsShare.startsWith("http") &&
      (/^(lokasi|location)$/i.test(label) ||
        /google\s*maps/i.test(label) ||
        /buka di google maps/i.test(label) ||
        /open in google maps/i.test(label)) &&
      (!hrefEl || hrefEl.startsWith("#"))
        ? mapsShare
        : null;

    const target = dest || destWa || destFb || destTik || destMaps;
    if (target && String(target).startsWith("http")) {
      a.href = target;
      a.rel = "noopener noreferrer";
      if (!a.target) a.target = "_blank";
    }
  });

  document.querySelectorAll("a").forEach((a) => {
    if (!labelIsWhatsApp(a.textContent || "")) return;
    const h = (a.getAttribute("href") || "").trim();
    const needsFix =
      !h ||
      h === "#" ||
      !/^https?:\/\//i.test(h) ||
      /^https?:\/\/wa\.me\/(your(link)?|yournumber|123456789)/i.test(h);
    if (needsFix) {
      a.href = wa;
      a.rel = "noopener noreferrer";
      if (!a.target) a.target = "_blank";
    }
  });

  document.querySelectorAll("button").forEach((btn) => {
    if (btn.dataset.siteWaBundled === "true") return;
    if (!labelIsWhatsApp(btn.textContent || "")) return;
    btn.dataset.siteWaBundled = "true";
    btn.addEventListener("click", () =>
      window.open(wa, "_blank", "noopener,noreferrer"),
    );
  });
}
