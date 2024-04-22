//2.Implement error handling for the fetch request. Display an error message if the request fails and provide a way for the user to retry the request.
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const FetchError = () => {
  const [apidata, Setapidata] = useState([]);
  const [error, Seterror] = useState(false);

  useEffect(() => {
    fetch("https://jsnplaceholder.typicode.com/posts")
      .then((Response) => {
        Response.json().then((result) => {
          Setapidata(result);
        });
      })
      .catch((Error) => {
        Seterror(true);
        console.warn("Errorrrrr is ", Error);
      });
  }, []);
  const Errorfunction = () => {
    window.location.href = "https://jsonplaceholder.typicode.com/posts";
  };
  return (
    <div>
      {error === true ? (
        <div style={{ color: "red", margin: "2rem" }}>
          <h1>Error</h1>
          <button onClick={() => Errorfunction()}>Try Again</button>
        </div>
      ) : (
        <div>
          {apidata.slice(0, 5).map((item) => (
            <div key={item.id}>
              <h1>Title: {item.title}</h1>
              <p>Body: {item.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default FetchError;
