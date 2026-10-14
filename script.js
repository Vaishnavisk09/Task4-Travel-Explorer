/**
 * Travel Explorer — script.js
 * Interactive functionality for Task 4: Mobile-Friendly Website
 * Includes: nav toggle, search validation, destination modal, newsletter, toast, scroll effects
 */

'use strict';

/* ============================================================
   1. DESTINATION DATA
   ============================================================ */
const DESTINATIONS = {
  santorini: {
    name:       'Santorini',
    country:    'Greece, Europe',
    rating:     '⭐ 4.9 / 5.0',
    price:      'From $1,299',
    season:     'April – October',
    desc:       'Santorini is a volcanic island in the Cyclades group of the Greek islands. Famed for its iconic white-washed Cycladic buildings topped with cobalt-blue domes, dramatic caldera views, stunning sunsets from Oia, and world-class wineries perched on volcanic cliffs.',
    highlights: ['Blue-Domed Churches', 'Caldera Views', 'Sunset at Oia', 'Black Sand Beaches', 'Local Wineries', 'Greek Cuisine'],
    img:        'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=85&auto=format&fit=crop',
    imgAlt:     'Iconic blue-domed churches and white buildings of Santorini, Greece',
  },
  bali: {
    name:       'Bali',
    country:    'Indonesia, Southeast Asia',
    rating:     '⭐ 4.8 / 5.0',
    price:      'From $899',
    season:     'April – October',
    desc:       'Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple, as well as the terraced rice paddies of Tegallalang.',
    highlights: ['Rice Terraces', 'Uluwatu Temple', 'Kuta Beach', 'Ubud Monkey Forest', 'Traditional Dance', 'Surf Culture'],
    img:        'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&q=85&auto=format&fit=crop',
    imgAlt:     'Lush rice terraces and tropical temples of Bali, Indonesia',
  },
  switzerland: {
    name:       'Switzerland',
    country:    'Europe',
    rating:     '⭐ 4.9 / 5.0',
    price:      'From $1,599',
    season:     'December – March (ski) / June – September (hiking)',
    desc:       'Switzerland is a mountainous Central European country known for its ski resorts, spectacular landscapes, and cities that blend medieval heritage and modern luxury. Explore the Matterhorn, Geneva, Zurich, Lucerne, and pristine glacial lakes.',
    highlights: ['Swiss Alps', 'Matterhorn', 'Glacier Express', 'Lake Geneva', 'Zurich Old Town', 'World-Class Skiing'],
    img:        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85&auto=format&fit=crop',
    imgAlt:     'Snow-capped Swiss Alps with pristine mountain lakes',
  },
  amalfi: {
    name:       'Amalfi Coast',
    country:    'Italy, Southern Europe',
    rating:     '⭐ 4.8 / 5.0',
    price:      'From $1,199',
    season:     'May – September',
    desc:       'The Amalfi Coast is a stretch of coastline along the southern edge of Italy\'s Sorrentine Peninsula in the Campania region. A UNESCO World Heritage Site, it\'s celebrated for its dramatic cliffs, picturesque fishing villages, turquoise waters, and exquisite Italian cuisine.',
    highlights: ['Positano Village', 'Ravello Gardens', 'Boat Tours', 'Fresh Seafood', 'Cliffside Drive', 'UNESCO Heritage'],
    img:        'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&q=85&auto=format&fit=crop',
    imgAlt:     'Colourful cliffside villages and turquoise waters of the Amalfi Coast, Italy',
  },
  kyoto: {
    name:       'Kyoto',
    country:    'Japan, East Asia',
    rating:     '⭐ 4.9 / 5.0',
    price:      'From $1,449',
    season:     'March – May (cherry blossom) / October – November (autumn)',
    desc:       'Kyoto, once the capital of Japan, is a city on the island of Honshu. It\'s famous for its numerous classical Buddhist temples, gardens, imperial palaces, Shinto shrines, and traditional wooden houses. The city is also known for formal traditions such as the tea ceremony.',
    highlights: ['Fushimi Inari', 'Arashiyama Bamboo', 'Geisha District', 'Cherry Blossoms', 'Zen Gardens', 'Tea Ceremony'],
    img:        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=85&auto=format&fit=crop',
    imgAlt:     'Traditional torii gates and cherry blossoms in Kyoto, Japan',
  },
  maldives: {
    name:       'Maldives',
    country:    'Indian Ocean',
    rating:     '⭐ 5.0 / 5.0',
    price:      'From $2,199',
    season:     'November – April',
    desc:       'The Maldives is a tropical nation in the Indian Ocean composed of 26 ring-shaped atolls, made up of more than 1,000 coral islands. Known for its beaches, blue lagoons, and extensive reefs, the Maldives is one of the most exclusive luxury destinations on Earth.',
    highlights: ['Overwater Bungalows', 'Crystal Lagoons', 'Snorkeling & Diving', 'Coral Reefs', 'Luxury Resorts', 'Private Beaches'],
    img:        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=85&auto=format&fit=crop',
    imgAlt:     'Crystal-clear turquoise waters and overwater bungalows of the Maldives',
  },
};

