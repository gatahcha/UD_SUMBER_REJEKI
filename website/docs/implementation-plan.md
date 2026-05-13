implementation.md
UD Sumber Rejeki — Introductory Website
Prepared by VARRO · Web Strategy Consultant
01 · PROJECT OVERVIEW
Field Detail Store Name UD Sumber Rejeki Business Type Car Variation & Accessories Store (non-ecommerce) Country Indonesia Primary Goal Introductory website — establish credibility online Primary CTA Contact via WhatsApp Target Audience Serious car modifiers (any age) Languages Bahasa Indonesia + English (bilingual)
02 · SERVICES (Finalized)
# Service (Bahasa) Service (English) 1 Jasa Poles Kaca Mobil Car Glass Polishing Service 2 Jual Beli Kaca Spion & Stoplamp Berbagai Mobil Buy & Sell Side Mirrors & Stoplamps 3 Interior Bekas Mobil Berbagai Merek Used Car Interior Parts (Multi-Brand) 4 Pasang Audio Car Audio Installation 5 Accessories Interior dan Exterior Interior & Exterior Accessories
03 · SITE ARCHITECTURE
Pages (5 total)
/               → Home
/about          → About
/services       → Services
/gallery        → Gallery / Portfolio
/contact        → Contact

Page-by-Page Breakdown
HOME /
Purpose: First impression. Capture attention in under 3 seconds.
Sections:
Hero
Full-screen background: best finished build photo
Store name: UD Sumber Rejeki
Tagline (bilingual): e.g., "Modifikasi Serius, Hasil Nyata" / "Serious Mods, Real Results"
Single CTA button: 💬 Hubungi via WhatsApp / Contact via WhatsApp
Services Snapshot
5 service cards with icons — no prices, just names and a short descriptor
Link to full /services page
Why Choose Us
2–3 trust pillars: Experience · Competitive Price · Quality Parts
Keep it short — serious modifiers skim
Gallery Teaser
4–6 thumbnail previews of finished builds
CTA: "Lihat Semua Hasil Kerja" / "See All Our Work"
Footer CTA Strip
WhatsApp button + address + social links

ABOUT /about
Purpose: Build trust and human connection.
Sections:
Our Story
Short paragraph about the store's history and founding
Emphasize years of experience and reputation
Our Values
3 pillars with icons: Quality · Honesty · Passion for Cars
Team / Workshop Photo (if available)

SERVICES /services
Purpose: Show the full scope of what the store does — not a price list, a showcase.
Sections: One dedicated section per service:
Poles Kaca Mobil — Before/after photos, what the process involves
Kaca Spion & Stoplamp — Variety of brands/models available, buy & sell explained
Interior Bekas — Range of car brands covered, quality assurance note
Pasang Audio — What's installable, types of systems handled
Accessories Interior & Exterior — Range overview, examples
Each section ends with a WhatsApp CTA specific to that service.
Example: "Tanya soal poles kaca? Chat kami sekarang."

GALLERY /gallery
Purpose: The single most powerful trust signal for serious modifiers.
Sections:
Filter tabs: All · Exterior · Interior · Audio · Accessories
Masonry grid layout — Photos of finished builds
Each card shows: Car model (if shareable) + service type
Lightbox on click — Full-size view
⚠️ NOTE: Photos to be provided by store owner before implementation. Placeholder assets will be used during development.

CONTACT /contact
Purpose: Remove all friction from reaching out.
Sections:
WhatsApp button — Big, prominent, above everything
Store Address — Full address (agreed to be public)
Google Maps embed — Interactive, pinned to exact location
Operating Hours
Instagram link

04 · VISUAL DESIGN SYSTEM
Theme
Dark & Aggressive — Inspired by carbon fiber, matte finishes, and the workshop floor.
Color Palette
Role Color Hex Background Near-black #0A0A0A Surface Deep charcoal #141414 Card background Dark grey #1C1C1E Border / Divider Subtle grey #2A2A2A Primary Accent Burnt orange / Amber #E85D04 Text Primary Off-white #F0EDE8 Text Secondary Muted grey #9A9A9A
⚠️ Accent color (burnt orange) to be confirmed with store owner. Alternatives: Electric red #FF2D20 · Steel blue #1E6FBF
Typography
Role Font Weight Display/Hero Bebas Neue or Barlow Condensed 700–900 Body Outfit or DM Sans 400–500 UI Labels Same as body 600
Fonts loaded via Google Fonts CDN.
Textures & Effects
Subtle carbon fiber texture overlay on hero section (CSS background pattern — no image needed)
Very slight grain noise overlay on dark surfaces
Sharp drop shadows using accent color on key CTA elements
No gradients that look "techy" or purple — this is a workshop, not a SaaS product
Imagery Rules
Real photos only — no stock cars
Slight dark vignette on hero image
Gallery images: no heavy filters, let the work speak
No watermarks on website (different from Instagram)

