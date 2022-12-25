import React, { useEffect } from 'react'
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { validateAppointmentAction } from '../Redux/Actions/doctorAction';
import './appointmentcard.css'
const AppointmentCard = ({list}) => {
  const dispatch=useDispatch()
    const auth=JSON.parse(localStorage.getItem("auth"))
    const x=useSelector(state=>state.getAllUsers)
    const update=useSelector(state=>state.update)
  const handleValidate=(appid)=>{
    dispatch(validateAppointmentAction(appid))
    
  }

  return (
    <div className='cards'>
        <Card>
            <Card.Header>{x && x.patients?x.patients.data.allUsers.map((el)=>el._id===list.userId?el.name:""):null}</Card.Header>
            <Card.Body>
            <Card.Title>{`Dr. ${x && x.patients?x.patients.data.allUsers.map((el)=>el._id===list.doctorId?el.name:null).toString().replaceAll(",",""):null}`}</Card.Title>
            <Card.Text>
                {`Date: ${list.date.slice(0,10)} at ${list.date.slice(11,16)}`}
            </Card.Text>
        {list.validation==false && auth.role==0?
        <h2 style={{color:"#CFFDE1",backgroundColor:"#344D67",textDecoration:"none",borderRadius:"5px",textAlign:"center"}}>Pending</h2>:
        list.validation==true || auth.role==0?
        <h2 style={{color:"#CFFDE1",backgroundColor:"#68B984",textDecoration:"none",borderRadius:"5px",textAlign:"center"}}>Valid</h2>:
        <Button onClick={()=>{handleValidate(list._id)}}>Validate</Button>
        }
        
        
        </Card.Body>
        </Card>
    </div>
  )
}

export default AppointmentCard