/* ============================================================
   2. DOM REFERENCES
   ============================================================ */
const navbar         = document.getElementById('navbar');
const hamburgerBtn   = document.getElementById('hamburger-btn');
const navLinks       = document.getElementById('nav-links');
const searchToggle   = document.getElementById('search-toggle-btn');
const navSearchBar   = document.getElementById('nav-search-bar');
const searchForm     = document.getElementById('search-form');
const destInput      = document.getElementById('hero-search-dest');
const dateInput      = document.getElementById('hero-search-date');
const travelersInput = document.getElementById('hero-search-travelers');
const destModal      = document.getElementById('dest-modal');
const modalClose     = document.getElementById('modal-close-btn');
const toast          = document.getElementById('toast');
const toastMsg       = document.getElementById('toast-message');
const toastIcon      = document.getElementById('toast-icon');
const newsletterForm = document.getElementById('newsletter-form');
const searchTabs     = document.querySelectorAll('.search-tab');
const navLinkItems   = document.querySelectorAll('.nav-link');

let activeDestination = null;
let toastTimer        = null;
let wishlist          = JSON.parse(localStorage.getItem('te_wishlist') || '[]');

/* ============================================================
   3. MOBILE NAV HAMBURGER TOGGLE
   ============================================================ */
function openNav() {
  navLinks.classList.add('open');
  hamburgerBtn.classList.add('active');
  hamburgerBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  navLinks.classList.remove('open');
  hamburgerBtn.classList.remove('active');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburgerBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.contains('open');
  isOpen ? closeNav() : openNav();
});

// Close nav when a link is clicked
navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    closeNav();
    // Active state
    navLinkItems.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Close nav on backdrop click
document.addEventListener('click', (e) => {
  if (navLinks.classList.contains('open') &&
      !navLinks.contains(e.target) &&
      !hamburgerBtn.contains(e.target)) {
    closeNav();
  }
});

// Close nav on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeNav();
    if (!destModal.hidden) closeModal();
    if (!navSearchBar.hidden) toggleNavSearch(false);
  }
});

/* ============================================================
   4. NAVBAR SCROLL BEHAVIOR
   ============================================================ */
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
  updateActiveNavLink();
}, { passive: true });

/* ============================================================
   5. ACTIVE NAV LINK (scroll-spy)
   ============================================================ */
const sections = ['home', 'destinations', 'about', 'contact'];

function updateActiveNavLink() {
  const scrollPos = window.scrollY + 100;

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section && section.offsetTop <= scrollPos) {
      navLinkItems.forEach(link => link.classList.remove('active'));
      const activeLink = document.getElementById('nav-' + sections[i]);
      if (activeLink) activeLink.classList.add('active');
      break;
    }
  }
}

/* ============================================================
   6. NAVBAR SEARCH TOGGLE
   ============================================================ */
