import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from "../actions";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch()
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => setTodo(e.target.value);
  const handleClick = () => {
    if (!todo) return
    dispatch(addTodo(todo))
    setTodo("")
  }
  return (
    <div>
      <input onChange={handleChange} type="text" name="todos" value={todo}/>
      <button onClick={handleClick}>Add Todo</button>
    </div>
  );
}

export default TodoInput;
