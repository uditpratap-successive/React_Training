/*4.Create a functional component called RandomNumberGenerator.
Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
Render the current value of randomNumber.
Add a button that generates a new random number and updates the state when clicked.
*/

import { useState } from "react";

import React from "react";

const RandomNumber = () => {
  const [randomNumber, setrandomNumber] = useState(6);

  const randomgeneretor = () => {
    let randomnum = Math.floor(Math.random() * 100) + 1;
    setrandomNumber(randomnum);
  };
  return (
    <>
      <h3>{randomNumber}</h3>
      <button onClick={randomgeneretor}>Click to generate random number</button>
    </>
  );
};

export default RandomNumber;
