# 🍸 Bukowski's Bar - Official Website

<div align="center">

![Bukowski's Bar](https://img.shields.io/badge/Bukowski's_Bar-Borgo_Pio_Roma-B8966E?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-In_Development-yellow?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A sophisticated dark-themed website for Bukowski's Bar**
*Galleria · Café · Bistrot in the heart of Borgo Pio, Rome*

[View Demo](#) · [Report Bug](https://github.com/fracabu/bukowsky_bar/issues) · [Request Feature](https://github.com/fracabu/bukowsky_bar/issues)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Design System](#design-system)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎨 About The Project

Bukowski's Bar website embodies the intimate, literary atmosphere of a 1920s speakeasy while maintaining modern functionality. Inspired by the aesthetic of Jerry Thomas Speakeasy Rome, this dark-themed site showcases the bar's unique identity as a gallery, café, and bistrot.

### Business Information

- **Name**: Bukowski's Bar
- **Location**: Via degli Ombrellari, 25 - 00193 Roma (Borgo Pio)
- **Phone**: [+39 06 6476 0105](tel:+390664760105)
- **WhatsApp**: [+39 351 713 9892](https://wa.me/393517139892)
- **Hours**: Tuesday-Sunday 15:00-02:00 (Closed Monday)
- **Type**: Galleria · Café · Bistrot
- **Owner**: Alessandro Mattei
- **Instagram**: [@bukowskis_bar](https://instagram.com/bukowskis_bar)

---

## ✨ Features

### Design & UX
- 🎭 **Dark Speakeasy Theme** - 1920s vintage aesthetic with gold accents
- 📱 **Fully Responsive** - Mobile-first design approach
- ✨ **Smooth Animations** - Fade-in effects and parallax scrolling
- 🎨 **Elegant Typography** - 4 carefully selected font families
- 🖼️ **Image Optimization** - Lazy loading and WebP support ready

### Functionality
- 🍔 **Interactive Menu** - Tab-based navigation with 12+ Spritz varieties
- 📧 **Contact Form** - Validated form with multiple contact options
- 🗺️ **Google Maps Integration** - Embedded map with custom styling
- 📱 **Mobile Menu** - Smooth hamburger navigation
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and semantic HTML

### Special Features
- 🌿 **Gin del Marchese Page** - Dedicated showcase for house gin
- 🎨 **Botanical Cards** - Interactive display of gin ingredients
- 🍸 **Cocktail Recipes** - Step-by-step drink preparation
- 📍 **Quick Actions** - One-tap call, WhatsApp, and directions

---

## 🛠️ Tech Stack

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **Google Fonts** - Playfair Display, Cormorant Garamond, Lora, Montserrat

### Features Implemented
- CSS Variables for theming
- Intersection Observer for scroll animations
- Lazy loading for images
- Mobile-first responsive design
- Form validation
- Tab switching
- Lightbox gallery (ready)
- Parallax effects

---

## 🚀 Getting Started

### Prerequisites

You need a modern web browser and optionally a local server.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fracabu/bukowsky_bar.git
   cd bukowsky_bar
   ```

2. **Open with a local server**

   **Option A - Python:**
   ```bash
   python -m http.server 8000
   ```

   **Option B - Node.js (http-server):**
   ```bash
   npx http-server -p 8000
   ```

   **Option C - VS Code Live Server:**
   - Install Live Server extension
   - Right-click on `index.html` → "Open with Live Server"

3. **Visit the site**
   ```
   http://localhost:8000
   ```

### Quick Start (No Server Required)

Simply open `index.html` in your browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

---

## 📁 Project Structure

```
bukowsky_bar/
│
├── index.html                      # Homepage
├── gin.html                        # Gin del Marchese page
├── menu.html                       # Interactive menu
├── contatti.html                   # Contact page
├── news.html                       # News & Events (TODO)
├── galleria.html                   # Gallery (TODO)
├── il-locale.html                  # About page (TODO)
│
├── assets/
│   ├── css/
│   │   ├── style.css              # Main stylesheet + design system
│   │   ├── gin.css                # Gin page styles
│   │   ├── menu.css               # Menu page styles
│   │   └── contatti.css           # Contact page styles
│   │
│   ├── js/
│   │   └── main.js                # All JavaScript functionality
│   │
│   ├── images/                    # Images (to be populated)
│   └── fonts/                     # Local fonts (optional)
│
├── BUKOWSKIS_BAR_PROJECT_BRIEF.md # Complete project brief
└── README.md                       # This file
```

---

## 📄 Pages

### ✅ Completed (4/7)

| Page | Status | Features |
|------|--------|----------|
| **Homepage** | ✅ Complete | Hero, About, Experience cards, Instagram feed, Location |
| **Il Nostro Gin** | ✅ Complete | Storytelling, Botanicals, Tasting notes, Recipes, Purchase |
| **Menu** | ✅ Complete | 4 tabs (Spritz, Cocktails, Food, Wine), 12 Spritz varieties |
| **Contatti** | ✅ Complete | Contact form, Map, Quick actions, Social links |

### ⏳ To Do (3/7)

| Page | Status | Priority |
|------|--------|----------|
| **News & Eventi** | 🔨 In Progress | High |
| **Galleria** | 📋 Planned | Medium |
| **Il Locale** | 📋 Planned | Medium |

---

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--ink-black: #0D0D0D;          /* Main background */
--dark-sepia: #2B1F1A;         /* Secondary background */
--deep-bordeaux: #4A1C1C;      /* Dark accents */
--antique-gold: #B8966E;       /* Brand color (gold) */

/* Accent Colors */
--paper-cream: #F4EFE6;        /* Main text */
--bottle-green: #1F3A2C;       /* Green accents */
--seal-red: #8B2F2F;           /* Red accents */

/* Neutrals */
--smoke-gray: #4A4A4A;         /* Secondary text */
--ivory: #FFFEF7;              /* Light text */
```

### Typography

| Element | Font Family | Weight | Usage |
|---------|-------------|--------|-------|
| **Display (H1)** | Playfair Display | 700 | Large titles, logo |
| **Headings (H2-H3)** | Cormorant Garamond | 400 | Section titles |
| **Body** | Lora | 400 | Main text content |
| **Labels** | Montserrat | 300 | Navigation, buttons |

### Decorative Elements

- **Separator**: `───── ✦ ─────`
- **Gold borders** on images and cards
- **Hover glow effects** in antique gold
- **Fade-in animations** on scroll
- **Subtle parallax** on hero sections

### Responsive Breakpoints

```css
Mobile:        320px - 767px
Tablet:        768px - 1024px
Desktop:       1025px - 1440px
Large Desktop: 1441px+
```

---

## 🗺️ Roadmap

### Phase 1: Core Pages ✅
- [x] Homepage with hero and sections
- [x] Gin del Marchese showcase page
- [x] Interactive menu with tabs
- [x] Contact page with form

### Phase 2: Content Pages 🔨
- [ ] News & Eventi blog layout
- [ ] Gallery with masonry grid
- [ ] Il Locale (About) page

### Phase 3: Enhancement 📋
- [ ] Add real images and photos
- [ ] Integrate Google Maps API
- [ ] Integrate Instagram feed API
- [ ] Connect form backend (PHP/Formspree)
- [ ] Add Google Analytics

### Phase 4: Optimization 🚀
- [ ] Performance optimization
- [ ] SEO improvements
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] PWA features
- [ ] WordPress conversion (optional)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

© 2024 Bukowski's Bar - All rights reserved.

This project is proprietary and confidential. Unauthorized copying, distribution, or use of this software is strictly prohibited.

---

## 📞 Contact

**Bukowski's Bar**
- 📍 Via degli Ombrellari, 25 - 00193 Roma (Borgo Pio)
- ☎️ [+39 06 6476 0105](tel:+390664760105)
- 💬 [WhatsApp: +39 351 713 9892](https://wa.me/393517139892)
- 📧 info@bukowskisbar.com
- 📷 [@bukowskis_bar](https://instagram.com/bukowskis_bar)

**Developer**
- GitHub: [@fracabu](https://github.com/fracabu)
- Project Link: [https://github.com/fracabu/bukowsky_bar](https://github.com/fracabu/bukowsky_bar)

---

## 🙏 Acknowledgments

- Design inspired by [Jerry Thomas Speakeasy Rome](https://www.speakeasy.it/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Icons from Unicode emoji
- Client: Alessandro Mattei - Bukowski's Bar

---

<div align="center">

**Made with ❤️ and 🍸 in Rome**

*"Qui non servono fronzoli. Solo storie vere e gin autentico."*

[![GitHub stars](https://img.shields.io/github/stars/fracabu/bukowsky_bar?style=social)](https://github.com/fracabu/bukowsky_bar/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/fracabu/bukowsky_bar?style=social)](https://github.com/fracabu/bukowsky_bar/network/members)

</div>

