import React from 'react';

function TodoItem({ task, index, onComplete, onDelete }) {
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <div>
        <button onClick={() => onComplete(index)}>COM✅</button>
        <button onClick={() => onDelete(index)}>DEL🗑️</button>
      </div>
    </div>
  );
}

export default TodoItem;
