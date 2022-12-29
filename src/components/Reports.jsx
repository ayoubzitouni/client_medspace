import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getMedicalRep } from '../Redux/Actions/userActions'
import Cards from './Cards'

const Reports = () => {
  const dispatch=useDispatch()
  const report=useSelector(state=>state.getReports)
  const {userId}=JSON.parse(localStorage.getItem("auth"))
  useEffect(() => {
    dispatch(getMedicalRep(userId))
  },[])
  return (
    <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:"5px"}}>
      {report && !report.reports?<h1>No reports</h1>:report.reports.length>1?report.reports.map((el)=><Cards reports={el}/>):<h1>No reports</h1>}
    </div>
  )
}

export default Reports