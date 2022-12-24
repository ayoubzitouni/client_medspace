import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Button, Form, Modal } from 'react-bootstrap'
import { makeReportAction } from '../Redux/Actions/doctorAction';

const MedicalReport = ({nme,eml}) => {
  const dispatch=useDispatch();
  console.log(nme,eml)
  const patients=useSelector(state=>state.getAllUsers)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const docid=localStorage.getItem("auth")
  const id=JSON.parse(docid).userId
  const [cred,setCred]=useState()
 
  
  console.log(cred)
  const handleMake=()=>{
    
    dispatch(makeReportAction(cred))
    handleClose()
  }


  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Make medical report
    </Button>
    
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Medical Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                disabled
                value={eml?eml:[]}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={nme?nme:[]}
                disabled
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="25"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                onChange={(e)=>setCred({...cred,title:e.target.value,email:eml,name:nme,doctorid:id})}
                placeholder="Title of the report"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3} 
              onChange={(e)=>setCred({...cred,content:e.target.value})}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleMake}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MedicalReport