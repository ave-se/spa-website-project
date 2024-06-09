// Task.js
import React from 'react';

function Task({ task, onDelete, onToggle }) {
  return (
    <div>
      <h3 
        onClick={() => onToggle(task.id)}
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      >
        {task.text}
      </h3>
      <p>{task.day}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default Task;