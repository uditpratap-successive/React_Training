//.Build a simple todo list component with a text input for adding new tasks and a list to display them. Use controlled components
// to handle the input and update the list of tasks.


import React, { useState } from 'react';

const Todo = () => {
    const [task, setTask] = useState(''); 
    const [listdata, setListData] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value); // Update the task input value
    };

    const addTask = () => {
        if (task.trim() !== '') { 
            setListData([...listdata, task]); 
            setTask('');
        }
    };

    return (
        <>
            <input
                type='text'
                placeholder='Enter task name'
                value={task}
                onChange={handleChange}
            />
            <button onClick={addTask}>Add</button>
            <ol>
                {listdata.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ol>
        </>
    );
};

export default Todo;
