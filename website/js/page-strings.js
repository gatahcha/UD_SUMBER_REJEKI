/**
 * Bilingual page copy (Indonesian is the source / default).
 * Keys use dot paths: `home.heroTagline` → resolve under id|en.
 */

const SITE_ADDRESS_HTML =
  "Jl. Kaca Piring, Gebang Tengah, Gebang,<br/>Kec. Patrang, Kabupaten Jember, Jawa Timur 68117,<br/>Indonesia";

export const PAGE_STRINGS = Object.freeze({
  id: {
    site: {
      footerAddressHtml: SITE_ADDRESS_HTML,
      footerAddressHeading: "Alamat",
    },
    home: {
      heroTagline: "Modifikasi Serius, Hasil Nyata",
      ctaWa: "Hubungi via WhatsApp",
      ctaServices: "Lihat Layanan",
      pillar1Title: "Pengalaman",
      pillar1Body:
        "Tim profesional dengan pengalaman 15+ tahun di rekayasa otomotif kustom.",
      pillar2Title: "Harga Kompetitif",
      pillar2Body:
        "Hasil kelas atas tanpa mark-up agensi. Langsung tarif bengkel.",
      pillar3Title: "Suku Cadang Berkualitas",
      pillar3Body:
        "Hanya komponen asli atau teruji yang masuk ke lantai bengkel kami.",
      specializationTitle: "Spesialisasi Kami",
      specializationLead:
        "Pekerjaan presisi bagi Anda yang menuntut keunggulan — dari estetika hingga modifikasi interior, kami urus setiap detail.",
      svcPolesTitle: "Poles Kaca",
      svcPolesBody:
        "Menghilangkan goresan dan oksidasi agar pandangan jernih dan tampilan sempurna.",
      svcLampTitle: "Spion & Stoplamp",
      svcLampBody:
        "Solusi penerangan kustom dan upgrade spion elektronik untuk fungsi modern.",
      svcIntTitle: "Interior Bekas",
      svcIntBody:
        "Menyediakan dan merestorasi komponen interior bekas premium serta jok kulit.",
      svcAudioTitle: "Pasang Audio",
      svcAudioBody:
        "Integrasi sistem audio hi-fi dan peredam akustik bagi penggemar suara sejati.",
      svcAccTitle: "Aksesori",
      svcAccBody:
        "Aksesori performa dan estetika pilihan untuk setiap model dan penggemar mobil.",
      showcaseTitle: "Pameran Modifikasi",
      showcaseLink: "Galeri Lengkap",
      viewBuild: "Lihat Proyek",
      ctaEndTitle: "Siap ke level berikutnya?",
      ctaEndLead:
        "Mobil Anda adalah kanvas. Serahkan tekniknya pada kami — konsultasi modifikasi kustom bersama tim ahli.",
      ctaEndBtn: "Chat WhatsApp sekarang",
      footerBlurb:
        "Spesialis variasi mobil & aksesori performa tinggi. Presisi bengkel untuk setiap modifikasi sejak 2009.",
      footerFindAddress: SITE_ADDRESS_HTML,
      footerHours1: "Sen - Sab: 09:00 - 18:00",
      footerHours2: "Minggu: hanya dengan janji",
      footerRights: "© 2026 UD SUMBER REJEKI. HAK CIPTA DILINDUNGI.",
      catalogLink: "Katalog Layanan",
    },
    contact: {
      heroLine1: "Hubungi Kami",
      heroLine2: "para Ahli",
      heroLead:
        "Mulai dari upgrade performa, variasi interior, hingga detailing profesional — bengkel kami siap mengubah mobil Anda. WhatsApp atau kunjungi kami langsung.",
      btnWa: "Hubungi WhatsApp",
      locationTitle: "Lokasi",
      addressHtml:
        "JL. KACA PIRING, GEBANG TENGAH, GEBANG,<br/>KEC. PATRANG, KABUPATEN JEMBER, JAWA TIMUR 68117,<br/>INDONESIA",
      openMaps: "Buka di Google Maps",
      hoursTitle: "Jam Operasional",
      weekdaysLabel: "Senin - Jumat",
      satLabel: "Sabtu",
      sunLabel: "Minggu",
      closed: "TUTUP",
      instaTitle: "Instagram",
      instaHandle: "@udsumberrejeki",
      instaCta: "Ikuti proyek kami",
      mapBadge: "Temukan kami di sini",
      ctaBannerTitle: "Siap untuk modifikasi berikutnya?",
      ctaBannerLead:
        "Konsultasikan dengan teknisi kami untuk penawaran kustom hari ini.",
      ctaBannerBtn: "Chat WhatsApp",
      connectTitle: "Terhubung",
      socialLocation: "Lokasi",
      footerBlurb:
        "Bengkel variasi dan aksesori mobil premium untuk build performa tinggi.",
      footerRights: "© 2026 UD SUMBER REJEKI. HAK CIPTA DILINDUNGI.",
    },
    about: {
      heroTitle: "Tentang Kami",
      heroSub: "Berdiri sejak 1998",
      storyTitle: "Kisah Kami",
      storyQuote:
        '"Mengubah mobil standar menjadi pernyataan pribadi akan tenaga dan presisi selama lebih dari dua dekade."',
      storyBody:
        "Berawal dari garasi kecil, UD SUMBER REJEKI didirikan dengan satu visi: menghadirkan variasi dan modifikasi mobil standar profesional bagi masyarakat. Bermula dari kegemaran pada estetika, kini kami berkembang menjadi bengkel berskala penuh yang spesialis dalam aksesori kelas atas, peningkatan performa kustom, dan detailing presisi.",
      valuesTitle: "Nilai Utama Kami",
      valuesLead: "Dasar dari setiap proyek yang kami kerjakan.",
      value1Title: "Kualitas",
      value1Body:
        "Kami tidak pernah mengambil jalan pintas. Hanya menggunakan suku cadang bersertifikat dan teknik pemasangan yang teliti agar kendaraan Anda tampil dan berperforma lebih baik.",
      value2Title: "Kejujuran",
      value2Body:
        "Harga transparan dan saran yang jujur — kami merekomendasikan apa yang mobil Anda butuhkan, bukan apa yang paling menguntungkan kami. Kepercayaan adalah bagian terpenting dari bengkel kami.",
      value3Title: "Semangat",
      value3Body:
        "Kami adalah penggemar mobil terlebih dahulu, mekanik kedua. Setiap kendaraan diperlakukan dengan rasa hormat dan perhatian yang sama seperti kendaraan pribadi kami.",
      workshopTitle: "Ruang Kerja",
      workshopBody:
        "Bengkel kami dilengkapi dengan peralatan diagnostik dan perangkat keras terbaru. Kami menjaga lingkungan yang bersih dan teratur untuk memastikan presisi di setiap detail.",
      workshopCta: "Kunjungi Bengkel Kami",
      ctaTitle: "Siap meningkatkan kendaraan Anda?",
      ctaLead: "Konsultasikan kebutuhan modifikasi Anda dengan tim kami.",
    },
    services: {
      heroTitle: "LAYANAN KAMI",
    },
    gallery: {
      heroTitle: "GALERI",
      heroLine2: "MODIFIKASI",
      badge: "Warisan Kami",
      lead:
        "Saksi transformasi kendaraan hasil rekayasa presisi. Dari aksen eksterior halus hingga upgrade performa menyeluruh.",
    },
  },
  en: {
    site: {
      footerAddressHtml: SITE_ADDRESS_HTML,
      footerAddressHeading: "Address",
    },
    home: {
      heroTagline: "Serious Mods, Real Results",
      ctaWa: "Contact via WhatsApp",
      ctaServices: "View services",
      pillar1Title: "Experience",
      pillar1Body:
        "Professional team with 15+ years in custom automotive engineering.",
      pillar2Title: "Competitive pricing",
      pillar2Body:
        "High-end results without agency markup — direct workshop rates.",
      pillar3Title: "Quality parts",
      pillar3Body:
        "Only genuine or proven components enter our workshop floor.",
      specializationTitle: "Our specialization",
      specializationLead:
        "Precision work for those who demand excellence — from aesthetics to interior mods, we handle every detail.",
      svcPolesTitle: "Glass polish",
      svcPolesBody:
        "Remove scratches and oxidation for crystal-clear visibility and finish.",
      svcLampTitle: "Mirrors & tail lamps",
      svcLampBody:
        "Custom lighting solutions and electronic mirror upgrades.",
      svcIntTitle: "Pre-owned interior",
      svcIntBody:
        "Sourcing and restoring premium pre-owned interior and leather work.",
      svcAudioTitle: "Audio install",
      svcAudioBody:
        "Hi-fi integration and acoustic damping for serious sound.",
      svcAccTitle: "Accessories",
      svcAccBody:
        "Curated performance and aesthetic bolt-ons for every build.",
      showcaseTitle: "Build showcase",
      showcaseLink: "Full gallery",
      viewBuild: "View build",
      ctaEndTitle: "Ready for the next level?",
      ctaEndLead:
        "Your car is a canvas — let us handle the engineering. Book a consult with our specialists today.",
      ctaEndBtn: "Chat on WhatsApp now",
      footerBlurb:
        "Specialists in car variations and high-performance accessories. Workshop precision on every mod since 2009.",
      footerFindAddress: SITE_ADDRESS_HTML,
      footerHours1: "Mon - Sat: 09:00 - 18:00",
      footerHours2: "Sunday: by appointment",
      footerRights: "© 2026 UD SUMBER REJEKI. ALL RIGHTS RESERVED.",
      catalogLink: "Services catalog",
    },
    contact: {
      heroLine1: "Get in touch",
      heroLine2: "with experts",
      heroLead:
        "Performance upgrades, interior variation, or pro detailing — our workshop is ready to transform your ride. Reach us on WhatsApp or visit us.",
      btnWa: "WhatsApp us",
      locationTitle: "Location",
      addressHtml:
        "JL. KACA PIRING, GEBANG TENGAH, GEBANG,<br/>KEC. PATRANG, KABUPATEN JEMBER, EAST JAVA 68117,<br/>INDONESIA",
      openMaps: "Open in Google Maps",
      hoursTitle: "Hours",
      weekdaysLabel: "Monday - Friday",
      satLabel: "Saturday",
      sunLabel: "Sunday",
      closed: "CLOSED",
      instaTitle: "Instagram",
      instaHandle: "@udsumberrejeki",
      instaCta: "Follow our builds",
      mapBadge: "Find us here",
      ctaBannerTitle: "Ready for your next mod?",
      ctaBannerLead:
        "Talk to our technicians today for a custom quote.",
      ctaBannerBtn: "Chat on WhatsApp",
      connectTitle: "Connect",
      socialLocation: "Location",
      footerBlurb:
        "Premium car variation and accessories workshop for high-performance builds.",
      footerRights: "© 2026 UD SUMBER REJEKI. ALL RIGHTS RESERVED.",
    },
    about: {
      heroTitle: "About us",
      heroSub: "Est. 1998",
      storyTitle: "Our Story",
      storyQuote:
        '"Turning stock vehicles into personal statements of power and precision for over two decades."',
      storyBody:
        "UD SUMBER REJEKI started in a small garage with one goal: to bring professional-grade car variations and modifications to the local community. What began as a passion for aesthetics evolved into a full-scale workshop specializing in high-end accessories, custom performance upgrades, and precision detailing.",
      valuesTitle: "Our Core Values",
      valuesLead: "The foundation of every build we undertake.",
      value1Title: "Quality",
      value1Body:
        "We never cut corners. We only use certified parts and meticulous installation techniques to ensure your vehicle performs better than the day it left the factory.",
      value2Title: "Honesty",
      value2Body:
        "Transparent pricing and honest advice — we recommend what your car needs, not what makes us the most profit. Trust is the most expensive part of our shop.",
      value3Title: "Passion",
      value3Body:
        "We are car enthusiasts first, mechanics second. Every vehicle is treated with the same respect and care we give to our own personal builds.",
      workshopTitle: "The Engine Room",
      workshopBody:
        "Our workshop is equipped with the latest diagnostic tools and installation hardware. We maintain a clean, organized environment to ensure precision in every wire tucked and every bolt tightened.",
      workshopCta: "Visit Our Workshop",
      ctaTitle: "Ready to upgrade your ride?",
      ctaLead: "Talk to us about your next modification.",
    },
    services: {
      heroTitle: "OUR SERVICES",
    },
    gallery: {
      heroTitle: "MODIFICATION",
      heroLine2: "GALLERY",
      badge: "Our legacy",
      lead:
        "Witness precision-engineered vehicles — from subtle exterior accents to complete performance overhauls.",
    },
  },
});

export function resolvePageString(lang, dotKey) {
  const l = lang === "en" ? "en" : "id";
  const parts = dotKey.split(".").filter(Boolean);
  let cur = PAGE_STRINGS[l];
  for (const p of parts) {
    cur = cur?.[p];
    if (cur === undefined) return undefined;
  }
  return typeof cur === "string" ? cur : undefined;
}
