import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import Contactus from './Contactus'
import Login from './Login'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/contactus' element={<Contactus/>}> </Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </>
  )
}

export default Router