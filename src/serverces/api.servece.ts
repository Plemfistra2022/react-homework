import type {ITodo, ITodos} from "../models/ITodos.ts";

export const getAllTodos = async (): Promise<ITodo[]> => {
    const response:ITodos = await fetch(import.meta.env.VITE_API_URL + "/todos")
        .then(res => res.json())
    return response.todos;
}