// Feather icons (MIT) — used under MIT license: https://github.com/feathericons/feather
const SVG_ICONS = {
  grid:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  file:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  monitor:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  zap:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  layers:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  repeat:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
  edit:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  bell:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  message:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  toggle:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="16" cy="12" r="3"/></svg>`,
  circle:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>`,
  tag:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  loader:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>`,
  bar:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`,
  user:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  search:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  smartphone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  gauge:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14l4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>`,
  cpu:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
  music:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  mouse:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="M13 13l6 6"/></svg>`,
  move:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>`,
  log_in:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>`,
  compass:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  filter:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  inbox:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>`,
  alert:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  shield:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
};

// Data-driven catalog — add new sections and examples here
const SECTIONS = [
  {
    id: 'ui-components',
    icon: 'grid',
    title: 'UI Components',
    desc: 'Переиспользуемые блоки: формы, карточки, навигация, оверлеи — всё, что нужно для интерфейса',
    examples: [
      { name: 'Product Card',     desc: 'Карточка товара с wishlist, выбором цвета/размера, корзиной',         url: 'ui-components/01-product-card/',  tags: ['card', 'e-commerce', 'interactive'], badge: null },
      { name: 'Profile Card',     desc: 'Карточка профиля с follow/unfollow, табами и сообщением',                url: 'ui-components/02-profile-card/',  tags: ['card', 'social', 'tabs'],          badge: null },
      { name: 'Navigation',       desc: 'Адаптивный хедер с active-link, dropdown, mobile menu, scroll-spy',     url: 'ui-components/03-navigation/',    tags: ['nav', 'header', 'responsive'],     badge: null },
      { name: 'Cosmic System',    desc: 'Интерактивная солнечная система с параллакс-звёздами и warp-эффектом',  url: 'ui-components/04-cosmic-system/', tags: ['canvas', 'animation', 'space'],    badge: null },
      { name: 'Form Elements',    desc: 'Инпуты, селекты, чекбоксы, радио, переключатели, слайдеры — все состояния', url: 'ui-components/05-form-elements/', tags: ['form', 'input', 'mobile'],         badge: 'new' },
      { name: 'Modal & Dialog',   desc: 'Модалки, драверы, боттом-шиты на мобиле, confirm, alert — все варианты',     url: 'ui-components/06-modal/',         tags: ['modal', 'overlay', 'mobile'],      badge: 'new' },
      { name: 'Tabs',             desc: 'Горизонтальные, вертикальные, pill, scrollable на мобиле',                   url: 'ui-components/07-tabs/',          tags: ['tabs', 'navigation'],              badge: 'new' },
      { name: 'Toast & Notification', desc: 'Стек уведомлений, варианты success/error/info, позиции',                 url: 'ui-components/08-toast/',         tags: ['feedback', 'notification'],       badge: 'new' },
      { name: 'Tooltip',          desc: 'Hover-tooltip на десктопе, tap-tooltip на мобиле, 4 направления',          url: 'ui-components/09-tooltip/',        tags: ['tooltip', 'overlay'],              badge: 'new' },
      { name: 'Accordion',        desc: 'Раскрывающиеся секции, single/multi-expand, с иконками',                    url: 'ui-components/10-accordion/',     tags: ['accordion', 'collapse'],          badge: 'new' },
      { name: 'Badge & Tag',      desc: 'Бейджи, теги, чипсы, removable, с иконками и счётчиками',                   url: 'ui-components/11-badge/',         tags: ['badge', 'tag', 'chip'],            badge: 'new' },
      { name: 'Skeleton Loader',  desc: 'Шиммер-карточки, списки, таблицы — для состояний загрузки',                url: 'ui-components/12-skeleton/',      tags: ['loader', 'skeleton', 'shimmer'],   badge: 'new' },
      { name: 'Progress',         desc: 'Линейный, круговой, степпер, индикатор загрузки с анимацией',               url: 'ui-components/13-progress/',      tags: ['progress', 'loader', 'steps'],     badge: 'new' },
      { name: 'Avatar',           desc: 'Одиночный, группа, размеры, статус (online/offline/busy)',                  url: 'ui-components/14-avatar/',        tags: ['avatar', 'user', 'group'],         badge: 'new' },
      { name: 'Search Bar',       desc: 'С автокомплитом, recent, suggestions, debounce',                             url: 'ui-components/15-search/',        tags: ['search', 'autocomplete'],          badge: 'new' },
      { name: 'Button Kit',       desc: 'Все варианты кнопок: primary, outline, ghost, danger, sizes, loading, like', url: 'ui-components/16-buttons/',      tags: ['button', 'actions', 'states'],    badge: 'new' },
      { name: 'Breadcrumbs & Stepper', desc: 'Хлебные крошки (chevron/slash/dot), коллапс длинных путей, степперы', url: 'ui-components/17-breadcrumbs/', tags: ['breadcrumbs', 'stepper', 'steps'], badge: 'new' },
      { name: 'Lists',            desc: 'Списки: простые, с иконками, аватарами, чекбоксами, drag-and-drop',       url: 'ui-components/18-lists/',         tags: ['list', 'group', 'reorder'],        badge: 'new' },
      { name: 'Data Table',       desc: 'Сортируемая таблица, фильтр, выбор строк, статусы, пагинация',             url: 'ui-components/19-data-table/',    tags: ['table', 'data', 'sortable'],       badge: 'new' },
      { name: 'Context Menu',     desc: 'Кастомное контекстное меню: правый клик, клавиатура, позиции',             url: 'ui-components/20-context-menu/',  tags: ['menu', 'context', 'keyboard'],     badge: 'new' },
      { name: 'Select & Dropdown',desc: 'Кастомные селекты: одиночный с поиском, мульти-селект с чипсами',         url: 'ui-components/21-selects/',       tags: ['select', 'dropdown', 'multiselect'], badge: 'new' },
    ]
  },
  {
    id: 'pages',
    icon: 'file',
    title: 'Pages / Screens',
    desc: 'Цельные страницы и экраны — auth, дашборд, мобильное приложение, настройки',
    examples: [
      { name: 'Auth — Sign In / Up',  desc: 'Логин, регистрация, восстановление пароля, соц-кнопки, валидация',  url: 'pages/01-auth/',                tags: ['auth', 'form', 'responsive'],  badge: 'new' },
      { name: 'Mobile App Shell',     desc: 'Мобильное приложение с bottom-nav, табами, страницами Home/Profile', url: 'pages/02-mobile-app/',          tags: ['mobile', 'app', 'bottom-nav'], badge: 'new' },
      { name: 'Dashboard',            desc: 'Десктопный дашборд с сайдбаром, статистикой, таблицей, графиками',  url: 'pages/03-dashboard/',           tags: ['dashboard', 'admin', 'desktop'], badge: 'new' },
      { name: 'Settings',             desc: 'Страница настроек с боковой навигацией, переключателями, формами',  url: 'pages/04-settings/',            tags: ['settings', 'profile', 'form'],  badge: 'new' },
      { name: 'Pricing',              desc: 'Тарифы с переключателем месяц/год, FAQ, отзывы, гарантия',            url: 'pages/05-pricing/',             tags: ['pricing', 'billing', 'saas'],   badge: 'new' },
      { name: 'Landing Page',         desc: 'Лендинг SaaS: hero, фичи, шаги, счётчики, отзывы, CTA',               url: 'pages/06-landing/',             tags: ['landing', 'marketing', 'hero'], badge: 'new' },
    ]
  },
  {
    id: 'charts',
    icon: 'bar',
    title: 'Charts / Data Viz',
    desc: 'Графики, дашборды аналитики, визуализация данных — на чистом SVG',
    examples: [
      { name: 'Analytics Charts',  desc: 'Line/area, bar, donut — периоды 7/30/90 дней, KPI, тултипы',      url: 'charts/01-analytics/',          tags: ['charts', 'analytics', 'svg'], badge: 'new' },
    ]
  },
  {
    id: 'dashboard',
    icon: 'gauge',
    title: 'Dashboard Templates',
    desc: 'Премиальные шаблоны панелей управления: сайдбар, виджеты, уведомления',
    examples: [
      { name: 'Premium Dashboard', desc: 'Сайдбар с коллапсом, поиск, уведомления, спарклайны, задачи',     url: 'dashboard/01-premium/',         tags: ['dashboard', 'premium', 'admin'], badge: 'new' },
    ]
  },
  {
    id: 'design-systems',
    icon: 'layers',
    title: 'Design Systems',
    desc: 'Гайдлайны, токены, типографика, иконки, сетка — фундамент дизайн-системы',
    examples: [
      { name: 'Design Tokens',     desc: 'Все токены в одном месте: цвета, шрифты, отступы, тени, движение',  url: 'design-systems/index.html', preview: 'design-systems/preview.png', tags: ['tokens', 'foundations', 'spec'], badge: 'new' },
      { name: 'Iconography',       desc: 'Иконки feather/lucide, размеры, использование, примеры',              url: 'design-systems/icons.html', preview: 'design-systems/icons-preview.png', tags: ['icons', 'system'],                badge: 'new' },
      { name: 'Typography',        desc: 'Шкала шрифтов, начертания, line-height, заголовки, body',           url: 'design-systems/typography.html', preview: 'design-systems/typography-preview.png', tags: ['typography', 'scale'],            badge: 'new' },
    ]
  },
  {
    id: 'interactions',
    icon: 'zap',
    title: 'Interactions & Motion',
    desc: 'Анимации, микровзаимодействия, canvas-эффекты — то, что делает интерфейс живым',
    examples: [
      { name: 'Particle Network',  desc: 'Анимированная сеть частиц на canvas, реагирует на курсор',         url: 'interactions/01-particles/',    tags: ['canvas', 'animation', 'network'], badge: 'new' },
      { name: 'Audio Visualizer',  desc: 'Визуализатор звука с микрофоном или треком, разные стили',           url: 'interactions/02-audio/',        tags: ['audio', 'canvas', 'visualizer'],   badge: 'new' },
      { name: '3D Card Tilt',      desc: 'Карточки с 3D-наклоном по движению мыши, параллакс-блик',           url: 'interactions/03-tilt/',         tags: ['3d', 'tilt', 'mouse'],             badge: 'new' },
      { name: 'Magnetic Cursor',   desc: 'Курсор с магнитным притяжением к интерактивным элементам',         url: 'interactions/04-magnetic/',     tags: ['cursor', 'mouse', 'magnetic'],      badge: 'new' },
    ]
  },
  {
    id: 'patterns',
    icon: 'repeat',
    title: 'UX Patterns',
    desc: 'Готовые флоу для типичных сценариев — онбординг, поиск, пустые состояния, ошибки',
    examples: [
      { name: 'Auth Flow',         desc: 'Sign up, email verify, welcome — с прогрессом и состояниями',        url: 'patterns/01-auth-flow/',         tags: ['auth', 'onboarding', 'flow'],     badge: 'new' },
      { name: 'Onboarding',        desc: '3-шаговый онбординг с прогрессом, skip, иллюстрациями',           url: 'patterns/02-onboarding/',        tags: ['onboarding', 'steps'],             badge: 'new' },
      { name: 'Search & Filter',   desc: 'Поиск с фасетами, активные фильтры, сортировка, результаты',     url: 'patterns/03-search-filter/',     tags: ['search', 'filter', 'results'],    badge: 'new' },
      { name: 'Empty States',      desc: 'Набор красивых пустых состояний для разных контекстов',          url: 'patterns/04-empty-states/',      tags: ['empty', 'state', 'illustration'], badge: 'new' },
      { name: 'Error States',      desc: '404, 500, network error, form validation, cta-варианты',          url: 'patterns/05-error-states/',      tags: ['error', '404', '500'],             badge: 'new' },
    ]
  },
  {
    id: 'industrial',
    icon: 'monitor',
    title: 'Industrial / HMI',
    desc: 'Промышленный дизайн, приборные панели, дашборды для IoT и управления',
    examples: [
      { name: 'Gauge Panel',       desc: 'Круговые и радиальные датчики, статус-индикаторы, live-данные', url: 'industrial/01-gauge/',           tags: ['hmi', 'gauge', 'industrial'],     badge: 'new' },
      { name: 'Control Dashboard', desc: 'Панель оператора: телеметрия, алерты, контролы, история',         url: 'industrial/02-control/',         tags: ['hmi', 'iot', 'control'],          badge: 'new' },
    ]
  },
];

function renderCatalog() {
  const container = document.getElementById('catalog');
  if (!container) return;
  container.innerHTML = SECTIONS.map(section => {
    const ids = section.examples
      .map(e => (e.url || '').replace(/^\/+|\/+$/g, '').split('/')[0])
      .filter(Boolean);
    const count = section.examples.length;
    return `
    <div class="section-group" id="${section.id}">
      <div class="section-header">
        <div class="section-icon">${SVG_ICONS[section.icon] || ''}</div>
        <div class="section-titles">
          <div class="section-title">${section.title}</div>
          <div class="section-desc">${section.desc}</div>
        </div>
        <div class="section-count">${count} ${pluralRu(count, ['элемент', 'элемента', 'элементов'])}</div>
      </div>
      ${section.examples.length > 0
        ? `<div class="examples-grid">${section.examples.map(ex => {
            const fallback = (ex.name || '?').charAt(0);
            // preview path: explicit field, or url + 'preview.png' for dir-style links
            const previewSrc = ex.preview
              || (ex.url.endsWith('/') ? ex.url + 'preview.png' : '');
            const thumb = previewSrc
              ? `<img src="${previewSrc}" alt="${ex.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.innerHTML='<span>${fallback}</span>'">`
              : `<span>${fallback}</span>`;
            return `
            <a href="${ex.url}" class="example-card">
              ${ex.badge === 'new' ? '<div class="badge-new">new</div>' : ''}
              ${ex.badge === 'soon' ? '<div class="badge-new" style="background:var(--text-2)">soon</div>' : ''}
              <div class="thumb">
                ${thumb}
              </div>
              <div class="name">${ex.name}</div>
              <div class="desc">${ex.desc}</div>
              <div class="tags">${(ex.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}</div>
            </a>`;
          }).join('')}</div>`
        : `<div class="empty-state">Скоро…</div>`
      }
    </div>
  `;
  }).join('');
}

function pluralRu(n, forms) {
  const a = n % 100;
  if (a >= 11 && a <= 14) return forms[2];
  const b = n % 10;
  if (b === 1) return forms[0];
  if (b >= 2 && b <= 4) return forms[1];
  return forms[2];
}

document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  document.dispatchEvent(new CustomEvent('catalog:rendered'));
});
