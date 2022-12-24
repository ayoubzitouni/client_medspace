import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteUserAction } from '../Redux/Actions/adminActions'
import'./usersCard.css'
const UsersCard = ({data}) => {
  const dispatch=useDispatch()
  const deleteUser=(id)=>{
    console.log(id)
    dispatch(deleteUserAction(id))
  }
  return (
    <div className='usersCard'>
        <div className='card'>
            <p>{data.name}</p>
            <p>{data.email}</p>
            {
                data.role==0?<Button onClick={()=>deleteUser(data._id)}>delete User</Button>:<Button onClick={()=>deleteUser(data._id)}>delete doctor</Button>
            }
        </div>
    </div>
  )
}

export default UsersCard