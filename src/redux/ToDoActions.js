import { ADD_TODO, REMOVE_TODO, CHECK_TODO, EDIT_TODO } from "./ToDoTypes";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const checkTodo = (id) => {
  return {
    type: CHECK_TODO,
    payload: id,
  };
};

export const editTodo = (updatedData) => {
  return {
    type: EDIT_TODO,
    payload: updatedData,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};
