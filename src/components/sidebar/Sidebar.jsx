import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsersActions } from '../../Redux/Actions/userActions'
import './sidebar.css'

const Sidebar = () => {
  const users=useSelector(state=>state.getAllUsers)
  const cred=JSON.parse(localStorage.getItem("auth")) 

 
  return (
    <div className='sidebar'>
    {cred.role==0?<h2>Doctors</h2>:<h2>Users</h2>}
    {cred.role==1?<div className='doctor'>
    {
      users && users.patients? users.patients.data.allUsers.map((el)=>el.role==0?<h4>{el.name}</h4>:null):null
    }
    </div>:
    cred.role==2?
    <div className='doctor'>
    {
      users && users.patients? users.patients.data.allUsers.map((el)=><h4>{el.name}</h4>):null
    }
    </div>:
    <div className='doctor'>
    {
      users && users.patients? users.patients.data.allUsers.map((el)=>el.role==1?<h4>{el.name}</h4>:null):null
    }
    </div>
    }
  
    
    </div>
  )
}

export default Sidebar