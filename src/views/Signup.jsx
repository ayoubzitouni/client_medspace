import React from 'react'
import { Link } from 'react-router-dom'
import Nb from'../components/Nb'
import Signupform from '../components/Signup'

const Signup = () => {
  return (
    <div>
      <Link style={{textDecoration:"none",color:"black"}}to='/signup'>
        <Nb/>
        <Signupform/>
      </Link>
    </div>
  )
}

export default Signup