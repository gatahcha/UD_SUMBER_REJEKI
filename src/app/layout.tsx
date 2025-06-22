import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UD Sumber Rejeki - Premium Automotive Parts & Accessories | Jakarta",
  description: "Leading supplier of high-quality automotive parts, accessories, and performance upgrades in Jakarta. Engine parts, lighting, suspension, electronics, and more. Free shipping on orders above $100.",
  keywords: [
    "automotive parts jakarta",
    "car accessories indonesia", 
    "auto modifications",
    "car performance parts",
    "automotive store jakarta",
    "engine parts",
    "car lighting",
    "suspension kits",
    "car electronics",
    "performance exhaust",
    "LED headlights",
    "carbon fiber parts",
    "car tuning jakarta"
  ],
  authors: [{ name: "UD Sumber Rejeki" }],
  creator: "UD Sumber Rejeki",
  publisher: "UD Sumber Rejeki",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://udsumberrejeki.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "UD Sumber Rejeki - Premium Automotive Parts & Accessories",
    description: "Leading supplier of high-quality automotive parts, accessories, and performance upgrades in Jakarta.",
    url: 'https://udsumberrejeki.com',
    siteName: 'UD Sumber Rejeki',
    images: [
      {
        url: '/media/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UD Sumber Rejeki - Automotive Parts Store',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "UD Sumber Rejeki - Premium Automotive Parts & Accessories",
    description: "Leading supplier of high-quality automotive parts, accessories, and performance upgrades in Jakarta.",
    images: ['/media/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta" />
        <meta name="geo.position" content="-6.2088;106.8456" />
        <meta name="ICBM" content="-6.2088, 106.8456" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="Indonesian" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="UD Sumber Rejeki" />
        <meta name="application-name" content="UD Sumber Rejeki" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="antialiased">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-black">UD Sumber Rejeki</h1>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a href="#home" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
                    Home
                  </a>
                  <a href="#products" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
                    Products
                  </a>
                  <a href="#about" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
                    About
                  </a>
                  <a href="#contact" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
                    Contact
                  </a>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  id="mobile-menu-button"
                  className="text-gray-900 hover:text-gray-600 p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                  aria-label="Toggle mobile menu"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            <div id="mobile-menu" className="mobile-menu closed md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#home" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium transition-colors">
                  Home
                </a>
                <a href="#products" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium transition-colors">
                  Products
                </a>
                <a href="#about" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium transition-colors">
                  About
                </a>
                <a href="#contact" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </header>

        <main className="pt-16">
          {children}
        </main>

        <footer className="bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">UD Sumber Rejeki</h3>
                <p className="text-gray-300">Premium automotive parts and accessories for enthusiasts and professionals.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Products</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#products" className="hover:text-white transition-colors">Engine Parts</a></li>
                  <li><a href="#products" className="hover:text-white transition-colors">Accessories</a></li>
                  <li><a href="#products" className="hover:text-white transition-colors">Performance</a></li>
                  <li><a href="#products" className="hover:text-white transition-colors">Maintenance</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Shipping Info</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Returns</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a href="https://facebook.com/udsumberrejeki" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com/udsumberrejeki" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                  <a href="https://youtube.com/udsumberrejeki" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-300">
              <p>&copy; 2024 UD Sumber Rejeki. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoPartsStore",
              "name": "UD Sumber Rejeki",
              "description": "Premium automotive parts and accessories store in Jakarta",
              "url": "https://udsumberrejeki.com",
              "logo": "https://udsumberrejeki.com/logo.png",
              "image": "https://udsumberrejeki.com/media/images/og-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Automotive Street No. 123",
                "addressLocality": "Jakarta",
                "addressRegion": "DKI Jakarta",
                "postalCode": "12345",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -6.2088,
                "longitude": 106.8456
              },
              "telephone": "+62-21-1234-5678",
              "email": "info@udsumberrejeki.com",
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 09:00-17:00",
                "Su 10:00-16:00"
              ],
              "priceRange": "$$",
              "currenciesAccepted": "IDR, USD",
              "paymentAccepted": "Cash, Credit Card, Bank Transfer",
              "areaServed": "Jakarta, Indonesia",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Automotive Parts",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Performance Exhaust System"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Product",
                      "name": "LED Headlight Kit"
                    }
                  }
                ]
              }
            })
          }}
        />
      </body>
    </html>
  );
}
