import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
    <h1>Home</h1>
    <Outlet/>
    <h2>Home</h2>
    
    <h3>Home</h3>
    </>
  )
}

export default Home