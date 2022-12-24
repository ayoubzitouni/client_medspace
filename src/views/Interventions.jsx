
import React from 'react'
import { Link } from 'react-router-dom'
import MedIntervention from '../components/MedIntervention'
import Nb from '../components/Nb'
import './interventions.css'

const Interventions = () => {
  return (
    <div>
        <Link to='/intervention'>
            <Nb/>
            <MedIntervention/>
        </Link>
    </div>
  )
}

export default Interventions