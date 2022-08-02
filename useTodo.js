import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false
    // }
];
const init = () => {
    //*Este es el tercer parametro del useReducer, sirve para que ejecute una acción cuando empieza el reducer
    return JSON.parse(localStorage.getItem('todos')) || [];
    //*Explicación de la línea anterior
    //*Intenta parsear o retorna []
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        //*Serializar todos en el localStorage -- en localStorage no podemos guardar objetos como tal
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };
        dispatch(action); //*Mandando la acción al reducer
    }
    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }
    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }
    const todosCount = todos.length;
    const pendingTodosCount = (todos.filter((element) => {
            return !element.done;
        })).length;

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount,
    }
}

