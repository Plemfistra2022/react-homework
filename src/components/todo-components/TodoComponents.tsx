import {useEffect, useState} from "react";
import type {ITodo} from "../../models/ITodo.ts";
import {TodoComponent} from "../todo-compotetnt/TodoComponent.tsx";
import {getTodos} from "../../services/api.service.ts";

export const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>( []);
    useEffect(() => {
        const fetchData = async () => {
            const todos = await getTodos();
            setTodos(todos);
        }
        fetchData();
        return () => {
            console.log("done");
        }
    },[]);

    return (
        <>
            {
                todos.map((todo) => (<TodoComponent key={todo.id} item={todo}/>))
            }
        </>
    );
};

export default TodoComponents;