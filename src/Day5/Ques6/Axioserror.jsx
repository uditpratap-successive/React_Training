//*Modify the previous assignment to implement error handling using Axios. Display an error message if the request fails and provide a way for the user to retry the request.*/

import React, { useEffect } from "react";
import axios, { AxiosError } from "axios";

const Axioserror = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    axios
      .get("https://jsonpaceholder.typicode.com/posts")
      .then((res) => setData(res.data))
      .catch((err) => {
        alert(`Error: ${err.message}`);
      });
  }, []);
  return (
    <div>
      <h3>Api Data Question 6</h3>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.id}</p>
            <p>title: {item.title}</p>
            <p>body: {item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Axioserror;
