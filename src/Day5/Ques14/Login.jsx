import React from 'react'
import { useState } from 'react'
import {   useNavigate } from 'react-router-dom'
const Login = () => {
    const[name,Setname]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()
    
    const handlesubmit=()=>{
        if(name==='udit' && password==='12345'){
            localStorage.setItem('login','true')
            navigate('/base')
        

        }
    }
    
  return (
    <>
           <input
        type='text'
        placeholder='enter the name'
        value={name}
        onChange={(e)=>Setname(e.target.value)}
     />

<input
        type='password'
        placeholder='enter the name'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
     />
     <button onClick={handlesubmit}>Submit</button>


    </>
    
  )
}

export default Login