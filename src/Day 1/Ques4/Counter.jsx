/*4.Create a functional component named Counter that displays a count and two buttons: "Increment" and "Decrement".
Implement event handlers for the "Increment" and "Decrement" buttons to increase and decrease the count.
Display the updated count on the screen.
*/
import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment} style={{margin:"1rem"}}>Click for increment</button>

      <button onClick={decrement}>Click for decrement</button>
    </>
  );
};
export default Counter;
