// AddTaskForm.js
import React from 'react';

function AddTaskForm({ onAdd }) {
  const [text, setText] = React.useState('');
  const [day, setDay] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ text, day });

    setText('');
    setDay('');
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
      <input type="submit" value="Save Task" />
    </form>
  );
}

export default AddTaskForm;