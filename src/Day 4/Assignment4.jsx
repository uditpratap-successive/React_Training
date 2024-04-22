import React from 'react'
import Input from './Ques1/Input'
import Form from './Ques2/Form'
import InputComponent from './Ques3/InputComponent'
import Password from './Ques4/Password'
import DropdownMenu from './Ques5/DropdownMenu'
import Todo from './Ques6/Todo'
import SearchFilter from './Ques7/SearchFilter'
import TempConverter from './Ques8/TempConverter'
import TemporaryDrawer from './Ques9/TemporaryDrawer'
import { BrowserRouter } from 'react-router-dom'
import LoginForm from './Ques10/LoginForm'
import FormDialog from './Ques11/FormDialog'
import DataTable from './Ques12/DataTable'
import MyForm from './Ques13/MyForm'
import { FormValidation } from './Ques14/FormValidation'

const Assignment4 = () => {
  return (
    <>
    <br/>
    <br/>
      <h1>Assignment4</h1>
       <h1>Question 1</h1>
       <Input/>
       <h1>Question 2</h1>
       <Form/>
       <h1>Question 3</h1>
       <InputComponent/>
       <h1>Question 4</h1>
       <Password/>
       <h1>Question 5</h1>
       <DropdownMenu/>
       <h1>Question 6</h1>
       <Todo/>
       <h1>Question 7</h1>
       <SearchFilter/>
       <h1>Question 8</h1>
       <TempConverter/>
       <h1>Question 9</h1>
       <BrowserRouter>
       <TemporaryDrawer/>
       </BrowserRouter>
       <h1>Question 10</h1>
       <LoginForm/>
       <h1>Question 11</h1>
       <FormDialog/>
       <h1>Question 12</h1>
       <DataTable/>
       <h1>Question 13</h1>
       <MyForm/>
       <h1>Question 14</h1>
       <FormValidation/>

     
       

    </>
   
  )
}

export default Assignment4  