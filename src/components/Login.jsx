import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { loginpatient } from '../Redux/Actions/userActions'
import { useNavigate} from 'react-router-dom'

const Login = () => {
  const dispatch=useDispatch()
  let navigate=useNavigate()
  const Login=useSelector(state=>state.login)
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
    <div className='login' style={{width:"100%",height:"calc(100vh - 56px)",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#e5e5e5"}}>
      <div className="loginform" style={{width:"30vw"}}>
      <h1>Login</h1>
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
      <Button variant="primary"  type="submit" onClick={()=>loginHandler()}>
        Submit
      </Button>
      {Login.loading==true?<span style={{marginLeft:"15px",color:"red"}}>Sorry bad credentials</span>:null}
      </Form>
      </div>
    </div>
  )
}

export default Login