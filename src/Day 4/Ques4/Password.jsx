/*4.Build a registration form with two password fields. Implement controlled components for both password inputs.
 Add a validation rule to ensure that the two passwords match before allowing the form submission*/

import React, { useState } from "react";

const Password = () => {
  const [password1, Setpassword1] = useState("");
  const [password2, Setpassword2] = useState("");
  const [show, setshow] = useState("");
  const verify = () => {
    if (password1 === password2) {
      setshow("Verified");
    } else {
      setshow("Password not identical");
    }
  };

  return (
    <>
      <input
        type="password"
        placeholder="Enter Password1"
        value={password1}
        onChange={(e) => Setpassword1(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password1"
        value={password2}
        onChange={(e) => Setpassword2(e.target.value)}
      />
      <button onClick={verify}>Submit</button>
      <h1 style={{ color: show === "Verified" ? "green" : "red" }}>{show}</h1>
    </>
  );
};

export default Password;
