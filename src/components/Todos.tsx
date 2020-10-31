import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from '../actions';
import { TodosIF } from "../reducer";

const Todos:React.FC = () => {
  const todos = useSelector<TodosIF, TodosIF["todos"]>(state => state.todos)
  const dispatch = useDispatch()
  const handleClick = (id: string) => dispatch(deleteTodo(id))

  return (
    <ul>
      {todos.map(({todo, id}) => (
        <li onClick={() => handleClick(id)} key={id}>{todo}</li>
      ))}
    </ul>
  );
}

export default Todos;
