import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { loginpatient } from '../Redux/Actions/userActions'
import { useNavigate} from 'react-router-dom'

const Login = () => {
  const dispatch=useDispatch()
  let navigate=useNavigate()
  const {patients}=useSelector(state=>state.login)
  const [cred,setCred]=useState("")
  const loginHandler=()=>{
    dispatch(loginpatient(cred))
  }
  

  useEffect(() => {
    if(localStorage.getItem("auth")){
      navigate("/profile")
    }
  })
  
 
   
    return (
    <div className='login'>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setCred({...cred,email:e.target.value})}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>{setCred({...cred,password:e.target.value})}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary"  type="submit" onClick={()=>loginHandler()}>
        Submit
      </Button>
      </Form>
    </div>
  )
}

export default Login