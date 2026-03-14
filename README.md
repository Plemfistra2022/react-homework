Components 🧩
Где: src/components/, файлы .tsx.
Быстро: rsc + TAB — создает шаблон.
Главное: Вызываем как тег <MyComponent />, а не как функцию.

💻 Примеры кода
1. Обычная функция (Простой способ):

TypeScript
function MyComponent({text}: {text: string}) {
return <div>{text}</div>
}
export default MyComponent;

-------------------

2. Через константу и FC (Для типизации):

TypeScript
import { FC } from 'react';

type MyComponentPropType = { text: string };

const MyComponent: FC<MyComponentPropType> = ({text}) => {
return <div>{text}</div>
}
export default MyComponent;

----------------------

🚀 Использование (App.tsx)
TypeScript
import MyComponent from "./components/MyComponent";

function App() {
return (
<>
<MyComponent text="hello 1" />
</>
)
}