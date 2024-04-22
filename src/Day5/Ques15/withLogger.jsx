//15.Build an HOC called withLogger that logs the events of a component (e.g., mounting, unmounting, updating).
//Apply this HOC to a component and display the logs in the browser console.

import React, { useEffect, useState } from "react";

const Withlogger = (Basecomponent) => {
  const Newlogger = (props) => {
    const [show, setShow] = useState("");

    useEffect(() => {
      console.log("Component Mounted");

      const id = setInterval(() => {
        setShow("I am printed");
      }, 1000);

      return () => {
        console.log("Component Will Unmount");
        clearInterval(id);
      };
    });

    return <Basecomponent {...props} show={show} />;
  };

  return Newlogger;
};

export default Withlogger;
