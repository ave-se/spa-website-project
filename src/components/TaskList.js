// TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onToggle }) {
  const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority);

  return (
    <>
      {sortedTasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
}

export default TaskList;