function toggleNavSearch(show) {
  if (show === undefined) {
    show = navSearchBar.hidden;
  }
  navSearchBar.hidden = !show;
  if (show) {
    document.getElementById('nav-search-input').focus();
  }
}

searchToggle.addEventListener('click', () => toggleNavSearch());

/* Handle nav search */
function handleNavSearch() {
  const val = document.getElementById('nav-search-input').value.trim();
  if (!val) {
    showToast('Please enter a destination to search.', 'error', '🔍');
    return;
  }

  // Look up in destinations
  const key = findDestination(val);
  if (key) {
    toggleNavSearch(false);
    openDestModal(key);
  } else {
    showToast(`Searching for "${val}"...`, 'info', '🌍');
    setTimeout(() => {
      toggleNavSearch(false);
      document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
    }, 1200);
  }
}

document.getElementById('nav-search-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleNavSearch();
});

function findDestination(query) {
  const q = query.toLowerCase();
  for (const key of Object.keys(DESTINATIONS)) {
    const d = DESTINATIONS[key];
    if (d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q) || key.includes(q)) {
      return key;
    }
  }
  return null;
}

/* ============================================================
   7. DESTINATION AUTOCOMPLETE (simple)
   ============================================================ */
const destinationNames = Object.values(DESTINATIONS).map(d => d.name);

destInput.addEventListener('input', () => {
  clearError('dest-error');
});

destInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    document.getElementById('hero-search-btn').click();
  }
});

/* ============================================================
   8. SEARCH FORM — DATE CONSTRAINTS
   ============================================================ */
// Set minimum date to today
window.addEventListener('DOMContentLoaded', () => {
  const today = new Date();
  const yyyy  = today.getFullYear();
  const mm    = String(today.getMonth() + 1).padStart(2, '0');
  const dd    = String(today.getDate()).padStart(2, '0');
  dateInput.min = `${yyyy}-${mm}-${dd}`;
});

/* ============================================================
   9. SEARCH FORM VALIDATION & SUBMIT
   ============================================================ */
function clearError(id) {
  const el = document.getElementById(id);
  if (el) el.textContent = '';
}

function showError(id, message) {
  const el = document.getElementById(id);
  if (el) el.textContent = message;
}

function validateSearch() {
  let valid = true;
  clearError('dest-error');
  clearError('date-error');

  const dest      = destInput.value.trim();
  const date      = dateInput.value;
  const travelers = travelersInput.value;

  if (!dest) {
    showError('dest-error', 'Please enter a destination.');
    destInput.focus();
    valid = false;
  } else if (dest.length < 2) {
    showError('dest-error', 'Destination must be at least 2 characters.');
    valid = false;
  }

  if (!date) {
    showError('date-error', 'Please choose your travel date.');
    if (valid) dateInput.focus();
    valid = false;
  } else {
    const selected = new Date(date);
    const today    = new Date();
    today.setHours(0, 0, 0, 0);
    if (selected < today) {
      showError('date-error', 'Travel date cannot be in the past.');
      if (valid) dateInput.focus();
      valid = false;
    }
  }

  return valid;
}

function handleSearch(event) {
  event.preventDefault();

  if (!validateSearch()) return;

  const dest      = destInput.value.trim();
  const date      = new Date(dateInput.value);
  const travelers = travelersInput.value || '1';
  const tab       = document.querySelector('.search-tab.active')?.dataset.tab || 'roundtrip';

  const formattedDate = date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
  const tripType = tab === 'roundtrip' ? 'Round Trip' : tab === 'oneway' ? 'One Way' : 'Multi-City';

  showToast(
    `🎉 Searching ${tripType} to ${dest} on ${formattedDate} for ${travelers} traveler(s)!`,
    'success',
    '✈️'
  );

  // Check if destination matches a known one
  setTimeout(() => {
    const key = findDestination(dest);
    if (key) {
      openDestModal(key);
    }
  }, 1800);
}

/* ============================================================
   10. SEARCH TABS
   ============================================================ */
searchTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    searchTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
  });
});

/* ============================================================
   11. DESTINATION MODAL
   ============================================================ */
function openDestModal(key) {
  const dest = DESTINATIONS[key];
  if (!dest) return;

  activeDestination = key;

  // Populate modal
  document.getElementById('modal-img').src    = dest.img;
  document.getElementById('modal-img').alt    = dest.imgAlt;
  document.getElementById('modal-rating').textContent  = dest.rating;
  document.getElementById('modal-country').textContent = dest.country;
  document.getElementById('modal-dest-name').textContent = dest.name;
  document.getElementById('modal-desc').textContent     = dest.desc;
  document.getElementById('modal-season').textContent   = dest.season;
  document.getElementById('modal-price').textContent    = dest.price;

  // Highlights
  const hlContainer = document.getElementById('modal-highlights');
  hlContainer.innerHTML = dest.highlights.map(h =>
    `<span class="modal-highlight-tag">✦ ${h}</span>`
  ).join('');

  // Update wishlist button
  const wlBtn = document.getElementById('modal-wishlist-btn');
  const inWishlist = wishlist.includes(key);
  wlBtn.textContent = inWishlist ? '♥ Saved to Wishlist' : 'Save to Wishlist ♥';
  wlBtn.style.background = inWishlist ? '#FEF2F2' : '';
  wlBtn.style.color = inWishlist ? '#EF4444' : '';
  wlBtn.style.borderColor = inWishlist ? '#EF4444' : '';

  // Show modal
  destModal.hidden = false;
  document.body.style.overflow = 'hidden';

  // Focus modal
  setTimeout(() => {
    modalClose.focus();
  }, 50);
}

function closeModal() {
  destModal.hidden = true;
  document.body.style.overflow = '';
  activeDestination = null;
}

modalClose.addEventListener('click', closeModal);

destModal.addEventListener('click', (e) => {
  if (e.target === destModal) closeModal();
});

function handleModalBook() {
  if (!activeDestination) return;
  const dest = DESTINATIONS[activeDestination];
  closeModal();
  showToast(
    `🌍 Setting up your trip to ${dest.name}! Redirecting to planner...`,
    'success',
    '✈️'
  );
  setTimeout(() => {
    destInput.value = dest.name;
    destInput.focus();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  }, 1500);
}

function handleModalWishlist() {
  if (!activeDestination) return;
  const dest = DESTINATIONS[activeDestination];
  const inWishlist = wishlist.includes(activeDestination);

  if (inWishlist) {
    wishlist = wishlist.filter(k => k !== activeDestination);
    showToast(`Removed ${dest.name} from wishlist.`, 'info', '💔');
  } else {
    wishlist.push(activeDestination);
    showToast(`${dest.name} added to your wishlist! ♥`, 'success', '❤️');
  }

  localStorage.setItem('te_wishlist', JSON.stringify(wishlist));

  // Update button
  const wlBtn = document.getElementById('modal-wishlist-btn');
  const nowInWishlist = wishlist.includes(activeDestination);
  wlBtn.textContent = nowInWishlist ? '♥ Saved to Wishlist' : 'Save to Wishlist ♥';
  wlBtn.style.background = nowInWishlist ? '#FEF2F2' : '';
  wlBtn.style.color = nowInWishlist ? '#EF4444' : '';
  wlBtn.style.borderColor = nowInWishlist ? '#EF4444' : '';
}

// Keyboard: open modal on Enter/Space for destination cards
document.getElementById('destinations-grid').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    const card = e.target.closest('[data-destination]');
    if (card) {
      e.preventDefault();
      openDestModal(card.dataset.destination);
    }
  }
});

/* ============================================================
   12. VIEW ALL DESTINATIONS
   ============================================================ */
function showAllDestinations(e) {
  e.preventDefault();
  showToast('🌍 All 500+ destinations coming soon! Meanwhile, explore our featured picks below.', 'info', '🗺️');
  document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
}

