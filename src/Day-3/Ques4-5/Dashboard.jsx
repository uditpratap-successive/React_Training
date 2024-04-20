import React from 'react'
import { Outlet,NavLink} from 'react-router-dom'


const Dashboard = () => {
  return (
    <>
<NavLink to='/dashboard/setting'>Setting</NavLink>
<NavLink to ='/dashboard/profile'>Profile</NavLink>
  <Outlet/>
   
    </>
  
  )
}

export default Dashboard