import React from 'react'
import Arrow_icon from '../../assets/Arrow icon.png'
import './TaskPage.css'
const TaskPage = () => {
  return (
    <div className='maincontent'>
          <div className="content-section">
            <div className="above-part">
              <p>Add Task</p>
            </div>
            <div className="bottom-part">
              <div className="box">
              <h1>Select Employee</h1>
              <img src={Arrow_icon} alt="" height="5px" />
            </div>
            <div className="box">
              <h1>Task Name</h1>
              <img src={Arrow_icon} alt="" height="5px"/>
            </div>
            <div className="box">
              <h1>Deadline</h1>
              <img src={Arrow_icon} alt="" height="5px"/>
            </div>
            <div className="box">
              <h1>Description</h1>
              <img src={Arrow_icon} alt="" height="5px"/>
            </div>
            <div className="add-icon">
              <p>Add</p>
            </div>
            </div>
          </div>
          {/* <div className="lower-part">
            <div className="table-menu">
                <p>Task Name</p>
            </div>
            <div className="table-menu">
                <p>Employee Name</p>
            </div>
            <div className="table-menu">
                <p>Deadline</p>
            </div>
            <div className="table-menu">
                <p>Status</p>
            </div>
            <div className="table-name">
                <p>Option</p>
            </div>
          </div> */}
        </div>
  )
}

export default TaskPage
