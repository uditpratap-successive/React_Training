// /*2.Create a functional component called PersonForm.
// Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
// Render three input fields for the user to enter their first name, last name, and age.
// As the user types, update the respective state variables.
// Display the entered information below the input fields.
// */

import React, { useState } from "react";

function PersonForm() {
  // useState hook to manage state variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [show, setshow] = useState(false);

  const Visible = () => {
    setshow(true);
  };

  return (
    <div>
      {/* Input fields for first name, last name, and age */}
      <div>
        <label>Enter the first name</label>
        <input
          style={{ margin: "1rem" }}
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Enter the last name</label>
        <input
          style={{ margin: "1rem" }}
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div>
        <label> Enter Age </label>
        <input
          style={{ margin: "1rem" }}
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <button onClick={Visible}>Click to see</button>

      {show && (
        <div>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Age: {age}</p>
        </div>
      )}
    </div>
  );
}

export default PersonForm;
