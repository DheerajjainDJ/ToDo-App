import {createStore} from "redux"
import {toDoReducer} from "./ToDoReducer"

const store = createStore(toDoReducer)

export default store