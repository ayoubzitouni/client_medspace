import React from 'react'
import { Button, Card } from 'react-bootstrap'
import SignUpDoctor from './SignUpDoctor'

const DashboardUsers = ({users}) => {
  let patients=0
  let doctors=0
  let admin=0
  const mapping=()=>{
    users.map((el)=>el.role==0?patients+=1:el.role==1?doctors+=1:admin+=1)

  }
  mapping()
  return (
    <div className='dashboardusers'>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Users</Card.Title>
        <Card.Text>
          <div className="numberofusers">
            <p>{`Patients : ${patients}`}</p>
            <p>{`Doctors : ${doctors}`}</p>
            <p>{`Admin : ${admin}`}</p>
          </div>
        </Card.Text>
        <SignUpDoctor/>
      </Card.Body>
    </Card>
    </div>
  )
}

export default DashboardUsers