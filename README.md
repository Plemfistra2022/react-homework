React Routing & Service Architecture
Краткое описание архитектуры приложения с разделением ответственности.

🛠 Реализованные модули:
Router (/router): Централизованная конфигурация путей с использованием createBrowserRouter.

Services (/services): Изолированная логика API-запросов (объект userService).

Constants (/constants): Единое хранилище эндпоинтов (urls) для устранения хардкода.

Layouts (/layouts): Общие шаблоны страниц с использованием <Outlet />.

⚡️ Ключевые фишки:
Location State: Передача объектов между страницами через Link или useNavigate для исключения повторных запросов.

Service Layer: Компоненты не работают с fetch напрямую, а используют методы сервиса.

Clean Routing: Четкое разделение на страницы (pages) и переиспользуемые компоненты (components).

📂 Структура:
router → services → constants → pages → layouts → components