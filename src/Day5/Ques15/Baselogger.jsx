import React from "react";
import Withlogger from "./withLogger";

const Baselogger = (props) => {
  return console.log(props.show);
};

export default Withlogger(Baselogger);
