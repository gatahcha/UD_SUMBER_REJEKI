'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Random automotive videos from Pexels/Unsplash
  const randomVideos = [
    "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
  ];

  // Random automotive images from Unsplash
  const randomImages = [
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop"
  ];

  const products = [
    {
      id: 1,
      name: "Performance Exhaust System",
      category: "Performance",
      price: "$299.99",
      image: randomImages[0],
      description: "High-performance exhaust system for maximum power output"
    },
    {
      id: 2,
      name: "LED Headlight Kit",
      category: "Lighting",
      price: "$89.99",
      image: randomImages[1],
      description: "Bright LED headlights for better visibility"
    },
    {
      id: 3,
      name: "Carbon Fiber Spoiler",
      category: "Aerodynamics",
      price: "$199.99",
      image: randomImages[2],
      description: "Lightweight carbon fiber spoiler for enhanced aerodynamics"
    },
    {
      id: 4,
      name: "Performance Air Filter",
      category: "Engine",
      price: "$49.99",
      image: randomImages[3],
      description: "High-flow air filter for improved engine performance"
    },
    {
      id: 5,
      name: "Sport Suspension Kit",
      category: "Suspension",
      price: "$399.99",
      image: randomImages[4],
      description: "Adjustable sport suspension for better handling"
    },
    {
      id: 6,
      name: "Digital Dashboard",
      category: "Electronics",
      price: "$159.99",
      image: randomImages[5],
      description: "Modern digital dashboard with real-time data"
    }
  ];

  const categories = [
    { name: "Engine Parts", icon: "🔧", count: 45 },
    { name: "Performance", icon: "⚡", count: 32 },
    { name: "Accessories", icon: "🎯", count: 78 },
    { name: "Lighting", icon: "💡", count: 23 },
    { name: "Suspension", icon: "🛞", count: 19 },
    { name: "Electronics", icon: "📱", count: 34 }
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle mobile menu functionality
  useEffect(() => {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuButton = document.getElementById('mobile-menu-button');

    if (mobileMenu && mobileMenuButton) {
      if (isMobileMenuOpen) {
        mobileMenu.classList.remove('closed');
        mobileMenu.classList.add('open');
      } else {
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('closed');
      }
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Random Video */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={randomImages[0]}
          >
            <source src={randomVideos[0]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="hero-title font-bold mb-6 animate-fade-in-up">
            DRIVE WITH
            <span className="block text-yellow-400">PERFORMANCE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-in-left max-w-2xl mx-auto">
            Discover premium automotive parts and accessories that transform your vehicle into a masterpiece of engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right">
            <button 
              onClick={() => scrollToSection('products')}
              className="btn-primary"
            >
              SHOP NOW
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="btn-secondary"
            >
              EXPLORE CATEGORIES
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('products')}
            className="text-white hover:text-yellow-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              SHOP BY CATEGORY
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find exactly what you need with our comprehensive selection of automotive parts and accessories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => scrollToSection('products')}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} items</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              FEATURED PRODUCTS
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium quality automotive parts that deliver exceptional performance and style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="product-card bg-white rounded-lg overflow-hidden shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 bg-gray-200">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <button className="btn-primary text-sm px-6 py-2">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-secondary">
              VIEW ALL PRODUCTS
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ABOUT UD SUMBER REJEKI
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We are passionate about automotive excellence. For over a decade, we've been providing premium parts and accessories to car enthusiasts and professionals who demand the best.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">10+</h3>
                  <p className="text-gray-300">Years of Experience</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">1000+</h3>
                  <p className="text-gray-300">Happy Customers</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">500+</h3>
                  <p className="text-gray-300">Products Available</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">24/7</h3>
                  <p className="text-gray-300">Customer Support</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={randomImages[1]} 
                alt="UD Sumber Rejeki Store"
                className="rounded-lg h-96 w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              GET IN TOUCH
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We're here to help you find the perfect automotive solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">Jl. Automotive Street No. 123, Jakarta</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600">+62 21 1234 5678</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">info@udsumberrejeki.com</span>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu Toggle Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const mobileMenuButton = document.getElementById('mobile-menu-button');
              if (mobileMenuButton) {
                mobileMenuButton.addEventListener('click', function() {
                  const mobileMenu = document.getElementById('mobile-menu');
                  if (mobileMenu) {
                    mobileMenu.classList.toggle('open');
                    mobileMenu.classList.toggle('closed');
                  }
                });
              }
            });
          `
        }}
      />
    </div>
  );
}
