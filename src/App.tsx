import React from 'react';
import Todos from './components/Todos';
import TodoInput from './components/TodoInput';

const App:React.FC = () => (
  <div>
    <TodoInput/>
    <Todos/>
  </div>
);
 
export default App;
