import React from 'react'
import { Link } from 'react-router-dom'
import MedicalReport from '../components/MedicalReport'
import Nb from '../components/Nb'

const MedRep = () => {
  return (
    <>
    <Link style={{textDecoration:"none",color:"black"}} to="/makereport">
        <Nb/>
        <MedicalReport/>
    </Link>
    </>
  )
}

export default MedRep