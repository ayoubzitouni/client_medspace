import React from 'react'
import {Card} from 'react-bootstrap'

const DashboardIntervetions = ({interventions}) => {
  let operations=0
  let medicalappointment=0
  let success=0
  let fail=0
  const mapping=()=>{
    interventions.map((el)=>el.type=="op"?operations+=1:medicalappointment+=1)
    interventions.map((el)=>el.result=="success"?success+=1:fail+=1)
  }
  mapping()
  return (
    <div className='dashboardinter'>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>Interventions</Card.Title>
        <Card.Text>
          <div className="numberofinterventions">
            <p>{`Interventions : ${interventions.length}`}</p>
            <p>{`Operations : ${operations}`}</p>
            <p>{`Medical intervention : ${medicalappointment}`}</p>
            <p>{`Success : ${success}`}</p>
            <p>{`Fail : ${fail}`}</p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default DashboardIntervetions