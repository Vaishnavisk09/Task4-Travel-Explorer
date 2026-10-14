# ✈️ Travel Explorer

> **Task 4 — Make a Website Mobile-Friendly Using CSS Media Queries**
> Web Development Internship Project

A premium, fully responsive travel discovery website built with pure HTML5, CSS3 (Media Queries), and Vanilla JavaScript. Designed to work flawlessly across desktop, tablet, and mobile screens.

---

## 🌍 Live Preview

Open `index.html` directly in any modern browser — **no server required**.

---

## ✨ Features

| Feature | Details |
|---------|---------|
| **Responsive Layout** | Mobile-first CSS, breakpoints at 1440px, 1024px, 768px, 480px, 375px |
| **Navigation** | Sticky navbar, scroll-spy active links, animated hamburger menu (mobile) |
| **Hero Section** | Full-screen travel photography, animated heading, live search panel with validation |
| **Search Autocomplete** | Live destination suggestions as you type |
| **Destination Cards** | 6 premium destinations with hover animations, ratings, and prices |
| **Destination Modal** | Detailed info popup with highlights, season, and wishlist toggle |
| **Promo Banner** | Full-width parallax-style section with animated stat cards |
| **Why Us Section** | 4 animated feature cards with micro-interactions |
| **Newsletter** | Email subscription with validation and localStorage deduplication |
| **Wishlist** | Save destinations to wishlist (persisted via localStorage) |
| **Toast Notifications** | Context-aware success/error/info toasts |
| **Scroll Reveal** | Staggered fade-in animations as elements enter the viewport |
| **Parallax Effect** | Subtle hero background movement on scroll |
| **Accessibility** | Semantic HTML5, ARIA labels, keyboard navigation, focus management |
| **SEO** | Meta tags, descriptive title, Open Graph, alt text on all images |

---

## 🛠️ Tech Stack

