import {ADD_TODO,REMOVE_TODO,CHECK_TODO,EDIT_TODO} from "./ToDoTypes"

const initialState = JSON.parse(localStorage.getItem("todos")) || []

export const toDoReducer = (state = initialState,action) => {
    let Todos
    switch(action.type) {
        case ADD_TODO:
            Todos = [...state,action.payload]
            localStorage.setItem("todos",JSON.stringify(Todos))
            return Todos
        case CHECK_TODO:
            Todos = state.map(todo => todo.id === action.payload ? {...todo,completed:!todo.completed} : todo)
            localStorage.setItem("todos",JSON.stringify(Todos))
            return Todos
        case EDIT_TODO:
            Todos = state.map(todo => todo.id === action.payload.id ? action.payload : todo)
            localStorage.setItem("todos",JSON.stringify(Todos))
            return Todos
        case REMOVE_TODO:
            Todos = state.filter(todo => todo.id !== action.payload)
            localStorage.setItem("todos",JSON.stringify(Todos))
            return Todos
        default:
            return state
    }
}
