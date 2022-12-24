import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllAppointmentsAction } from '../Redux/Actions/doctorAction';
import AppointmentCard from './AppointmentCard';
import './listofappointments.css'

const Listofappointment = () => {
    const dispatch=useDispatch()
    const x=useSelector(state=>state.getallappointments)
    const auth=JSON.parse(localStorage.getItem("auth"))
    const getAllAppointment=()=>{
        dispatch(getAllAppointmentsAction(auth))
    }
    useEffect(() => {
      getAllAppointment(auth)
      
    },[])
    
  return (
    <div className='listofappointment'>
        
          <h1>Upcomming appointments</h1>
          <div className='appointmentcard'>
            {x && x.payload?
        x.payload.data.appointment.map((el)=><AppointmentCard list={el}/>):null}
        </div>
        
        
    </div>
  )
}

export default Listofappointment