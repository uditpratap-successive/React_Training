/*5.Create a functional component named TaskList that accepts an array of task names as a prop.
Use the map function to render each task name as a list item.
Import and render the TaskList component in the App component with an array of tasks.
*/

import React from "react";

const TaskList = (props) => {
  return (
    <>
      <ol>
        {props.list.map((task) => {
          return <li id={task.id}>{task.task_name}</li>;
        })}
      </ol>
    </>
  );
};

export default TaskList;
