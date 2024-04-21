/*Create a functional component called CounterWithStep.
Use the useState hook to manage a state variable named count initialized to 0.
Render the current value of count in a <p> element.
Add two buttons, one for incrementing the count and another for decrementing it.
Add an input field where the user can specify a step value.
Update the count using the specified step value when the buttons are clicked.
*/
import React, { useState } from "react";

const CounterWithStep = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>{count}</p>
      <input
        style={{ marginBottom: "1rem", width: "7rem" }}
        type="number"
        value={step}
        onChange={(e) => setStep(parseInt(e.target.value))}
      />
      <button
        style={{ marginBottom: ".5rem", width: "5rem" ,backgroundColor:"green",color:'white'}}
        onClick={increment}
      >
        Increase Step
      </button>
      <button style={{ width: "5rem",backgroundColor:'red' }} onClick={decrement}>
        Decrease Step
      </button>
    </div>
  );
};

export default CounterWithStep;
