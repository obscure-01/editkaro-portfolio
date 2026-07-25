// js/filter.js
(() => {
  const createCardHTML = (item) => {
    return `
      <article class="portfolio-card" data-category="${item.category}">
        <figure class="portfolio-card__figure">
          <div class="portfolio-card__image-wrapper">
            <img class="portfolio-card__image" src="${item.thumbnail}" alt="${item.title}" loading="lazy">
            <div class="portfolio-card__overlay">
              <button class="portfolio-card__play-button" aria-label="Play ${item.title}">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
          <figcaption class="portfolio-card__content-wrapper">
            <span class="portfolio-card__badge">${item.categoryLabel}</span>
            <h3 class="portfolio-card__title">${item.title}</h3>
          </figcaption>
        </figure>
      </article>
    `;
  };

  const renderCards = (data, container) => {
    if (!container) return;
    
    // Efficiently clear the DOM container without innerHTML memory leak risks
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    if (!data || data.length === 0) {
      // Empty state handler
      container.innerHTML = '<p class="portfolio__empty" style="text-align:center; padding: 2rem; width: 100%; grid-column: 1 / -1; color: var(--color-text-secondary);">No projects found in this category.</p>';
      return;
    }
    
    // Batch DOM insertion
    const htmlString = data.map(createCardHTML).join('');
    container.insertAdjacentHTML('beforeend', htmlString);
  };

  const init = (data, containerSelector, filterContainerSelector, buttonClass) => {
    const container = document.querySelector(containerSelector);
    const filterContainer = document.querySelector(filterContainerSelector);
    
    if (!container || !filterContainer) {
      console.warn('PortfolioFilter: Required DOM elements not found.');
      return;
    }
    
    // Initial Render of all cards
    renderCards(data, container);
    
    // Event Delegation for Filter Buttons
    filterContainer.addEventListener('click', (e) => {
      const button = e.target.closest(`.${buttonClass}`);
      if (!button) return;
      
      const category = button.getAttribute('data-category');
      if (!category) return;
      
      // Update ARIA and active class states
      const allButtons = filterContainer.querySelectorAll(`.${buttonClass}`);
      allButtons.forEach(btn => {
        btn.classList.remove('button--active');
        btn.setAttribute('aria-pressed', 'false');
      });
      
      button.classList.add('button--active');
      button.setAttribute('aria-pressed', 'true');
      
      // Filter Data logic
      const filteredData = category === 'all' 
        ? data 
        : data.filter(item => item.category === category);
        
      renderCards(filteredData, container);
    });
  };
  
  // Expose to global scope safely
  window.PortfolioFilter = { init };
})();
