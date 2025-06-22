# UD Sumber Rejeki - Automotive Store Website

A modern, responsive automotive parts and accessories store website inspired by Nike's design aesthetic. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚗 Features

- **Nike-inspired Design**: Clean, modern interface with smooth animations
- **Interactive Hero Video**: Full-screen video background with overlay content
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Product Showcase**: Featured products with hover effects
- **Category Navigation**: Easy browsing by automotive categories
- **Contact Form**: Integrated contact section
- **Media Management**: Organized media directory structure

## 📁 Project Structure

```
UD_Sumber_Rejeki/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Main layout with navigation
│   │   ├── page.tsx            # Homepage with hero and sections
│   │   └── globals.css         # Global styles and animations
│   └── components/             # Reusable components (future)
├── public/
│   ├── media/
│   │   ├── videos/             # Video content
│   │   │   ├── hero-automotive.mp4
│   │   │   ├── exhaust-system-demo.mp4
│   │   │   ├── led-headlights-demo.mp4
│   │   │   ├── carbon-spoiler-demo.mp4
│   │   │   ├── air-filter-demo.mp4
│   │   │   ├── suspension-kit-demo.mp4
│   │   │   └── dashboard-demo.mp4
│   │   ├── images/             # Image content
│   │   │   ├── hero-poster.jpg
│   │   │   ├── exhaust-system-1.jpg
│   │   │   ├── exhaust-system-2.jpg
│   │   │   ├── exhaust-system-3.jpg
│   │   │   ├── led-headlights-1.jpg
│   │   │   ├── led-headlights-2.jpg
│   │   │   ├── led-headlights-3.jpg
│   │   │   ├── carbon-spoiler-1.jpg
│   │   │   ├── carbon-spoiler-2.jpg
│   │   │   ├── carbon-spoiler-3.jpg
│   │   │   ├── air-filter-1.jpg
│   │   │   ├── air-filter-2.jpg
│   │   │   ├── air-filter-3.jpg
│   │   │   ├── suspension-kit-1.jpg
│   │   │   ├── suspension-kit-2.jpg
│   │   │   ├── suspension-kit-3.jpg
│   │   │   ├── dashboard-1.jpg
│   │   │   ├── dashboard-2.jpg
│   │   │   └── dashboard-3.jpg
│   │   └── data/               # JSON data files
│   │       ├── products.json   # Product catalog
│   │       └── store-info.json # Store information
│   └── favicon.ico
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎥 Media Directory Structure

### Videos (`/public/media/videos/`)
- **hero-automotive.mp4**: Main hero section background video
- **exhaust-system-demo.mp4**: Product demonstration videos
- **led-headlights-demo.mp4**: Product demonstration videos
- **carbon-spoiler-demo.mp4**: Product demonstration videos
- **air-filter-demo.mp4**: Product demonstration videos
- **suspension-kit-demo.mp4**: Product demonstration videos
- **dashboard-demo.mp4**: Product demonstration videos

### Images (`/public/media/images/`)
- **hero-poster.jpg**: Hero section poster image
- **Product Images**: Multiple angles for each product (1, 2, 3 variants)
- **Category Icons**: Visual representations for product categories

### Data (`/public/media/data/`)
- **products.json**: Complete product catalog with specifications
- **store-info.json**: Store information, contact details, and policies

## 🛠️ Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code linting and quality
- **Responsive Design**: Mobile-first approach

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 Design Features

- **Nike-inspired Typography**: Bold, clean fonts with proper hierarchy
- **Smooth Animations**: CSS animations and transitions
- **Interactive Elements**: Hover effects and micro-interactions
- **Video Integration**: Background videos with overlay content
- **Modern UI**: Clean, minimalist design with automotive focus

## 📊 Product Categories

1. **Engine Parts** (45 items) - Performance components
2. **Performance** (32 items) - Power and speed upgrades
3. **Accessories** (78 items) - Styling and comfort
4. **Lighting** (23 items) - Advanced lighting solutions
5. **Suspension** (19 items) - Handling and ride quality
6. **Electronics** (34 items) - Modern electronic upgrades

## 🔧 Customization

### Adding New Products
1. Add product images to `/public/media/images/`
2. Add product videos to `/public/media/videos/`
3. Update `/public/media/data/products.json`

### Modifying Store Information
Edit `/public/media/data/store-info.json` to update:
- Contact information
- Business hours
- Services offered
- Brand partnerships

## 📞 Contact Information

- **Address**: Jl. Automotive Street No. 123, Jakarta
- **Phone**: +62 21 1234 5678
- **Email**: info@udsumberrejeki.com
- **WhatsApp**: +62 812 3456 7890

## 🛡️ Warranty & Support

- **Standard Warranty**: 1 year on all products
- **Installation Warranty**: 90 days
- **Return Policy**: 30 days money back guarantee
- **Support**: 24/7 customer support available

## 📄 License

This project is proprietary to UD Sumber Rejeki. All rights reserved.

---

**UD Sumber Rejeki** - Premium Automotive Parts & Accessories
*Driving Performance Since 2014*
