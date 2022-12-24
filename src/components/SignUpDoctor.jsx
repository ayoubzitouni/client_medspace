import React, { useState } from 'react'
import { Button, Dropdown, DropdownButton, Form, Modal} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { signUpDoctor } from '../Redux/Actions/userActions';

const SignUpDoctor = () => {
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);
  const [doctor, setDoctor] = useState('')
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handelSubmit=()=>{
    dispatch(signUpDoctor(doctor))
    handleClose()
  }

  return (
    <>
        <Button variant="primary" onClick={handleShow} >add Doctor</Button>
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Doctor</Modal.Title>
        </Modal.Header>


        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e)=>setDoctor({...doctor,email:e.target.value})}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Foulen Ben Foulen"
                onChange={(e)=>setDoctor({...doctor,name:e.target.value})}
                autoFocus
              />
            </Form.Group>
            <DropdownButton variant="outline-secondary" title="Dropdown" id="input-group-dropdown-2" align="end">
              <Dropdown.Item onClick={()=>setDoctor({...doctor,speciality:"pedeiatrics"})} >Pediatrics</Dropdown.Item>
              <Dropdown.Item onClick={()=>setDoctor({...doctor,speciality:"neurology"})}>Neurology</Dropdown.Item>
              <Dropdown.Item onClick={()=>setDoctor({...doctor,speciality:"dermatology"})}>Dermatology</Dropdown.Item>
              <Dropdown.Item onClick={()=>setDoctor({...doctor,speciality:"ophthalmology"})}>Ophthalmology</Dropdown.Item>
              <Dropdown.Item onClick={()=>setDoctor({...doctor,speciality:"psychiatrists"})}>Psychiatrists</Dropdown.Item>
              <Dropdown.Item onClick={()=>setDoctor({...doctor,speciality:"cardiologists"})}>Cardiologists</Dropdown.Item>
            </DropdownButton>


          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
        
        </Modal>
      
    </>
  )
}

export default SignUpDoctor