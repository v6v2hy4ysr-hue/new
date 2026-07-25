# Отсутствующие / особые ресурсы

## Изображения
Все 446 комбинаций слоёв конструктора скачаны в `constructor/assets/images/calc/`.
Ранее сбойный файл успешно получен при повторе:
- `https://www.grad-ex.ru/images/calc/krest/kpa15p0.png` → `assets/images/calc/krest/kpa15p0.png`

Примеры макета заказа:
- `https://www.grad-ex.ru/templates/t3_bs3_blank/images/wincalcimgs/s/{1..4}.jpg`
  → `assets/images/wincalcimgs/{1..4}.jpg`

## Отправка формы (без изменения логики обработчика)
Оригинал: `POST window.location.href + '?format=json'` на странице конструктора.

В копии URL зафиксирован на тот же обработчик:
`POST https://www.grad-ex.ru/konstruktor-pamyatnikov?format=json`

Параметры формы (serialize), method=POST — без изменений.
В hidden-полях путей к картинкам сохранены серверные значения `/images/calc/...`,
чтобы бэкенд Grad-Ex собирал макет как на оригинале. Отображение идёт с локальных `assets/images/calc/...`.

## CORS / cookies
При вставке на Tilda (другой домен) браузер может блокировать AJAX и cookies к `grad-ex.ru`,
если на сервере Grad-Ex не разрешён CORS / `Access-Control-Allow-Credentials`.
Это ограничение браузера, не копии. На том же домене `grad-ex.ru` поведение идентично оригиналу.

## Внешние сервисы (оставлены как в оригинале, не локализуются)
- Яндекс.Метрика `yaCounter38341515.reachGoal('kalkul')` — обёрнуто в try/catch
- Calltouch, BotFAQtor, click.ru, VK openapi — не входят в конструктор, не переносились

## Галерея над конструктором
Слайдер Widgetkit с `/images/konstruktor-pamyatnikov/*.png` — часть страницы, не самого калькулятора.
Не включён. При необходимости скачать с:
`https://www.grad-ex.ru/images/konstruktor-pamyatnikov/`

## Как использовать

### Локальная копия / свой хостинг
1. Залейте папку `constructor/` на сервер.
2. Откройте `constructor/constructor.html`.
3. CSS: `style.css`, JS: `script.js`, ресурсы: `assets/`.

### Tilda (блок T123)
1. Загрузите папку `constructor/assets/` в файловый менеджер Tilda или на свой CDN.
2. Откройте `tilda-constructor.html`, при необходимости замените пути `assets/...` на URL загруженных файлов.
3. Вставьте содержимое файла в блок **T123** (HTML-код).
4. CSS и JS уже встроены; внешние CDN не используются.

### Отправка заявок
Форма шлёт `POST` на:
`https://www.grad-ex.ru/konstruktor-pamyatnikov?format=json`
с теми же полями, что и оригинал. Пути картинок в hidden-полях — `/images/calc/...` (как ожидает сервер Grad-Ex).
