//1.Create a React component that fetches data from a public API (e.g., JSONPlaceholder) and displays it on the page. Use the fetch function to make the request.
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Fetch = () => {
  const [apidata, Setapidata] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => {
        if (!Response.ok) {
          throw new Error("Failed to fetch data");
        }
        Response.json().then((result) => {
          console.log(typeof result);
          console.log(result);
          Setapidata(result);
        });
      })
      .catch((error) => {
        console.error("Error is ", error);
      });
  }, []);
  return (
    <div>
      {apidata.slice(0,5).map((item) => (
        <div key={item.id}>
          <h1>Title: {item.title}</h1>
          <p>Body: {item.body}</p>
        </div>
      ))}
    </div>
  );
  
};
export default Fetch;
