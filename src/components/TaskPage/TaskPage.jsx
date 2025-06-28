import React from 'react';
import Arrow_icon from '../../assets/Arrow icon.png';
import './TaskPage.css';

const TaskPage = () => {
  return (
    <>
      
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
      </div>

      
      <div className="below-part">
        <div className="table-menu">Task Name</div>
        <div className="table-menu">Employee Name</div>
        <div className="table-menu">Deadline</div>
        <div className="table-menu">Status</div>
        <div className="table-menu">Options</div>
      </div>
    </>
  );
};

export default TaskPage;

