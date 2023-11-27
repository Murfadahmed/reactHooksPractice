import React, { useState } from 'react';

const TaskList = ({ tasks, onEdit, onDelete, onCopy }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => onEdit(task.id)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
          <button onClick={() => onCopy(task.id)}>Copy</button>
        </li>
      ))}
    </ul>
  );
};

const TaskForm = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

const App2 = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (text) => {
    if (selectedTask) {
      // If a task is selected, update it
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === selectedTask ? { ...task, text } : task))
      );
      setSelectedTask(null);
    } else {
      // If no task is selected, add a new task
      setTasks((prevTasks) => [...prevTasks, { id: Date.now(), text }]);
    }
  };

  const editTask = (id) => {
    const selectedTask = tasks.find((task) => task.id === id);
    setSelectedTask(selectedTask.id);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setSelectedTask(null);
  };

  const copyTask = (id) => {
    const taskToCopy = tasks.find((task) => task.id === id);
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), text: taskToCopy.text }]);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} onCopy={copyTask} />
    </div>
  );
};

export default App2;
