import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getMedicalRep } from '../Redux/Actions/userActions'
import Cards from './Cards'

const Reports = () => {
  const dispatch=useDispatch()
  const {reports}=useSelector(state=>state.getReports)
  const [rep,setRep]=useState()
  const {userId}=JSON.parse(localStorage.getItem("auth"))
  useEffect(() => {
    dispatch(getMedicalRep(userId))
    setRep(reports)
  }, [])
  

  return (
    <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:"5px"}}>
      {rep && rep.map((el)=> <Cards reports={el} />)}
    </div>
  )
}

export default Reports