import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeadSideMask,faAddressBook,faUserDoctor}from '@fortawesome/free-solid-svg-icons'
import './home.css'
const HomePage = () => {
  return (
    <div className='homediv'>
        <div className="homepage">
            <img src="https://cdn.pixabay.com/photo/2021/10/11/17/37/doctor-6701410_960_720.jpg" alt="" />
            <h1 style={{color:"#3d5a80",fontSize:"6rem"}}>MedSpace</h1>
        </div>
        <div className="box">
          <div className="box-1 content">
          <FontAwesomeIcon icon={faHeadSideMask} className='fa-6x' style={{color:"#3d5a80"}}/>
            <div className="description">
              <h2>Lorem, ipsum.</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum vel blanditiis natus nisi fuga praesentium voluptates ratione, ducimus eligendi, autem est tenetur molestiae dolor perferendis assumenda incidunt enim. Fugit?</p>
            </div>
          </div>
          <div className="box-2 content">
          <FontAwesomeIcon icon={faAddressBook} className='fa-6x' style={{color:"#3d5a80"}}/>
            <div className="description">
              <h2>Lorem, ipsum.</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum vel blanditiis natus nisi fuga praesentium voluptates ratione, ducimus eligendi, autem est tenetur molestiae dolor perferendis assumenda incidunt enim. Fugit?</p>
            </div>
          </div>
          <div className="box-3 content">
          <FontAwesomeIcon icon={faUserDoctor}  className='fa-6x' style={{color:"#3d5a80"}}/>
            <div className="description">
              <h2>Lorem, ipsum.</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi harum vel blanditiis natus nisi fuga praesentium voluptates ratione, ducimus eligendi, autem est tenetur molestiae dolor perferendis assumenda incidunt enim. Fugit?</p>
            </div>
          </div>
          </div>
        <div className="footer">

        </div>

    </div>
  )
}

export default HomePage