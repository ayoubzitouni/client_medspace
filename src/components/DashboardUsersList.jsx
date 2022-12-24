import React from 'react'
import { useSelector } from 'react-redux'
import UsersCard from './UsersCard'
import'./dashboardUserList.css'
const DashboardUsersList = () => {
    const allusers=useSelector(state=>state.getAllUsers)
  return (
    <div className='dashboard_users_list'>
        <div className="users">
          <h1 style={{textAlign:"center"}}>Patients</h1>
            <div className='titles'>
              <p>Name</p>
              <p>email</p>
              <p>action</p>
            </div>
          <div className='users_cards'>
            {allusers && allusers.patients?
              allusers.patients.data.allUsers.map((el)=>el.role==0?<UsersCard data={el} />:null)
              :null
            }
          </div>
        </div>
        <div className="doctors">
        <h1 style={{textAlign:"center"}}>Doctors</h1>
        <div className='titles'>
          <p>Name</p>
          <p>email</p>
          <p>action</p>
          </div>
          <div className='doctors_cards'>

          
        {allusers && allusers.patients?
        allusers.patients.data.allUsers.map((el)=>el.role==1?<UsersCard data={el} />:null)
        :null
        }
        </div>
        </div>
    </div>
  )
}

export default DashboardUsersList