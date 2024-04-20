// Child.js
import React from 'react';

const Child = ({ count, incrementCount, resetCount }) => {
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment Count</button> 
      <button onClick={resetCount}>Reset Count</button> 
    </div>
  );
};

export default Child;
