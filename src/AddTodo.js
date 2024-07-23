import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex">
      <Form.Control
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="me-2"
      />
      <Button type="submit" variant="primary">Add</Button>
    </Form>
  );
};

export default AddTodo;
