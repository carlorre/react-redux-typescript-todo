import { v1 as uuid } from "uuid";

export const addTodo = (newTodo:string) => ({
  type: 'ADD_TODO',
  payload: {
    todo: newTodo,
    id: uuid()
  }
})

export const deleteTodo = (id:string) => ({
  type: 'DELETE_TODO',
  payload: id,
})