- **HTML5** — Semantic markup (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **CSS3** — Custom Properties, Flexbox, CSS Grid, Media Queries, `clamp()`, `minmax()`
- **Vanilla JavaScript** — No frameworks, no dependencies, ES6+
- **Google Fonts** — Inter (300–900 weights)
- **Unsplash** — High-quality travel photography (CDN, no download needed)

---

## 📁 Project Structure

```
Task4-Mobile Viewport/
├── index.html      ← Main HTML file (all sections)
├── style.css       ← All styles + media queries
├── script.js       ← All JavaScript functionality
└── README.md       ← This file
```

---

## 🚀 How to Run in VS Code

### Method 1 — Live Server (Recommended)
1. Open VS Code
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions panel
3. Right-click `index.html` → **"Open with Live Server"**
4. Your browser opens automatically at `http://127.0.0.1:5500`

### Method 2 — Direct File Open
1. Navigate to the project folder
2. Double-click `index.html`
3. It opens in your default browser immediately

### Method 3 — VS Code Open in Browser
1. In VS Code, press `Ctrl+Shift+P`
2. Type "Open in Default Browser" and press Enter

---

## 📱 How to Test Responsive Layout in Chrome DevTools

1. Open the site in Chrome
2. Press **`F12`** or **`Ctrl+Shift+I`** to open DevTools
3. Click the **Toggle Device Toolbar** icon (📱) or press **`Ctrl+Shift+M`**
4. Select device presets or type custom widths:

| Breakpoint | Width | What Changes |
|------------|-------|-------------|
| Large Desktop | 1440px+ | Full 3-col grid, wide containers |
| Desktop | 1280px | Standard 3-col destinations |
| Tablet | 1024px | 2-col destinations, stacked promo |
| Mobile | 768px | Hamburger menu, 1-col grid, stacked search |
| Small Phone | 480px | Compact typography, smaller cards |
| Tiny Phone | 375px | Minimal layout, hidden dividers |

**Key things to test:**
- ✅ Hamburger menu opens/closes on mobile
- ✅ Search form stacks vertically on mobile
- ✅ Destination grid adapts from 3 → 2 → 1 columns
- ✅ No horizontal scrollbar at any width
- ✅ All buttons have 44px+ tap targets
- ✅ Images scale without distortion
- ✅ Text remains readable at all sizes

---

## 🎨 Design System

### Color Palette
```css
--color-primary:       #2563EB   /* Vivid blue */
--color-accent:        #0EA5E9   /* Sky blue */
--color-navy:          #0F172A   /* Dark navy headings */
--color-dark:          #1E293B   /* Body text */
--color-surface:       #F8FAFC   /* Off-white backgrounds */
```

### Typography
- Font: **Inter** (Google Fonts)
- Responsive sizing with `clamp()` for fluid headings
- Scale: 12px → 14px → 16px → 18px → 20px → 24px → 30px → 36px → 48px → 60px

### Responsive Units Used
| Unit | Usage |
|------|-------|
| `rem` | Font sizes, padding, margins |
| `%` | Flexible widths |
| `vw` | Full-width sections |
| `clamp()` | Fluid typography |
| `minmax()` | CSS Grid track sizing |
| `svh/vh` | Hero section height |

---

## 📐 CSS Media Query Breakpoints

```css
/* Large Desktop */
@media (min-width: 1440px) { ... }

/* Tablet */
@media (max-width: 1024px) { ... }

/* Tablet Portrait */
@media (max-width: 900px) { ... }

/* Mobile */
@media (max-width: 768px) { ... }

/* Small Phone */
@media (max-width: 480px) { ... }

/* Tiny Phone */
@media (max-width: 375px) { ... }

/* Accessibility */
@media (prefers-reduced-motion: reduce) { ... }

/* Print */
@media print { ... }
```

---

## 🔧 JavaScript Features

| Function | Description |
|----------|-------------|
| `handleSearch()` | Validates destination, date, travelers; shows toast |
| `openDestModal()` | Populates and opens destination detail modal |
| `handleModalWishlist()` | Toggles wishlist state, persists to localStorage |
| `handleNewsletter()` | Email validation with duplicate-check via localStorage |
| `showToast()` | Animated success/error/info notification |
| `updateActiveNavLink()` | Scroll-spy for active nav highlighting |
| `initScrollReveal()` | IntersectionObserver for fade-in animations |
| `initParallax()` | Gentle hero background parallax on scroll |
| `findDestination()` | Fuzzy-match user input to destination data |

---

## 🌐 Git & GitHub Setup

```bash
# 1. Initialize a new repo in the project folder
git init

# 2. Add all files
git add .

# 3. First commit
git commit -m "feat: add Travel Explorer website (Task 4 - Mobile Friendly)"

# 4. Create a new repo on GitHub (go to github.com → New Repository)
#    Name it: travel-explorer  (do NOT initialize with README)

# 5. Connect and push
git remote add origin https://github.com/YOUR_USERNAME/travel-explorer.git
git branch -M main
git push -u origin main
```

> Replace `YOUR_USERNAME` with your actual GitHub username.

---

## ✅ Quality Checklist

- [x] Viewport meta tag present
- [x] No horizontal overflow at any breakpoint
- [x] Hamburger menu works on mobile
- [x] All images have descriptive alt text
- [x] Buttons have minimum 44px tap targets
- [x] Color contrast meets WCAG AA
- [x] Keyboard navigation works throughout
- [x] ARIA labels on all interactive elements
- [x] Form validation with clear error messages
- [x] No broken image links
- [x] Semantic HTML5 structure
- [x] CSS custom properties for consistent design tokens
- [x] Reduced-motion media query for accessibility
- [x] Print stylesheet included

---

## 📸 Sections

1. **Navigation** — Sticky, glassmorphism effect, scroll-spy, mobile hamburger
2. **Hero** — Full-screen Santorini background, animated heading, trip search panel
3. **Popular Destinations** — 6 premium destination cards with modal details
4. **Promo Banner** — Plan your perfect trip CTA with stats overlay
5. **Why Travel With Us** — 4 feature cards with micro-interactions
6. **Newsletter / Contact** — Email subscription with validation
7. **Footer** — Brand, navigation, social links, copyright

---

## 🏆 Internship Task Compliance

| Requirement | Status |
|-------------|--------|
| CSS Media Queries | ✅ 7 breakpoints implemented |
| Mobile-first approach | ✅ Base styles for mobile, enhanced for larger screens |
| Hamburger menu | ✅ Animated, accessible, keyboard-friendly |
| Responsive images | ✅ `object-fit: cover`, scalable |
| Flexible units (rem, %, vw, clamp) | ✅ Throughout |
| Flexbox | ✅ Navigation, search, cards, footer |
| CSS Grid | ✅ Destinations, features, promo, newsletter |
| No horizontal scroll | ✅ Tested at all breakpoints |
| JavaScript interactivity | ✅ Nav, search, modal, toast, newsletter |
| Accessibility (ARIA, alt, focus) | ✅ Implemented |

---

*Built with ❤️ for Web Development Internship — Task 4*
