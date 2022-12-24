import React from 'react'
import {Button, Card} from 'react-bootstrap';

const DashboardRooms = ({rooms}) => {
  let n=0
  {rooms.map((el)=>el.availability?n+=1:null)}
  return (
    <div>
      
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Rooms</Card.Title>
        <Card.Text>
          <div className="numberofrooms">
            <p>{`Rooms : ${rooms.length}`}</p>
            <p>{`Rooms available : ${n}`}</p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  )
}

export default DashboardRooms