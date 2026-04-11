import type {FC} from "react";
import type {ITodo} from "../../models/ITodos.ts";

interface ITodoProps {
    todo: ITodo
}

export const TodoComponent:FC<ITodoProps> = ({todo}) => {
    return (
        <div>
            <p>{todo.todo}</p>
        </div>
    );
};