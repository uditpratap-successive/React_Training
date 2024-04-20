import React from 'react'
import Consumer from './Ques1/Consumer'
import Provider from './Ques1/Provider'
// import Parent from './Ques2/Parent'
import Child from './Ques2/Child'
import Parent from './Ques2/Parent'
// import { BrowserRouter } from 'react-router-dom'
import Mainpage from './Ques3/Mainpage'
import { BrowserRouter } from 'react-router-dom'
import App from './Ques4-5/App'
import App6 from './Ques6/App6'



const Assignment3 = () => {
  return (
    <>
    <br></br>
  <h1>Assignment 13</h1><br/>
  <h1>Question 1 </h1>
  <Provider>
    <Consumer/>
  </Provider>
<h1>Question 2</h1>
  <Parent>
  <Child/>
  </Parent> 
  
   <h1>Question 3</h1> 
  <BrowserRouter>
     <Mainpage/>
  </BrowserRouter>

 <h1>Question 4-5</h1>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  <h1>Question 6</h1>
  <BrowserRouter>
    <App6/>
  </BrowserRouter>
    
  

    </>
  
  )
}

export default Assignment3