import React, { useState } from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
import setting_icon from '../../assets/setting icon.png';
import Help_icon from '../../assets/Help png.png';
import Profile_icon from '../../assets/profile id.png';
import task_icon from '../../assets/Task png.png';
import dashboard_icon from '../../assets/Dashboard icon.png';
import Logout_icon from '../../assets/Logout.png';

const Sidebar = ({ extended }) => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('dashboard');

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    navigate('/loginsignup');
    window.location.reload();
  };

  return (
    <div className={`sidebar ${extended ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-section">
        
        <div className="first-section">
          <div
            className={`item log ${activeItem === 'dashboard' ? "highlighted" : ""}`}
            onClick={() => {
              setActiveItem('dashboard');
              navigate('/');
            }}
          >
            <img src={dashboard_icon} alt="Dashboard" />
            {extended && <h1>Dashboard</h1>}
          </div>

          <div
            className={`item log ${activeItem === 'profile' ? "highlighted" : ""}`}
            onClick={() => {
              setActiveItem('profile');
              navigate('/ProfilePage');
            }}
          >
            <img src={Profile_icon} alt="Profiles" />
            {extended && <h1>Profiles</h1>}
          </div>

          <div
            className={`item log ${activeItem === 'task' ? "highlighted" : ""}`}
            onClick={() => {
              setActiveItem('task');
              navigate('/Task');
            }}
          >
            <img src={task_icon} alt="Task" />
            {extended && <h1>Task</h1>}
          </div>

          {extended && <hr />}
        </div>

        
        <div className="second-section">
          {extended && <hr />}
          
          <div className="item log">
            <img src={setting_icon} alt="Settings" />
            {extended && <h1>Settings</h1>}
          </div>

          <div
            className={`item log ${activeItem === 'help' ? "highlighted" : ""}`}
            onClick={() => {
              setActiveItem('help');
              navigate('/HelpPage');
            }}
          >
            <img src={Help_icon} alt="Help" />
            {extended && <h1>Help</h1>}
          </div>

          <div className="item log" onClick={handleLogout}>
            <img src={Logout_icon} alt="Logout" />
            {extended && <h1>Log-out</h1>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
