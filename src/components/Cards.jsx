import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {jsPDF} from 'jspdf'
import './cards.css'

const Cards = (el) => {
    const {reports}=el
    const printReport=()=>{
      const doc= new jsPDF()
      doc.setFontSize(24).text(`Title: ${reports.title}`,50,10)
      doc.setFontSize(12).text(`Report:\n   ${reports.content}`,10,35)
      doc.setFontSize(6).text(`Reported By: ${reports.doctorid}`,105,287)
      doc.save()
    }
  return (
    <div className='cardreport'>
          <Card className='card'style={{ width: '40vw',margin:'5px'}}>
      <Card.Body>
        <Card.Title>{reports.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text style={{ maxHeight:"8vh",overflow:"hidden"}}>
        {reports.content}
        </Card.Text>
        <Button onClick={()=>printReport()}>Print PDF report</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cards