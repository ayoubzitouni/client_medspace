import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Button} from 'react-bootstrap'
import { getMedicalRep } from '../Redux/Actions/userActions'
import Cards from './Cards'

const Reports = () => {
  const dispatch=useDispatch()
  const {reports}=useSelector(state=>state.getReports)
  const [rep,setRep]=useState()
  const {userId}=JSON.parse(localStorage.getItem("auth"))

  const handleReports=()=>{
    dispatch(getMedicalRep(userId))
    setRep(reports)
  }
  return (
    <div>
      <Button onClick={handleReports}>Show Reports</Button>
      {rep && rep.map((el)=> <Cards reports={el} />)}
    </div>
  )
}

export default Reports