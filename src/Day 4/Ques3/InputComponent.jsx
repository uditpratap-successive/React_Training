/*3.Create a component with controlled input field and a button. When the user enters a specific 
value into the input (e.g., "show"), a new component should be rendered below the input, displaying a message. Otherwise, nothing should be displayed
*/


import React, { useState } from 'react';

const MessageComponent = () => {
  return <div>A message is displayed here!</div>;
};

const InputComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue === 'show') {
      setShowMessage(true);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter 'show' to display message"
      />
      <button onClick={handleClick}>Click Me</button>
      {showMessage && <MessageComponent />} {/* Render the message component conditionally */}
    </div>
  );
};

export default InputComponent;
