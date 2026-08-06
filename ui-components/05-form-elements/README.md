# Form Elements

Полный набор форм-элементов с состояниями: default, focus, error, success, disabled. Mobile-first, touch-friendly.

## Возможности
- ✅ **Text Input** — 5 состояний + с иконками слева/справа + floating label
- ✅ **Textarea** — с character counter, состояния «near limit» / «over limit»
- ✅ **Custom Select** — кастомный dropdown с иконками, анимация, поддержка disabled
- ✅ **Checkbox** — все 3 состояния (checked/unchecked/indeterminate) + disabled
- ✅ **Radio** — с описанием опций, вертикально и горизонтально
- ✅ **Switch / Toggle** — с плавной анимацией переключателя
- ✅ **Slider / Range** — single value + range slider (двойной с min/max)
- ✅ **File Upload** — drop zone с drag-and-drop состоянием
- ✅ **Segmented Control** — для 2-4 связанных опций
- ✅ **Адаптив** — все поля 16px на мобиле (нет iOS-зума), min-height 44px (touch target)

## Когда использовать
- Любая форма в продукте: регистрация, настройки, поиск, фильтры, checkout
- Как **reference-картинка** для дизайнеров и фронтендеров
- Чтобы не изобретать «с нуля» каждый input — копируешь стили

## Технологии
- Чистый HTML/CSS/JS (один файл, ~1100 строк)
- Никаких зависимостей
- CSS-переменные для токенов (легко интегрировать в свою систему)
- JavaScript только для: indeterminate, counter, custom select, sliders, drop zone
- View Code — встроенный просмотрщик с кнопкой Copy

## Состояния (для каждого элемента)
- **Default** — обычное состояние
- **Hover** — усиленный border при наведении
- **Focus** — accent border + 4px focus ring (доступность)
- **Error** — красный border + soft красный фон + сообщение с иконкой
- **Success** — зелёный border + чекмарк
- **Disabled** — opacity 0.5, cursor not-allowed, отдельный фон

## Мобильные особенности
- `font-size: 16px` на инпутах — чтобы iOS Safari не зумил страницу при фокусе
- `min-height: 44px` — соответствие Apple HIG и WCAG 2.5.5 (touch target)
- `border-width: 1.5px` — для лучшей видимости на retina
- Sliders с увеличенным thumb (22px) для пальца
