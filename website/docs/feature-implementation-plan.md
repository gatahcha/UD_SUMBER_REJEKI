# UD Sumber Rejeki — feature implementation notes

Scope covered in-repo (May 2026):

1. **Brand colors (white + WhatsApp green + Minion yellow)**  
   - `website/scripts/patch_tailwind_theme.py` batches all exported HTML Tailwind palettes to a light, green-forward theme and adds semantic tokens `minion` / `whatsapp`.  
   - Re-run after re-importing Stitch HTML:  
     `python3 website/scripts/patch_tailwind_theme.py`  
   - Gallery eyebrow accent uses Tailwind color `text-minion` (`#FFE135`).

2. **Google Maps in the footer**  
   - `website/js/components/footer-widgets.js` inserts an embed (no API key) built from `website/data/store-info.json` (`contact.address`).  
   - Heading string is wired into `website/js/i18n.js` for ID/EN.

3. **Indonesian / English**  
   - Default language is **Bahasa Indonesia** (`website/js/locale-store.js`, `localStorage` key `udsr-ui-lang`).  
   - Navbar + mobile drawer labels, footer headings, maps title, gallery filter chips, and the “Services Catalog” quick link toggle between ID/EN.  
   - **Body copy** stays as exported (many blocks are already bilingual inline); extend `website/js/translations.js` when you want full phrases driven by locale.

4. **TikTok**  
   - Uses `contact.socialMedia.tiktok` from `store-info.json`; `footer-widgets.js` ensures list / row / icon-strip links plus `contact-links.js` patches plain “TikTok” anchors.

5. **Gallery filters**  
   - Each masonry card has `data-gallery-category="…"` (`exterior`, `interior`, `audio`, `accessories`, or combos like `exterior accessories`).  
   - Buttons expose `data-gallery-filter` and `website/js/components/gallery-filter-bar.js` toggles visibility; UI labels stay synced on language toggle.
