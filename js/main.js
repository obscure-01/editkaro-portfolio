// js/main.js
document.addEventListener('DOMContentLoaded', () => {

  // 1. Initialize Portfolio Data and Filters
  if (typeof window.portfolioData !== 'undefined' && typeof window.PortfolioFilter !== 'undefined') {
    window.PortfolioFilter.init(
      window.portfolioData, 
      '.portfolio__grid', 
      '.filters__container', 
      'button--filter'
    );
  } else {
    console.warn('Portfolio initialization failed: Data or Filter module not loaded.');
  }

  // 2. Initialize Sticky Navbar
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  
  if (header && hero) {
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    
    const handleScroll = () => {
      // Add scrolled class when user passes halfway through the hero section
      if (window.scrollY > (heroBottom / 2)) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    
    // Initial check in case of page reload halfway down
    handleScroll();
    
    // Passive listener prevents scroll blocking
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // 3. Initialize Mobile Menu (Graceful Handling)
  const navToggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');
  
  if (navToggle && navList) {
    const closeMenu = () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navList.style.display = ''; 
    };

    const openMenu = () => {
      navToggle.setAttribute('aria-expanded', 'true');
      // Inline styles used as a fallback since CSS cannot be modified for a new class
      navList.style.display = 'flex';
      navList.style.flexDirection = 'column';
      navList.style.position = 'absolute';
      navList.style.top = '100%';
      navList.style.left = '0';
      navList.style.width = '100%';
      navList.style.backgroundColor = 'var(--color-bg-secondary, #151C2C)';
      navList.style.padding = '16px';
      navList.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.5)';
      navList.style.gap = '16px';
    };

    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded && !e.target.closest('.nav')) {
        closeMenu();
      }
    });

    // Close on ESC key for accessibility
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
          closeMenu();
          navToggle.focus();
        }
      }
    });

    // Close on navigation link click
    const navLinks = navList.querySelectorAll('.nav__link, .button');
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  } else {
    // Documenting missing Stage 2 HTML gracefully as required
    console.info('Mobile menu toggle (.nav__toggle) not found in DOM. Gracefully skipping mobile menu initialization.');
  }

  // 4. Initialize Footer Year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  } else {
    // Documenting missing Stage 2 HTML gracefully as required
    console.info('Footer year element (#current-year) not found. Gracefully skipping footer initialization.');
  }

});
