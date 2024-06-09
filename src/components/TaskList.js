// TaskList.js
import React from 'react';
import Task from './Task';

function TaskList({ tasks, onDelete, onToggle, filterCategory }) {
  const filteredTasks = filterCategory
    ? tasks.filter((task) => task.category === filterCategory)
    : tasks;

  return (
    <div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default TaskList;