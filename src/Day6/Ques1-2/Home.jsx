import React from 'react'
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
     <h1> You are at Home</h1>
    <NavLink to='contactus'>Contactus</NavLink>
    <NavLink to='login'>Login</NavLink>
  
    </>
 
  )
}

export default Home;