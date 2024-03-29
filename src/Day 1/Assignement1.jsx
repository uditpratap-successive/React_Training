import React from "react";
import Greetings from "./Ques1 /Greetings";
import UserCard from "./Ques2/UserCard";
import Userdata from "./Ques2/Userdata";
import "./Ques2/User.css";
import Weather from "./Ques3/Weather";
import TaskList from "./Ques5/Tasklist";
import task from "./Ques5/Taskdata";
import Button from "./Ques6/Button";
import bdata from "./Ques6/Buttonprop";
import Counter from "./Ques4/Counter";

//This is the callback function which is to be passed inside map function.
const Assignment1 = () => {
  return (
    <>
      <h1>Question 1</h1>
      <Greetings />
      <h1>Question2</h1>
      <UserCard info={Userdata} />
      <h1>Question3</h1>
      <Weather temp={12} />
      <Weather temp={20} />
      <Weather temp={30} />
      <Weather temp={5} />
      <h1>Question 4</h1>
      <Counter/>
      <h1>Question 5</h1>
      <TaskList list={task} />
      <h1>Question 6</h1>
      <Button binfo={bdata} />
    </>
  );
};
export default Assignment1;
