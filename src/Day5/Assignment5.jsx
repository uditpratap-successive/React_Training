import React from 'react'
import Fetch from './Ques1/Fetch'
import FetchError from './Ques2/FetchError'
import Loading from './Ques3/Loading'
import Pagination from './Ques4/Pagination'
import Axioserror from './Ques6/Axioserror'
import Axiosfetch from './Ques5/Axiosfetch'
import AxiosPost from './Ques7/Axiospost'
import Application1 from './Ques12/Application1'
import MuiModalComponent from './Ques13/MuiModalComponent'
import HomeThirteen from './Ques13/Homethirteen'
import Baselogger from './Ques15/Baselogger'
import Showcomponent from './Ques16/Showcomponent'
import { BrowserRouter } from 'react-router-dom'
import Routers from './Ques14/Router'
import GraphQlapp from './Ques8/GraphQlapp'
import GraphQlapp2 from './Ques9/GraphQLapp2'

const Assignment5 = () => {
  return (
    <>
   <h1>Question 1</h1> 
    <Fetch/>
    <h1>Question 2</h1> 
     <FetchError/>
    <h1>Question 3</h1>
    <Loading/>
    <h1>Question 4</h1>
    <Pagination/>
    <h1>Question 5</h1>
    <Axiosfetch/>
    <h1>Question 6</h1> 
     <Axioserror/>
     <h1>Question 7</h1>
    <AxiosPost/>
     <h1>Question 8</h1>
   <GraphQlapp/>
   <h1>Question 9</h1>
   <GraphQlapp2/>
  <h1>Question 12</h1>
    <Application1/>
   <h1>Question 13</h1> 
   <HomeThirteen/> 
    <h1>Question 14</h1>
   <BrowserRouter>
    <Routers/>
   </BrowserRouter>
   <h1>Question 15</h1>
   <Baselogger/>
   <h1>Question 16</h1>
   <Showcomponent/>
   

</>

  )
}

export default Assignment5