import React, { useEffect, useState } from 'react'
import { Button, Dropdown, DropdownButton, Form, InputGroup } from 'react-bootstrap'
import dayjs from 'dayjs'
import TextField from '@mui/material/TextField'
import { useDispatch, useSelector } from 'react-redux'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import'./appointment.css'

import 'react-datepicker/dist/react-datepicker.css'
import { InputLabel, Stack } from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { getAllUsersActions, submitAppointmentAction } from '../Redux/Actions/userActions'
import Listofappointment from './Listofappointment'


const Getappointment = () => {
    const dispatch=useDispatch()
    const patients=useSelector(state=>state.getAllUsers)
    const cred=JSON.parse(localStorage.getItem("auth")) 
    const date= dayjs(new Date())
    const [value, setValue] = useState(date);
    const [disdoctor, setDisdoctor] = useState({name:""})
   
    const getDoctors=()=>{
      setDisdoctor({...disdoctor,name:"",patientid:cred.userId})
      dispatch(getAllUsersActions(cred))
    }
    const handleSubmit=()=>{
      dispatch(submitAppointmentAction(disdoctor))
    }
    useEffect(()=>{
      getDoctors()
    },[])
    
    
    return (
    <div className='getappointment'>
      <div className="appointment">
      {cred.role==0?
      <Form>
        <h1>Get an appointment</h1>
      <InputGroup className="mb-3">
        <InputLabel className="mb-3">Search Doctor :</InputLabel>
        <Form.Control aria-label="Text input with dropdown button" value={disdoctor.name} onChange={(e)=>setDisdoctor({...disdoctor,name:e.target.value})}/>
        
      <DropdownButton variant="outline-secondary" title="Speciality" id="input-group-dropdown-2" align="end">
        <Dropdown.Item onClick={()=>setDisdoctor({...disdoctor,speciality:"pedeiatrics",validation:false})}>Pediatrics</Dropdown.Item>
        <Dropdown.Item onClick={()=>setDisdoctor({...disdoctor,speciality:"neurology",validation:false})}>Neurology</Dropdown.Item>
        <Dropdown.Item onClick={()=>setDisdoctor({...disdoctor,speciality:"dermatology",validation:false})}>Dermatology</Dropdown.Item>
        <Dropdown.Item onClick={()=>setDisdoctor({...disdoctor,speciality:"ophthalmology",validation:false})}>Ophthalmology</Dropdown.Item>
        <Dropdown.Item onClick={()=>setDisdoctor({...disdoctor,speciality:"psychiatrists",validation:false})}>Psychiatrists</Dropdown.Item>
        <Dropdown.Item onClick={()=>setDisdoctor({...disdoctor,speciality:"cardiologists",validation:false})}>Cardiologists</Dropdown.Item>
      </DropdownButton>
      
      </InputGroup>
      <div className='searching'>
        {disdoctor.name.length!=0?
      <div className="search">
        {patients && patients.patients?
          patients.patients.data.allUsers.map((el)=>disdoctor.name.length!=0 && el.name.toLowerCase().includes(disdoctor.name.toLowerCase())?<p onClick={()=>setDisdoctor({...disdoctor,name:el.name,docid:el._id,speciality:el.speciality})}>{el.name}</p>:el.name.toLowerCase().includes(disdoctor.name.toLowerCase()) && el.speciality.includes(disdoctor.speciality)?<p onClick={()=>setDisdoctor({...disdoctor,name:el.name,docid:el._id})}>{el.name}</p>:null)
          :null}
      </div>
      :null
      }
      
      </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <h1>Get a time and date</h1>
        <Stack spacing={3} className="mb-3">
          <DateTimePicker label="Responsive" inputFormat='YYYY-MM-DD HH:mm' minDate={date} minutesStep={15} renderInput={(params) => <TextField {...params} />} value={value} onChange={(newValue) => { setValue(newValue);setDisdoctor({...disdoctor,appointmentDate:value.$d});}}/>
          </Stack>
        </LocalizationProvider>
        <Button type='submit' onClick={()=>{handleSubmit()}}>Submit appointment</Button>
      </Form>
      :null}
      </div>
      <div className="listofcards">
          <Listofappointment/>
          </div>
    </div>
  )
}

export default Getappointment