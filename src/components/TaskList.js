import React from 'react';

function TaskList({ tasks, deleteTask, completeTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
          <button onClick={() => completeTask(task.id)}>{task.completed ? 'Chưa hoàn thành' : 'Đã hoàn thành'}</button>
          <button onClick={() => deleteTask(task.id)}>Xóa</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
