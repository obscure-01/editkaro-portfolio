# Editkaro Portfolio Website

A modern, highly responsive, and premium portfolio website designed for a social media marketing and video editing agency. Built entirely from scratch using native web technologies, it features dynamic content rendering, semantic HTML5 structure, and high-performance Vanilla JavaScript.

🌐 **Live Demo:**  https://editkaro-portfolio-web.netlify.app/

📂 **Repository:** https://github.com/obscure-01/editkaro-portfolio

## Overview

The Editkaro Portfolio Website is designed to showcase different categories of video editing work. It relies on a strictly modular CSS architecture (BEM methodology) and dynamic DOM injection to maintain clean, scalable code without relying on modern framework overhead.

## Features

- **Semantic HTML5:** Deeply integrated landmarks, strict heading hierarchy, and accessible ARIA attributes.
- **Responsive Layout:** Mobile-first design perfectly scaled for smartphones, tablets, and wide-screen desktops.
- **Dynamic Rendering:** Cards are dynamically generated securely via JavaScript data structures.
- **Category Filtering:** Smooth, efficient filtering system with event delegation and active state management.
- **Sticky Navigation:** Elegant scroll-detection navigation UI without layout shifting.
- **Modular CSS:** Adheres to variables, resets, component isolation, and main layout layers for scalability.
- **Vanilla JavaScript:** 100% zero-dependency ES6+ implementation ensuring maximum performance.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

## Project Structure

The project code is organized precisely to isolate responsibilities:

```text
/
├── css/
│   ├── variables.css      # Design tokens (colors, typography, spacing)
│   ├── reset.css          # HTML normalizations and accessibility presets
│   ├── components.css     # Buttons, Cards, UI elements
│   └── main.css           # Global layout and structural queries
├── js/
│   ├── data.js            # Isolated portfolio data layer
│   ├── filter.js          # Core logic for rendering and filtering
│   └── main.js            # Initialization and application orchestration
├── stage1.md              # Original Architecture and Design specification
└── index.html             # The semantic document structure
```

## Installation & Setup

To run this project locally, simply clone the repository and serve the files. Because this uses Vanilla JavaScript, no build step is required.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/obscure-01/editkaro-portfolio.git
   ```

2. **Open the project folder:**
   ```bash
   cd editkaro-portfolio
   ```

3. **Run Locally:**
   Use any basic local HTTP server. For example, using Python 3:
   ```bash
   python -m http.server 8080
   ```
   Then navigate to `http://localhost:8080` in your browser.

## Future Improvements

- Implementation of the mobile hamburger menu UI configuration.
- Integration of a dynamic video modal to play embedded portfolio pieces.
- Automated tests for frontend interactions.

## Learning Outcomes

This project demonstrates strong capabilities in building scalable frontends without the crutches of extensive libraries like React or Tailwind, proving a deep understanding of core DOM APIs, CSS cascading logic, and native JavaScript performance optimizations.

## Author

**Aman Chapadiya**

## License

This project is licensed under the [MIT License](LICENSE).
