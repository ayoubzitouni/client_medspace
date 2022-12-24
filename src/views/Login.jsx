import React from 'react'
import Nb from '../components/Nb'
import Loginform from'../components/Login'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <Link to='/login'>
        <Nb/>
        <Loginform/>
      </Link>
    </div>
  )
}

export default Login