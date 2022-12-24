import React from 'react'
import NB from '../components/Nb'
import SideBar from '../components/sidebar/Sidebar'
import './profile.css'
import { Link } from 'react-router-dom'
import Getappointment from '../components/Getappointment'

const Profile = () => {
  return (
    <>
    <Link to="/profile">
        <NB/>
        <div className='Content'>
        <SideBar/>
        <Getappointment/>
        </div>
    </Link>
        
    </>
  )
}

export default Profile