/* ============================================================
   13. NEWSLETTER FORM
   ============================================================ */
const subscribedEmails = JSON.parse(localStorage.getItem('te_subscribed') || '[]');

function handleNewsletter(event) {
  event.preventDefault();
  const emailInput = document.getElementById('newsletter-email');
  const email      = emailInput.value.trim();
  const errorEl    = document.getElementById('newsletter-error');

  errorEl.textContent = '';

  if (!email) {
    errorEl.textContent = 'Please enter your email address.';
    emailInput.focus();
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorEl.textContent = 'Please enter a valid email address.';
    emailInput.focus();
    return;
  }

  if (subscribedEmails.includes(email.toLowerCase())) {
    showToast(`You're already subscribed with ${email}!`, 'info', '📬');
    return;
  }

  subscribedEmails.push(email.toLowerCase());
  localStorage.setItem('te_subscribed', JSON.stringify(subscribedEmails));

  emailInput.value = '';
  showToast(`🎉 Welcome aboard! Check your inbox at ${email} for travel inspiration.`, 'success', '✉️');
}

/* ============================================================
   14. TOAST NOTIFICATION
   ============================================================ */
function showToast(message, type = 'info', icon = 'ℹ️') {
  clearTimeout(toastTimer);

  toastMsg.textContent  = message;
  toastIcon.textContent = icon;
  toast.className       = `toast ${type}`;
  toast.hidden          = false;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });
  });

  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => { toast.hidden = true; }, 400);
  }, 4500);
}

/* ============================================================
   15. SCROLL REVEAL ANIMATION
   ============================================================ */
function initScrollReveal() {
  const revealEls    = document.querySelectorAll('.reveal');
  const staggerEls   = document.querySelectorAll('.reveal-stagger');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
  staggerEls.forEach(el => observer.observe(el));
}

/* ============================================================
   16. ADD REVEAL CLASSES DYNAMICALLY
   ============================================================ */
function addRevealClasses() {
  // Section headers
  document.querySelectorAll('.section-header').forEach(el => el.classList.add('reveal'));

  // Destination cards
  const grid = document.getElementById('destinations-grid');
  if (grid) grid.classList.add('reveal-stagger');

  // Feature cards
  const featuresGrid = document.querySelector('.features-grid');
  if (featuresGrid) featuresGrid.classList.add('reveal-stagger');

  // Promo content
  document.querySelectorAll('.promo-text, .promo-stats').forEach(el => el.classList.add('reveal'));

  // Newsletter
  document.querySelector('.newsletter-content')?.classList.add('reveal');
  document.querySelector('.newsletter-image')?.classList.add('reveal');

  // Footer brand
  document.querySelector('.footer-brand')?.classList.add('reveal');
}

/* ============================================================
   17. SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ============================================================
   18. DESTINATION CARD KEYBOARD ACCESSIBILITY
   ============================================================ */
function initCardKeyboard() {
  document.querySelectorAll('.dest-card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.destination;
      if (key) openDestModal(key);
    });
  });
}

/* ============================================================
   19. HERO BACKGROUND PARALLAX (gentle)
   ============================================================ */
function initParallax() {
  const heroBg = document.getElementById('hero-bg-img');
  if (!heroBg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxParallax = 80;
    const offset = Math.min(scrollY * 0.3, maxParallax);
    heroBg.style.transform = `translateY(${offset}px)`;
  }, { passive: true });
}

/* ============================================================
   20. LAZY IMAGE LOAD (fallback for older browsers)
   ============================================================ */
function initLazyImages() {
  if ('loading' in HTMLImageElement.prototype) return; // Native lazy loading supported

  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        io.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => io.observe(img));
}

/* ============================================================
   21. HERO SEARCH — LIVE SUGGESTION (simple)
   ============================================================ */
let suggestionsEl = null;

