import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Login'
import Protected from './Protected'
import Basecomponent from './Basecomponent'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route element={<Protected/>}>
             <Route path='base' element={<Basecomponent/>}/>
          </Route>
        </Routes>
    </>
  )
}

export default Router