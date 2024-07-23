import React from 'react';
import { Button } from 'react-bootstrap';


const TodoItem = ({ todo, removeTodo }) => {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom py-2">
      <span>{todo.task}</span>
      <Button variant="danger" onClick={() => removeTodo(todo.id)}>Delete</Button>
    </div>
  );
};

export default TodoItem;