05 · TECHNICAL STACK
Layer Choice Reason Structure HTML5 + CSS3 + Vanilla JS Fast, no framework overhead Styling CSS custom properties + Flexbox/Grid Maintainable, no build tools needed Icons Lucide Icons or Phosphor Icons (CDN) Lightweight, consistent Fonts Google Fonts (CDN) Free, fast Maps Google Maps Embed API No API key required for basic embed WhatsApp https://wa.me/[number] deep link Works on all devices, no SDK needed Hosting TBD — Vercel / Netlify / cPanel (shared) Static site, any host works Language Static bilingual (toggle button) JS-based text swap, no backend needed
⚠️ No CMS, no database, no backend required for this phase. This is a fully static website.

06 · BILINGUAL IMPLEMENTATION STRATEGY
Approach: JavaScript language toggle stored in localStorage
Default language on load: Bahasa Indonesia
Toggle button in navbar: 🇮🇩 ID | EN 🇺🇸
All text stored in a lang.js config file:
// Example structure
const translations = {
  id: {
    hero_tagline: "Modifikasi Serius, Hasil Nyata",
    cta_whatsapp: "Hubungi via WhatsApp",
    nav_home: "Beranda",
    // ...
  },
  en: {
    hero_tagline: "Serious Mods, Real Results",
    cta_whatsapp: "Contact via WhatsApp",
    nav_home: "Home",
    // ...
  }
}
This keeps translation maintainable without a library or backend.

07 · MOBILE-FIRST RULES
All layouts designed for 375px width first, then scaled up
WhatsApp button: sticky floating button on mobile (bottom-right)
Navigation: hamburger menu on mobile, full nav on desktop
Gallery grid: 1 column mobile → 2 columns tablet → 3 columns desktop
Hero text: large on desktop, scaled down to not overflow on mobile
All tap targets: minimum 48px height

08 · WHATSAPP CTA STRATEGY
WhatsApp is the conversion endpoint. It appears in 6 places:
Location Button Label (ID) Hero section Hubungi via WhatsApp Navbar (desktop) WhatsApp (icon only) Each service section Tanya Sekarang Gallery page Mau Hasil Serupa? Chat Kami Contact page Mulai Chat Sticky mobile button Icon only (green WhatsApp)
Each button links to: https://wa.me/[number]?text=[pre-filled message per service]
Example pre-fill for poles kaca: Halo, saya ingin tanya tentang jasa poles kaca mobil.

09 · SEO BASICS (Indonesia-focused)
Even for an introductory site, these must be in place:
<title> tags per page — include city name
<meta description> per page in Bahasa Indonesia
<h1> only once per page
Image alt attributes — describe what's in the photo
Google Search Console submission after launch
Google Business Profile — highly recommended as a separate action (not on the website itself but critical for local discovery)

10 · IMPLEMENTATION PHASES
Phase 1 — Structure & Shell
[ ] Set up file structure (index.html, /about, /services, /gallery, /contact)
[ ] Build navigation (desktop + mobile hamburger)
[ ] Define CSS variables (colors, fonts, spacing)
[ ] Build Footer
Phase 2 — Page by Page
[ ] Home page (hero → services snapshot → trust pillars → gallery teaser)
[ ] Services page (5 sections)
[ ] About page
[ ] Gallery page (with placeholder images)
[ ] Contact page (WhatsApp + Maps embed)
Phase 3 — Features
[ ] Language toggle (ID/EN)
[ ] Sticky WhatsApp button (mobile)
[ ] Gallery lightbox
[ ] WhatsApp pre-filled message links
Phase 4 — Content & Polish
[ ] Replace placeholder images with real photos
[ ] Fill in address, WhatsApp number, Instagram handle
[ ] Final copy review (bilingual)
[ ] Mobile responsiveness QA
Phase 5 — Launch
[ ] Deploy to hosting
[ ] Submit to Google Search Console
[ ] Link website in Instagram bio
[ ] Link website in WhatsApp Business profile

11 · ASSETS PENDING FROM STORE OWNER
These are required before Phase 4 can be completed.
Asset Status Notes Store photos / builds ⏳ Later Minimum 12 photos recommended for gallery Short store paragraph ⏳ Later For /about page — 3–5 sentences WhatsApp number ⏳ Later Business number preferred Instagram handle ⏳ Later For footer + social link Full store address ⏳ Later For /contact + Maps embed Operating hours ⏳ Later For /contact page Accent color decision ⏳ Decide Burnt orange / Red / Steel blue

12 · OUT OF SCOPE (This Phase)
The following are explicitly not part of this build:
❌ Shopping cart or product listings with prices
❌ Payment gateway
❌ Customer login / accounts
❌ Live chat widget
❌ Blog or news section
❌ Online booking system (can be added in Phase 2 later)
❌ Backend / database
Document version: 1.0 | Prepared by VARRO Strategy Ready for implementation upon owner confirmation.