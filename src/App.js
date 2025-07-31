import React, { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          value={task}
          placeholder="Enter a task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="counter">
        Total: {tasks.length} | Completed: {tasks.filter(t => t.completed).length}
      </div>

      <div className="todo-list">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            index={index}
            onComplete={handleComplete}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
