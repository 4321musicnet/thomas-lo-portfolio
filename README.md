# Thomas Lo - Professional Portfolio Website

Award-winning Sound Engineer & Immersive Art Curator portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Design Features

- **Dark Mode Professional**: Deep charcoal background (#050505 - #0a0a0a)
- **Glassmorphism Navigation**: Floating pill-shaped navbar with backdrop blur
- **Staggered Text Animations**: Orfeo.ai inspired word-by-word reveal
- **Breathing Logo**: 432Hz-inspired pulsing animation
- **Scroll Animations**: Smooth reveals as sections enter viewport
- **Responsive Design**: Optimized for all devices

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd thomas-lo-portfolio
```

2. Install dependencies (already done):

```bash
npm install
```

3. **IMPORTANT**: Replace the logo placeholder
   - The placeholder logo is at `/public/4321-logo-white.svg`
   - Replace it with the actual `4321-logo-white.png` (or keep as SVG)
   - If using PNG, update `/components/hero/BreathingLogo.tsx` line 18:
     ```tsx
     src = "/4321-logo-white.png"; // instead of .svg
     ```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
thomas-lo-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles & dark theme
├── components/
│   ├── layout/
│   │   └── Navbar.tsx      # Floating navigation bar
│   ├── hero/
│   │   ├── Hero.tsx        # Hero section wrapper
│   │   ├── AnimatedText.tsx # Staggered text reveal
│   │   └── BreathingLogo.tsx # Pulsing logo animation
│   └── sections/
│       ├── Services.tsx    # Services grid
│       ├── SelectedWorks.tsx # Projects showcase
│       ├── Awards.tsx      # Awards & recognition
│       ├── About.tsx       # About Thomas Lo
│       └── Contact.tsx     # Contact information
└── public/
    └── 4321-logo-white.svg # Logo placeholder (REPLACE THIS)
```

## 🎯 Sections Overview

### 1. Hero Section

- Breathing logo with 3-second pulse cycle
- Headline: "Immersive Art Curator. Legendary Sound Engineering."
- Staggered word reveal animation

### 2. Services

- Multitrack Music Mixing (Online)
- Immersive Art Concert Curation
- Audio Consultancy

### 3. Selected Works

- Featured projects from 2022-2024
- Immersive installations and album credits
- Grid layout with hover effects

### 4. Awards & Recognition

- 🏆 Winner: Best Recording Engineer (Chinese Music Awards 2013)
- 4 total nominations highlighted
- Al Schmitt training credentials

### 5. About

- Biography and profile
- Teaching roles at HKAPA and HKCT
- Notable collaborations
- Expertise showcase

### 6. Contact

- Email: info@4321music.com (update as needed)
- Studio information
- Footer credits

## 🎨 Customization

### Update Content

Edit the content directly in component files:

- **Services**: `/components/sections/Services.tsx` (line 8-28)
- **Works**: `/components/sections/SelectedWorks.tsx` (line 8-61)
- **Awards**: `/components/sections/Awards.tsx` (line 8-32)
- **Email**: `/components/sections/Contact.tsx` (line 30)

### Modify Colors

Edit color variables in `/app/globals.css`:

```css
:root {
  --bg-primary: #050505;
  --bg-secondary: #0a0a0a;
  --accent-gold: #d4af37;
  --accent-purple: #8b5cf6;
}
```

### Animation Timing

Adjust animation parameters in component files. All animations use Framer Motion with cubic-bezier easing `[0.16, 1, 0.3, 1]`.

## 🔧 Build for Production

```bash
npm run build
npm start
```

## 📝 Important Notes

1. **Logo File**: Replace `/public/4321-logo-white.svg` with the actual logo
2. **Contact Email**: Update email in Contact.tsx if needed
3. **ESLint Warnings**: Some "any" type warnings exist for Framer Motion easing - these are intentional for compatibility
4. **Smooth Scrolling**: Built-in smooth scroll to sections via navbar

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

- Build output: `.next` directory
- Environment: Node.js 18+
- Start command: `npm start`

## 🎭 Animation Specifications

- **Hero Text**: 0.6s duration, 0.1s stagger, cubic-bezier easing
- **Logo Breathing**: 3s cycle, scale 1.0 → 1.05, opacity 0.9 → 1.0
- **Navbar**: Appears at 1.2s with slide-up effect
- **Sections**: Fade-in on scroll with Intersection Observer

## 📱 Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1440px

## 🎨 Design References

- **Navigation**: Cosmos.so floating pill design
- **Text Animation**: Orfeo.ai staggered reveal
- **Aesthetic**: Metalab.com high-contrast typography

## 📄 License

© 2024 Thomas Lo | 432 1 Music. All rights reserved.

---

Built with ❤️ using Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.
