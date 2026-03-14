React Children
Суть: Позволяет передавать контент (текст или компоненты) внутрь тегов компонента.
Типизация: Используем тип ReactNode.


Пример:

import type { FC, ReactNode } from "react";

type MyComponentPropType = {
  text: string;
  children?: ReactNode; // знак "?" делает контент необязательным
};

const MyComponent: FC<MyComponentPropType> = ({ text, children }) => {
  return (
    <div>
      <h2>{text}</h2>
      <p>{children}</p>
    </div>
  );
};

export default MyComponent;