import React from "react";

const Weather = (props) => {
  let message = "";

  if (props.temp >= 25) {
    message = "Its a Sunny Day";
  } else if (props.temp < 25 && props.temp > 10) {
    message = "Its a pleasent day";
  } else {
    message = "Its a cold day";
  }

  return (
    <>
      <h3>Temprature={props.temp}</h3>
      <p>{message}</p>
    </>
  );
};
export default Weather;
