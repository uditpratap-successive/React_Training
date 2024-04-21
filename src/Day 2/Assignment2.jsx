import React from "react";
import Counter from "./Ques1/Counter";
import PersonForm from "./Ques2/PersonForm";
import ToDoList from "./Ques3/ToDoList";
import RandomNumber from "./Ques4/RandomNumber";
import CounterWithStep from "./Ques5/CounterWithStep";
import Clock from "./Ques6/Clock";
import Notification from "./Ques7.jsx/Notification";
import Slideshow from "./Ques8/Slideshow";
import {Themeprovider} from "./Ques9/Themeprovider";
import Switcher from "./Ques9/Switcher"
import LangProvider from "./Ques10./LangProvider";
import LangSwitcher from "./Ques10./LangSwitcher";
import Cart from "./Ques11/Cart";
import { ShoppingCartProvider } from "./Ques11/ContextProvider";
import UseReducer from "./Ques12/Voting";
import Parent from "./Ques13/Parent";
import Display from "./Ques14.jsx/Display";
import StudentList from "./Ques15/StudentList";
import EmployeeSalary from "./Ques16/EmployeeSalary";
import CopyTextButton from "./Ques17.jsx/CopyTextButton";
import Storage from "./Ques18/Userreferences";
import Timer from "./Ques19.jsx/Timer";

const Assignment2 = () => {
  return (
    <>
      <h1>Question 1</h1>
      <Counter />
      <h1>Question 2</h1>
      <PersonForm />
      <h1>Question 3</h1>
      <ToDoList/>
      <h1>Question 4</h1>
      <RandomNumber/>
      <h1>Question 5</h1>
      <CounterWithStep/>
      <h1>Question 6</h1>
      <Clock/>
      <h1>Question 7</h1>
      <Notification/>
      <h1>Question 8</h1>
      <Slideshow/>
      <h1>Question 9</h1>
      <Themeprovider>
      <Switcher/>
      </Themeprovider>
      <h1>Question 10</h1>
      <LangProvider>
        <LangSwitcher/>
      </LangProvider>
      <h1>Question 11</h1>
     <ShoppingCartProvider>
      <Cart/>
     </ShoppingCartProvider>
     <h1>Question 12</h1>
     <UseReducer/>
     <h1>Question 13</h1>
     <Parent/>
     <h1>Question 14</h1>
     <Display/>
     <h1>Question 15</h1>
     <StudentList/>
     <h1>Question 16</h1>
     <EmployeeSalary/>
     <h1>Question 17</h1>
     <CopyTextButton/>
      <h1>Question 18</h1>
      <Storage/>
      <h1>Question 19</h1>
      <Timer/>
   
      

    </>


  );
};

export default Assignment2;
