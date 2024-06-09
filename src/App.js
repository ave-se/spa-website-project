import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      text: 'Doctor appointment',
      day: 'Feb 5th at 2:30pm',
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 1:30pm',
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <AddTaskForm onAdd={addTask} />
        {tasks.length > 0 ? (
          <TaskList tasks={tasks} onDelete={deleteTask} />
        ) : (
          'No Tasks To Show'
        )}
      </div>
    </Router>
  );
}

export default App;