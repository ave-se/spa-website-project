// TaskItem.js
import React from 'react';

function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div>
      <h3>
        {task.text}{' '}
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default TaskItem;