import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Navlink from './Navlink'

const Mainpage = () => {
  console.log('anant')
  return (
    <>
       <Navlink/>
        <Routes>
            {/* <Route path='/' element={<Mainpage/>}></Route> */}
            <Route path='/Home' element={<Home/>}></Route>
            <Route path='/About' element={<About/>}></Route>
        </Routes>
    </>
  )
}

export default Mainpage