/*14.create a component that displays a list of tasks.
Each task has a "Complete" button.
Implement a feature where clicking the "Complete" button marks the task as completed.
Use the useCallback hook to create dynamic callback functions for each task.
Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks.
*/
import React, { useState } from 'react';
import tasksData from './tasks';
import { useCallback } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState(tasksData);

  const handleComplete = useCallback((taskId) => {
    console.log('hi')
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  }, [tasks]); 

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.description}
            <button onClick={() => handleComplete(task.id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
