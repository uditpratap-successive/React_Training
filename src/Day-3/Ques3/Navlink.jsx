import { useNavigate } from "react-router-dom";

import React from 'react'

const Navlink = () => {
    const navigate=useNavigate();

const toabout=()=>{
    navigate('/about')
}
const tohome=()=>{
    navigate('/home')
}

  return (
    <>
            <button onClick={()=>tohome()}>Home</button>
             <button onClick={()=>toabout()}>About</button>
    </>
 
  )
}

export default Navlink
