/*Create a functional component called Counter.
Inside the component, use the useState hook to manage a state variable named count initialized to 0.
Render the current value of count in a <p> element.
Add two buttons, one for incrementing the count and another for decrementing it.
When the user clicks on the buttons, update the count state accordingly.

*/

import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    return setCount(count + 1);
  };
  const decrement = () => {
    return setCount(count - 1);
  };
  return (
    <>
      <p>{count}</p>
      <button
        onClick={increment}
        style={{ margin: "1rem",padding:'1rem', fontWeight: "bold" }}
      >
        Click to increment{" "}
      </button>
      <button onClick={decrement} style={{ fontWeight: "bold",padding:'1rem' }}>
        Click to decrement
      </button>
    </>
  );
};
export default Counter;
