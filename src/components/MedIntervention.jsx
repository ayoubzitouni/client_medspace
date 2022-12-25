import React, { useEffect, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAvailableRoomsAction, submitInterventionAction } from '../Redux/Actions/doctorAction'
import { getAllUsersActions } from '../Redux/Actions/userActions'
import MedicalReport from './MedicalReport'
import'./medIntervention.css'

const MedIntervention = () => {

    const dispatch=useDispatch()
    const Rooms=useSelector(state=>state.getAvailableRooms.payload)
    const auth=JSON.parse(localStorage.getItem("auth"))
    const [patientName, setPatientName] = useState("")
    const [patientEmail, setPatientEmail] = useState("")
    const patients=useSelector(state=>state.getAllUsers)
    const {payload}=useSelector(state=>state.makeReport)
    const submitIntervention=useSelector(state=>state.submitIntervention)
    const [intervention, setIntervention] = useState('')
    
    
    const cred=JSON.parse(localStorage.getItem("auth"))
    const docid=cred.userId
    
    const getAllPatients=()=>{
        dispatch(getAllUsersActions(auth))
    }

    const getAvailableRooms=()=>{
        dispatch(getAvailableRoomsAction())
    }

    const submitHandle=()=>{        
        dispatch(submitInterventionAction(intervention))
    }
    useEffect(() => {
        getAvailableRooms()
        getAllPatients()
    }, [])
    return (
        <div className="inter">
        <div className='intervention'>
            <h1>Intervention</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Intervention</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option onClick={()=>setIntervention({...intervention,Intervention:"",doctorId:docid})}>Open this select menu</option>
                    <option value="1" onClick={()=>setIntervention({...intervention,Intervention:"op",doctorId:docid})}>Operations</option>
                    <option value="2" onClick={()=>setIntervention({...intervention,Intervention:"med",doctorId:docid})}>Medical</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Patient</Form.Label>
                <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e)=>setPatientName(e.target.value)}
                    onClick={()=>getAllPatients()}
                    value={patientName}
                />
                <div>
                {patientName.length!=0?
                <div className='patients_get' style={{overflow:"hidden",overflowY:"auto",padding:"5px"}}>
                    {patients && patients.patients ?
                    patients.patients.data.allUsers.map((el)=>el.name.toLowerCase().includes(patientName.toLowerCase()) && el.role==0?<p onClick={()=>{setPatientName(el.name);setPatientEmail(el.email)}}>{el.name}</p>:null)
                    :null}
                </div>
                :null
                }
                </div>
        
            </Form.Group>
            {intervention.Intervention=="op"?
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Rooms</Form.Label>
                <Form.Select aria-label="Default select example" onClick={()=>getAvailableRooms()}>
                    <option >Rooms available</option>
                    {Rooms && Rooms.Rooms.map((el)=><option onClick={()=>setIntervention({...intervention,roomID:el._id})}>{el.roomNumber}</option>)}
                </Form.Select>
            </Form.Group>
            :null
            }
            {intervention.Intervention=="op"?
                <InputGroup className="mb-3">
                <InputGroup.Text>Days of Staying</InputGroup.Text>
                <Form.Control aria-label="Days"  onChange={(e)=>setIntervention({...intervention,dayOfRest:parseInt(e.target.value)})}/>
            </InputGroup>
            :null
            }
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Report</Form.Label>
                <br></br>
                <MedicalReport nme={patientName} eml={patientEmail}/>
            </Form.Group>
            {intervention.Intervention=="op"?
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Result</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Result</option>
                    <option value="1"onClick={()=>setIntervention({...intervention,result:"success",reportid:payload.reprotid})}>Success</option>
                    <option value="2" onClick={()=>setIntervention({...intervention,Intervention:"fail",reportid:payload.reprotid})}>Fail</option>
                </Form.Select>
            </Form.Group>
            :null
            }
            
            <Button variant="primary" type="submit" onClick={()=>submitHandle()}>
                Submit
            </Button>{
                submitIntervention && submitIntervention.payload?<span style={{color:"green",marginLeft:"15px",textTransform:"capitalize"}}>{submitIntervention.payload.data.message}</span>:null
            }
        </Form>
    </div>
    </div>
  )
}

export default MedIntervention