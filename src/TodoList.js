import React from 'react';
import { Button, Form } from 'react-bootstrap'; 
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo }) => {
  return (
    <div className="mt-3">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default TodoList;
