# Quick & Dirty One Page Template

![License](https://img.shields.io/badge/license-Unlicense-green)
![Alpine.js](https://img.shields.io/badge/Alpine.js-3.14.9-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.16-blue)
![Platform](https://img.shields.io/badge/platform-Web-lightgrey)

## Overview

A straightforward HTML template for single-page websites. Built for quick deployment of documentation, guides, or simple websites. No build tools required - just clone and start customizing.

### Features

- 📱 Works on all devices - desktop, tablet, and mobile
- 📋 Table of contents that follows as you scroll
- 🎨 Clean design with TailwindCSS
- 🖼️ Click images to view them full-screen
- � Tables you can sort by clicking headers
- 💻 Ready-to-use code blocks
- ⬆️ Button to jump back to top

## Technologies 🛠️

- **Alpine.js** (v3.14.9) - Lightweight JavaScript framework for simple interactions
- **TailwindCSS** (v3.4.16) - Utility-first CSS framework
- Vanilla JavaScript for scroll handling
- Plain HTML5

## Quick Start

1. Clone the repository (or download as ZIP)
1. Customize the content to your needs
1. Use TailwindCSS utility classes for styling
1. Open `index.html` in your browser

No build process or dependencies required - ready to use out of the box.

## Project Structure 📂

```
quick_n_dirty_one_page_template/
├── alpinejs3.14.9min.js    # Alpine.js framework
├── favicon.png             # Site favicon
├── index.html             # Main HTML template
├── LICENSE                # Unlicense license file
├── scroll-toc-handler.js  # Scroll functionality
├── style.css             # Custom styling
├── tailwindcss3.4.16.css # TailwindCSS framework
└── tux.webp              # Sample image
```

## Customization

### Adding Sections

1. Add a table of contents entry (`index.html`):

```html
{ id: 'your-section', emoji: '📝', text: 'Section Title' }
```

2. Create the corresponding content section:

```html
<section id="your-section" aria-labelledby="heading-your-section">
  <h2
    id="heading-your-section"
    class="group section-heading text-2xl font-bold mt-10"
  >
    <span
      class="inline-block transform transition-transform duration-200 ease-in-out group-hover:scale-125"
      >📝</span
    >
    Section Title
  </h2>
  <!-- Section content -->
</section>
```

## License

Unlicense

## Author

Created by Max Bergmann.  
Feedback, suggestions, and contributions are always welcome! 🚀