destInput.addEventListener('input', () => {
  const val = destInput.value.trim().toLowerCase();
  clearError('dest-error');

  if (suggestionsEl) {
    suggestionsEl.remove();
    suggestionsEl = null;
  }

  if (val.length < 1) return;

  const matches = Object.keys(DESTINATIONS).filter(key => {
    const d = DESTINATIONS[key];
    return d.name.toLowerCase().includes(val) || d.country.toLowerCase().includes(val);
  });

  if (!matches.length) return;

  suggestionsEl = document.createElement('ul');
  suggestionsEl.className   = 'search-suggestions';
  suggestionsEl.setAttribute('role', 'listbox');
  suggestionsEl.setAttribute('aria-label', 'Destination suggestions');

  matches.forEach(key => {
    const d  = DESTINATIONS[key];
    const li = document.createElement('li');
    li.className = 'search-suggestion-item';
    li.setAttribute('role', 'option');
    li.setAttribute('tabindex', '0');
    li.innerHTML = `
      <span class="sug-icon">📍</span>
      <span class="sug-name">${d.name}</span>
      <span class="sug-country">${d.country}</span>
    `;
    li.addEventListener('click', () => {
      destInput.value = d.name;
      suggestionsEl.remove();
      suggestionsEl = null;
    });
    li.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        destInput.value = d.name;
        suggestionsEl.remove();
        suggestionsEl = null;
      }
    });
    suggestionsEl.appendChild(li);
  });

  const searchField = document.getElementById('dest-field');
  searchField.style.position = 'relative';
  searchField.appendChild(suggestionsEl);
});

// Close suggestions when clicking outside
document.addEventListener('click', (e) => {
  if (suggestionsEl && !suggestionsEl.contains(e.target) && e.target !== destInput) {
    suggestionsEl.remove();
    suggestionsEl = null;
  }
});

/* ============================================================
   22. INJECT SUGGESTION STYLES
   ============================================================ */
function injectSuggestionStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .search-suggestions {
      position: absolute;
      top: calc(100% + 6px);
      left: 0; right: 0;
      background: #fff;
      border: 1.5px solid #E2E8F0;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.12);
      z-index: 500;
      overflow: hidden;
      list-style: none;
      padding: 6px;
    }

    .search-suggestion-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 12px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.15s ease;
    }

    .search-suggestion-item:hover,
    .search-suggestion-item:focus {
      background: #DBEAFE;
      outline: none;
    }

    .sug-icon { font-size: 14px; }

    .sug-name {
      font-size: 14px;
      font-weight: 600;
      color: #0F172A;
      flex: 1;
    }

    .sug-country {
      font-size: 12px;
      color: #94A3B8;
    }
  `;
  document.head.appendChild(style);
}

/* ============================================================
   23. HERO SEARCH AUTOCOMPLETE KEYBOARD NAV
   ============================================================ */
destInput.addEventListener('keydown', (e) => {
  if (!suggestionsEl) return;

  const items = suggestionsEl.querySelectorAll('.search-suggestion-item');
  const focused = suggestionsEl.querySelector(':focus');
  const idx = Array.from(items).indexOf(focused);

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    (items[idx + 1] || items[0])?.focus();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    (items[idx - 1] || items[items.length - 1])?.focus();
  } else if (e.key === 'Escape') {
    suggestionsEl.remove();
    suggestionsEl = null;
  }
});

/* ============================================================
   24. INITIALISE EVERYTHING ON DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  addRevealClasses();
  initScrollReveal();
  initSmoothScroll();
  initCardKeyboard();
  initParallax();
  initLazyImages();
  injectSuggestionStyles();

  // Set today as default date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const yyyy = tomorrow.getFullYear();
  const mm   = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const dd   = String(tomorrow.getDate()).padStart(2, '0');
  dateInput.value = `${yyyy}-${mm}-${dd}`;

  console.log(
    '%c✈ Travel Explorer — Loaded Successfully %c\nTask 4: Mobile-Friendly Website | Web Dev Internship',
    'color: #2563EB; font-size: 16px; font-weight: bold;',
    'color: #475569; font-size: 12px;'
  );
});
