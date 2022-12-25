import React from 'react'
import { Link } from 'react-router-dom'
import Nb from '../components/Nb'
import Reports from '../components/Reports'
const GetReport = () => {
  return (
    <div>
        <Link style={{textDecoration:"none",color:"black"}} to="/getreport">
            <Nb/>
            <Reports/>
        </Link>
    </div>
  )
}

export default GetReport