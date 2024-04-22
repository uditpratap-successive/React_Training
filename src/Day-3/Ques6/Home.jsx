import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <h1>You are at home</h1>
    <Link to ='/products'>Products</Link>
    </>
   
  )
}

export default Home