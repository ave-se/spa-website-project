// AddTaskForm.js
import React from 'react';

function AddTaskForm({ onAdd }) {
  const [text, setText] = React.useState('');
  const [day, setDay] = React.useState('');
  const [priority, setPriority] = React.useState('');
  const [category, setCategory] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

    onAdd({ text, day, priority, category });

    setText('');
    setDay('');
    setPriority('');
    setCategory('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add Day & Time"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />
      <input
        type="text"
        placeholder="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input type="submit" value="Save Task" />
    </form>
  );
}

export default AddTaskForm;