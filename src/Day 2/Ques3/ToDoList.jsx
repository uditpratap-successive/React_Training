/*3.Create a functional component called ToDoList.
Use the useState hook to manage a state variable named todos, initialized as an empty array.
Render a list of todos using the map function.
Each todo should have a checkbox to mark it as completed and a delete button to remove it from the list.
Use the useState hook to manage the state of each todo item (completed or not).
*/
import React, { useState } from "react";
const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, { text: "", completed: false }]);
    console.log(todos)
  };
  const removeTodo = (index) => {
    const updatedTools = todos.filter((_, i) => i !== index);
    setTodos(updatedTools);
  };
  const TextChange = (index, newText) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = newText;
    setTodos(updatedTodos);
  };
  return (
    <>
      <h2>ToDo List</h2>
      <div>
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div className="listbg">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
            <input type="checkbox" />
              <input
                type="text"
                value={todo.text}
                onChange={(e) => TextChange(index, e.target.value)}
              ></input>
            
              <button onClick={() => removeTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ToDoList;
