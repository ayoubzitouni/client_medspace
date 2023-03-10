import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { signUp } from '../Redux/Actions/userActions'

const Signup = () => {
  const dispatch=useDispatch()
  const [cred,setCred]=useState('')
  const handleSignup=()=>{
    dispatch(signUp(cred))
  }

  return (
    <div className='signup' style={{width:"100%",height:"calc(100vh - 56px)",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#e5e5e5"}}>
        <Form style={{width:"30vw"}}>
          <h1>Sign Up</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Foulen Ben Foulen" onChange={(e)=>setCred({...cred,name:e.target.value})}/>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setCred({...cred,email:e.target.value})}/>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(e)=>setCred({...cred,password:e.target.value})}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={()=>handleSignup()}>
        Submit
      </Button>
      </Form>
    </div>
  )
}

export default Signup