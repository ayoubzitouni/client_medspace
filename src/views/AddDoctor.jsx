import React from 'react'
import { Link } from 'react-router-dom'
import Nb from '../components/Nb'
import SignUpDoctor from '../components/SignUpDoctor'
const AddDoctor = () => {
  return (
    <div>
        <Link to="/adddoctor">
        <Nb/>
        <SignUpDoctor/>
        </Link>
    </div>
  )
}

export default AddDoctor