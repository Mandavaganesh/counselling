import React, { useState } from 'react';

const Todolist = ({ todos }) => {
  const [todolist, setTodolist] = useState(todos);

  const handleToggleComplete = (index) => {
    const updatedTodolist = [...todolist];
    updatedTodolist[index].completed = !updatedTodolist[index].completed;
    setTodolist(updatedTodolist);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todolist.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(index)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;