import React from 'react'
import { Link } from 'react-router-dom'
import GetRep from '../components/GetRep'
import Nb from '../components/Nb'
import Reports from '../components/Reports'
const GetReport = () => {
  return (
    <div>
        <Link to="/getreport">
            <Nb/>
            <Reports/>
            <GetRep/>
        </Link>
    </div>
  )
}

export default GetReport