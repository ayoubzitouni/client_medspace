import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addNewRoom, getAllInterventionsAction, getAllRoomsAction } from '../Redux/Actions/adminActions'
import DashboardRooms from './DashboardRooms'
import DshboardInterventions from './DashboardIntervetions.jsx'
import { getAllUsersActions } from '../Redux/Actions/userActions'
import DashboardUsers from './DashboardUsers'
import DashboardUsersList from './DashboardUsersList'
import './dashboard.css'

const Dashboard= () => {
    const [number, setNumber] = useState(0)
    const cred=JSON.parse(localStorage.getItem("auth"))
    const allrooms=useSelector(state=>state.getAllRooms)
    const allinter=useSelector(state=>state.getAllinterventions)
    const allusers=useSelector(state=>state.getAllUsers)
    const dispatch=useDispatch()
    const add=()=>{
        if(typeof(number.room)=="number"){
        dispatch(addNewRoom(number.room))
        }
    }
    
    const getAll=()=>{
        dispatch(getAllRoomsAction())
        dispatch(getAllInterventionsAction())
        dispatch(getAllUsersActions(cred))
    }
    useEffect(() => {
        getAll()
    },[])
    
    return (
    <div className='dashboard'>
        <div className='content'>
        <div className='rooms'>
            {
                allrooms && allrooms.payload?<DashboardRooms rooms={allrooms.payload.rooms}/>:null
            }
        <Form>
            <Form.Control type="text" placeholder="Enter email" onChange={(e)=>setNumber({...number,room:parseInt(e.target.value)}) }/>
            <Button type='submit' onClick={add}>Add new room</Button>
        </Form>
        </div>
        <div className='interventions'>
            {
                allinter && allinter.payload?<DshboardInterventions interventions={allinter.payload.data.all}/>:null
            }
        </div>
        <div className='users'>
            {
                allusers && allusers.patients?<DashboardUsers users={allusers.patients.data.allUsers}/>:null
            }
        </div>
        </div>
        <DashboardUsersList/>
    </div>
    )
}

export default Dashboard