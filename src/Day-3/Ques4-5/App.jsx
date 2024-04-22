/*4.Enhance the previous application by adding protected routes that require authentication.
Create a login page with a form that accepts a username and password.
Implement authentication logic (e.g., hardcode a username and password for now).
Secure the About page so that it can only be accessed by authenticated users.
Redirect unauthenticated users to the login page.
Display a message on the Home page welcoming the authenticated user.
*/


import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
import Login from './Login'
import Message from './Message'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Setting from './Setting'
import Home from './Home'



const App = () => {
  return (<>

  <Routes>
     <Route path='/'element={<Login/>}/>
    <Route element={<ProtectedRoutes/>} >
    <Route path='/home' element={<Home/>}/>
    <Route path='/message' element={<Message/>}/>
    <Route path='/dashboard' element={<Dashboard/>}>
      <Route path='setting' element={<Setting/>}/>
      <Route path='profile' element={<Profile/>}/>
    </Route>
    </Route>
  </Routes>

     
  </>

  )
}

export default App;