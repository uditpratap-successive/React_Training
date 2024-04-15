/*3.Create a React component named Counter that displays a number and two buttons, one for incrementing the number and another for decrementing it.
 Write tests using React Testing Library to ensure that the component behaves as expected.*/

import React from "react";
import { useReducer } from "react";

const Counter = () => {
  const intialstate = {
    count: 0,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, intialstate);

  return (
    <>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </>
  );
};

export default Counter;
