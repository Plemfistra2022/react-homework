import {useEffect, useState} from "react";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";
import {getAllTodos} from "../../serverces/api.servece.ts";
import type {ITodo} from "../../models/ITodos.ts";

export const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        const fatchData = async () => {
            const todos = await getAllTodos();
            setTodos(todos);
        }
        fatchData();
    },[])

    return (
        <div>
            {
                todos.map((todo) => (
                    <TodoComponent todo={todo} key={todo.id}/>
                ))
            }
        </div>
    );
};