//3.Add a loading indicator (e.g., a spinner) to the component. Display it while the data is being fetched and hide it once the data is loaded.
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Loading = () => {
  const [apidata, Setapidata] = useState([]);
  const[loading,Setloading]=useState(false)

  useEffect(() => {
    Setloading(true)
    setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => {
        if (!Response.ok) {
          throw new Error("Failed to fetch data");
        }
        Response.json().then((result) => {
          Setapidata(result);
        });
      })
      .catch((error) => {
        console.error("Error is ", error);
      }).finally(
        Setloading(false)
      )
    },2000);
    
  }, []);
  return (
    <div>
   {loading?<h3>Loading</h3>:
          apidata.slice(0,5).map((item) => (
        <div key={item.id}>
          <h1>Title: {item.title}</h1>
          <p>Body: {item.body}</p>
        </div>
      ))}
    </div>
  );
  
};
export default Loading;
