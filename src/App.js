import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { task, id: Date.now() }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App container mt-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
