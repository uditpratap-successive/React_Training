/*7.Create a functional component called Notification.
Use the useState hook to manage a state variable named message initialized to an empty string.
Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
Render the notification message in a <div> element.
After 5 seconds, clear the message to hide the notification.
*/
import React, { useState, useEffect } from "react";

const Notification = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message) {
      const timeoutId = setTimeout(() => {
        setMessage("");
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [message]);

  const updateMessage = () => {
    setMessage("Notification Message Updated");
  };

  return (
    <>
      <div>{message}</div>
      <button onClick={()=>updateMessage()}>Click to update message</button>
    </>
  );
};

export default Notification;
