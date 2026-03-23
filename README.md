// Логика загрузки данных в UsersComponent.tsx
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(response => {
    setUsers(response); // Обновляем состояние
  })
}, []) // Пустой массив зависимостей — запрос выполнится один раз

Hooks: Использование useState для хранения данных и useEffect для выполнения сетевого запроса при монтировании компонента.

TypeScript: Применение интерфейсов (например, IUser) и типов для пропсов (UserPropType).

Fetch API: Получение данных с тестового сервиса JSONPlaceholder.

Списки и ключи: Использование метода .map() и обязательного атрибута key для эффективного рендеринга.