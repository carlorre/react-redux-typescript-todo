import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from "../actions";
import styled from "styled-components";

const TodoInputContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch()
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => setTodo(e.target.value);
  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
   
    event.preventDefault();
    if (!todo) return
    dispatch(addTodo(todo))
    setTodo("")
  }
  return (
    <TodoInputContainer onSubmit={(event) => handleSubmit(event)}>
        <input type="text" onChange={handleChange} name="todos" value={todo}/>
        <input type="submit" value="Add todo" />
    </TodoInputContainer>
  );
}

export default TodoInput;
