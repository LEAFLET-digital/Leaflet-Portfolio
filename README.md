# Leaflet Studio Portfolio

A modern, professional portfolio website for Leaflet Studio - a privacy-first AI social network. Built with React, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion for smooth, professional animations
- **Icons**: Lucide React for beautiful, consistent icons
- **Responsive**: Fully responsive design for all screen sizes
- **Performance**: Optimized build with Vite
- **Type Safety**: Full TypeScript coverage
- **Best Practices**: ESLint configured for code quality

## 🛠️ Tech Stack

- **Framework**: React 18.2.0
- **Language**: TypeScript 5.0.2
- **Build Tool**: Vite 4.4.5
- **Styling**: TailwindCSS 3.3.3
- **Animations**: Framer Motion 10.16.4
- **Icons**: Lucide React 0.263.1
- **Package Manager**: Yarn

## 📦 Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Run linter
yarn lint
```

## 🏗️ Project Structure

```
leaflet-portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.tsx              # Hero section with branding
│   │   ├── CurrentLandscape.tsx  # Problem statement section
│   │   ├── Paradigm.tsx          # Features paradigm section
│   │   ├── Features.tsx          # Feature cards grid
│   │   ├── Security.tsx          # Security & privacy section
│   │   └── Footer.tsx            # Footer with links
│   ├── hooks/
│   │   └── useInView.ts          # Intersection Observer hook
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles & Tailwind
├── public/                       # Static assets
├── index.html                    # HTML template
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── vite.config.ts               # Vite config
├── tailwind.config.js           # Tailwind config
└── postcss.config.js            # PostCSS config
```

## 🎨 Design System

### Colors
- **Primary Cyan**: `#00D9FF` (leaflet-cyan)
- **Dark Blue**: `#0A1628` (leaflet-blue)
- **Background**: `#0B1221` (leaflet-dark)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, large scale
- **Body**: Regular weight, comfortable line-height

### Components
- Gradient text effects
- Glass-morphism cards
- Smooth scroll animations
- Hover interactions

## 🌟 Portfolio Sections

1. **Hero**: Eye-catching introduction with Leaflet Studio branding and gradient effects
2. **Current Landscape**: Problem statement highlighting app fatigue and privacy concerns
3. **The Leaflet Paradigm**: Core features with 4 key value propositions and neural network visualization
4. **One Bar to Rule Them All**: Three main feature cards (Create & Chat, Semantic Search, Agentic Tools)
5. **Agentic Capabilities**: Three capability cards showcasing generative content, deep context, and in-house tools
6. **Architecture: Node vs. Cloud**: Side-by-side comparison of local node and sync server architecture
7. **Why Now? Technical Viability**: Technical details about NPUs, quantization, and edge tooling
8. **Uncompromising Security**: 100% on-device privacy with detailed security explanations
9. **Development Roadmap**: 4-phase timeline visualization with alternating layout
10. **Redefining Social Interaction**: Dramatic closing statement with background imagery
11. **Ready to Prompt?**: Final call-to-action with demo scheduling options
12. **Image Sources**: Credits and attribution for all images used
13. **Footer**: Links, social media connections, and copyright information

## 🔧 Development

The project uses:
- **Hot Module Replacement (HMR)** for instant updates
- **TypeScript** for type safety
- **ESLint** for code quality
- **Intersection Observer** for scroll animations
- **Framer Motion** for declarative animations

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚢 Deployment

Build the project for production:

```bash
yarn build
```

The optimized files will be in the `dist/` directory, ready to deploy to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## 📄 License

MIT

## 🤝 Contributing

This is a portfolio project. Feel free to fork and customize for your own use.

---

Built with ❤️ for leaflet.ai
# Leaflet-Portfolio
