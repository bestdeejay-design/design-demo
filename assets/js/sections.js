// Data-driven catalog — add new sections and examples here
const SECTIONS = [
  {
    id: 'ui-components',
    icon: '🧩',
    title: 'UI Components',
    desc: 'Карточки, формы, навигация, профили — живые интерактивные примеры',
    examples: [
      { name: 'Product Card', desc: 'Карточка товара: избранное, выбор цвета/размера, корзина с тостами', url: 'ui-components/01-product-card/', tags: ['card', 'e-commerce', 'interactive'] },
      { name: 'Profile Card', desc: 'Карточка профиля: follow/unfollow, табы, сообщения', url: 'ui-components/02-profile-card/', tags: ['card', 'profile', 'tabs'] },
      { name: 'Navigation', desc: 'Адаптивный хедер: active-link, dropdown, mobile-menu, 5 секций', url: 'ui-components/03-navigation/', tags: ['nav', 'header', 'responsive'] }
    ]
  },
  {
    id: 'pages',
    icon: '📄',
    title: 'Pages / Screens',
    desc: 'Цельные страницы и экраны',
    examples: []
  },
  {
    id: 'industrial',
    icon: '🏭',
    title: 'Industrial / HMI',
    desc: 'Промышленный дизайн, приборные панели',
    examples: []
  },
  {
    id: 'interactions',
    icon: '✨',
    title: 'Interactions & Motion',
    desc: 'Анимации, микровзаимодействия',
    examples: []
  },
  {
    id: 'design-systems',
    icon: '🎨',
    title: 'Design Systems',
    desc: 'Гайдлайны, цвета, типографика',
    examples: []
  },
  {
    id: 'patterns',
    icon: '🔁',
    title: 'UX Patterns',
    desc: 'Паттерны решений: auth, онбординг, поиск',
    examples: []
  }
];

function renderCatalog() {
  const container = document.getElementById('catalog');
  container.innerHTML = SECTIONS.map(section => `
    <div class="section-group">
      <div class="section-header">
        <div class="section-icon">${section.icon}</div>
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
        : `<div class="empty-state">Примеры готовятся...</div>`
      }
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderCatalog);
