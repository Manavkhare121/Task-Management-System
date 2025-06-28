import React from 'react'
import Arrow_icon from '../../assets/Arrow icon.png'
import './Profile.css'
const Profile = () => {
  return (
    <>
    <div className='maincontent'>
          <div className="content-section">
            <div className="above-part">
              <p>Add Profiles</p>
            </div>
            <div className="bottom-part">
              <div className="box">
              <h1>Name</h1>
              <img src={Arrow_icon} alt="" height="5px" />
            </div>
            <div className="box">
              <h1>Role</h1>
              <img src={Arrow_icon} alt="" height="5px"/>
            </div>
            <div className="box">
              <h1>Number</h1>
              <img src={Arrow_icon} alt="" height="5px"/>
            </div>
            <div className="box">
              <h1>Email-Id</h1>
              <img src={Arrow_icon} alt="" height="5px"/>
            </div>
            <div className="add-icon">
              <p>Add</p>
            </div>
            </div>
          </div>
        </div>
    
      <div className="below-part">
        <div className="table-menu">Employee Name</div>
        <div className="table-menu">Role</div>
        <div className="table-menu">Phone Number</div>
        <div className="table-menu">Email Id</div>
        <div className="table-menu">Options</div>
      </div>
    
    </>
  )
}

export default Profile
