import React from 'react'
import { Link } from 'react-router-dom'
import Nb from '../components/Nb'
import HomePage from '../components/HomePage'

const Home = () => {
  return (
    <>
     <Link style={{textDecoration:"none",color:"black"}}to="/">
        <Nb/>
        <HomePage/>
    </Link>
    </>
  )
}

export default Home