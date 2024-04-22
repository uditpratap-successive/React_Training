import React from 'react'
import { Outlet,NavLink} from 'react-router-dom'



const Homemenu = () => {
  return (
    <div style={{display:'flex', flexDirection:'row', backgroundColor:'violet' ,color:'white'}}>
      <NavLink to='/home' style={{margin:'1rem'}}>Home</NavLink>
      <NavLink to='/message' style={{margin:'1rem'}}>Message</NavLink>
      <NavLink to='/dashboard' style={{margin:'1rem'}}>Dashboard</NavLink>
    </div>
    
  )
}

export default Homemenu;