import React from 'react';
import './Sidebar.css';
import setting_icon from '../../assets/setting icon.png';
import Help_icon from '../../assets/Help png.png';
import Profile_icon from '../../assets/profile id.png';
import task_icon from '../../assets/Task png.png';
import dashboard_icon from '../../assets/Dashboard icon.png';
import Logout_icon from '../../assets/Logout.png';
import {useNavigate } from 'react-router-dom';

const Sidebar = ({ extended }) => {
  const navigate = useNavigate(); 
  return (
    <div className={`sidebar ${extended ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-section">
        <div className="first-section">
          <div className="item log" onClick={() => navigate('/')}>
            <img src={dashboard_icon}  alt="" />
            {extended && <h1>Dashboard</h1>}
          </div>
          <div className="item log">
            <img src={Profile_icon} alt="" />
            {extended && <h1>Profiles</h1>}
          </div>
          <div className="item log" onClick={() => navigate('/Task')}>
            <img src={task_icon} alt=""  />
            {extended && <h1>Task</h1>}
          </div>
          {extended && <hr/>}
        </div>

        <div className="second-section">
          {extended && <hr/>}
          <div className="item log">
            <img src={setting_icon} alt="" />
            {extended && <h1>Settings</h1>}
          </div>
          <div className="item log">
            <img src={Help_icon} alt="" />
            {extended && <h1>Help</h1>}
          </div>
          <div className="item log" onClick={() => navigate('/loginsignup')}>
            <img src={Logout_icon} alt="" onClick={() => navigate('/loginsignup')}/>
            {extended &&  <h1>Log-out</h1>}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
