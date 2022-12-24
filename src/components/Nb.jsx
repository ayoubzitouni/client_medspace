import React, { useEffect } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { logOutActions } from '../Redux/Actions/userActions';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Nb = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {patients}=useSelector(state=>state.login)
  

  const handleLogout=()=>{
    dispatch(logOutActions())
      navigate(`/`)
      localStorage.clear()
  }  

  

  return (
    <div className='nb'>
      
        <Navbar bg="primary" variant="dark">
            <Container>
            <LinkContainer to="/">
            <Navbar.Brand href="#home">MedSpace</Navbar.Brand>
            </LinkContainer>
                <Nav className="me-auto">
                  <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                {localStorage.getItem("auth") ?
                    <LinkContainer to="/profile">
                      <Nav.Link >Profile</Nav.Link>
                    </LinkContainer>
                    :
                <LinkContainer to="/login">
                  <Nav.Link >Login</Nav.Link>
                </LinkContainer>
                }
                
                {
                  patients?
                  patients.role==0 ?
                  <LinkContainer to="/getreport">
                    <Nav.Link>Get Report</Nav.Link>
                  </LinkContainer>
                  :patients.role==1 ?
                  <LinkContainer to="/intervention">
                    <Nav.Link>Interventions</Nav.Link>
                  </LinkContainer>
                  :patients.role==2 ?
                  <LinkContainer to="/dashboard">
                    <Nav.Link>Dashboard</Nav.Link>
                  </LinkContainer>
                  :null
                  :null

                }
                {
                  !localStorage.getItem("auth") ?
                  <LinkContainer to="/signup">
                    <Nav.Link >Signup</Nav.Link>
                  </LinkContainer>
                  :
                  <Nav.Link><Button type="submit" onClick={handleLogout}>LogOut</Button></Nav.Link>
                  
                }
            </Nav>
            </Container>
        </Navbar>
        </div>
  )
}

export default Nb