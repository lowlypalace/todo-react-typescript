import React, { ChangeEvent }from 'react'
import './App.css'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { Todo } from './Todo'
import { FormEvent } from 'react'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState <Array<Todo>> ([]);
  const [todoValue, setTodoValue ] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.currentTarget.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodos(previousTodos => [
      ...previousTodos,
      {
        task: todoValue,
        finished: false
      }
    ]);
    setTodoValue(" ");
  };

  return (
      <div>
        <h1>Welcome to my to-do app.</h1>
        <TodoList todos={todos}/>
        <TodoForm
          onSubmit={handleSubmit}
          onInputChange={handleChange}
          inputValue={todoValue}
        />
      </div>
  );
}

export default App;
