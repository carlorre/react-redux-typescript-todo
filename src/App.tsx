import React from 'react';
import Todos from './components/Todos';
import TodoInput from './components/TodoInput';
import styled from "styled-components";
import { Reset } from 'styled-reset'

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App:React.FC = () => (
  <AppContainer>
    <Reset />
    <TodoInput/>
    <Todos/>
  </AppContainer>
);
 
export default App;
