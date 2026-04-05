import type {FC} from "react";
import type {ITodo} from "../../models/ITodo.ts";

interface ITodoProps {
    item: ITodo
}

export const TodoComponent: FC<ITodoProps> = ({item}) => {
    return (
        <div>
            {item.id} {item.title} {item.completed.toString()}
        </div>
    );
};