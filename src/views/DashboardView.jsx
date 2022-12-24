import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Nb from '../components/Nb'

const DashboardView = () => {
  return (
    <div>
        <Link to="/dashboard">
            <Nb/>
            <Dashboard/>
        </Link>
    </div>
  )
}

export default DashboardView