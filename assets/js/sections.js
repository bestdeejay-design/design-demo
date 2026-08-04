// Feather icons (MIT) — used under MIT license: https://github.com/feathericons/feather
const SVG_ICONS = {
  grid:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  file:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  monitor:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  zap:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  layers:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  repeat:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
};

// Data-driven catalog — add new sections and examples here
const SECTIONS = [
  {
    id: 'ui-components',
    icon: 'grid',
    title: 'UI Components',
    desc: 'Cards, forms, navigation, profiles — live interactive examples',
    examples: [
      { name: 'Product Card', desc: 'Product card with wishlist, color/size selection, cart toasts', url: 'ui-components/01-product-card/', tags: ['card', 'e-commerce', 'interactive'] },
      { name: 'Profile Card', desc: 'Profile card with follow/unfollow, tabs, messaging', url: 'ui-components/02-profile-card/', tags: ['card', 'profile', 'tabs'] },
      { name: 'Navigation', desc: 'Responsive header with active-link, dropdown, mobile menu, 5 sections', url: 'ui-components/03-navigation/', tags: ['nav', 'header', 'responsive'] },
      { name: 'Cosmic System', desc: 'Interactive solar system with parallax starfield, clickable planets and warp-speed effect', url: 'ui-components/04-cosmic-system/', tags: ['canvas', 'animation', 'space', 'interactive'] }
    ]
  },
  {
    id: 'pages',
    icon: 'file',
    title: 'Pages / Screens',
    desc: 'Full pages and screens',
    examples: []
  },
  {
    id: 'industrial',
    icon: 'monitor',
    title: 'Industrial / HMI',
    desc: 'Industrial design, instrument panels',
    examples: []
  },
  {
    id: 'interactions',
    icon: 'zap',
    title: 'Interactions & Motion',
    desc: 'Animations, microinteractions',
    examples: []
  },
  {
    id: 'design-systems',
    icon: 'layers',
    title: 'Design Systems',
    desc: 'Guidelines, colors, typography',
    examples: []
  },
  {
    id: 'patterns',
    icon: 'repeat',
    title: 'UX Patterns',
    desc: 'UX patterns: auth, onboarding, search',
    examples: []
  }
];

function renderCatalog() {
  const container = document.getElementById('catalog');
  container.innerHTML = SECTIONS.map(section => `
    <div class="section-group">
      <div class="section-header">
        <div class="section-icon">${SVG_ICONS[section.icon] || ''}</div>
        <div class="section-title">${section.title}</div>
        <div class="section-desc">${section.desc}</div>
      </div>
      ${section.examples.length > 0
        ? `<div class="examples-grid">${section.examples.map(ex => `
            <a href="${ex.url}" class="example-card">
              <div class="thumb">
                <img src="${ex.url}preview.png" alt="${ex.name}" loading="lazy" onerror="this.parentElement.innerHTML='<span>${ex.name.charAt(0)}</span>'">
              </div>
              <div class="name">${ex.name}</div>
              <div class="desc">${ex.desc}</div>
              <div class="tags">${ex.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
            </a>
          `).join('')}</div>`
        : `<div class="empty-state">Coming soon...</div>`
      }
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderCatalog);
