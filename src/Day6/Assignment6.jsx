import React from 'react'
import Lazyloading from './Ques1-2/Lazyloading'
import Counter from './Ques3/Counter'
import Loginform from './Ques4/Loginform'
import Userprofile from './Ques5/Userprofile'
import PropManager from './Ques5/PropManager'
import { BrowserRouter } from 'react-router-dom'

const Assignment6 = () => {
  return (
    <> 
      <h1>Question 1-2</h1>
      <BrowserRouter>
      <Lazyloading/>
      </BrowserRouter>

      
       {/* <h1>Question 3</h1>
       <Counter/>
       <h1>Question 4</h1>
       <Loginform/>
       <h1>Question 5</h1>
       <PropManager/>
        */}


    </>
  
)
}

export default Assignment6