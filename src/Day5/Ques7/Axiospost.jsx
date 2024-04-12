//7.Create a form in your React component that allows the user to input data (e.g., a post title and content).
// Use Axios to send a POST request to an API endpoint, posting the user's data.



import React, { useState } from "react";
import axios from "axios";
const AxiosPost = () => {
  const [data, setData] = useState({});
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const handleSubmit = () => {
    setData({ id, title, body });
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then(function (response) {
        console.log("POST request successfull!");
        console.log(response);
      })
      .catch(function (error) {
        console.error("POST request failed:", error);
      });
  };

  return (
    <div>
      <label htmlFor="id">UserId</label>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

      <label htmlFor="title">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="body">Body</label>
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button onClick={handleSubmit}>Post</button>

      {/* <button onClick={handleClick}>Get</button> */}
    </div>
  );
};

export default AxiosPost;
