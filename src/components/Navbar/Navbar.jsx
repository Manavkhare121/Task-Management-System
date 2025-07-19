import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Dashboard from '../../components/Dashboard/Dashboard';
import TaskPage from '../../components/TaskPage/TaskPage';
import '../../components/Navbar/Navbar.css';
import { Routes, Route } from 'react-router-dom';
import Profile from '../../components/Profile/Profile'
import search_icon from '../../assets/search icon.png';
import task_icon from '../../assets/Task icon.png';
import menu_icon from '../../assets/menu icon.png';
import Arrow_icon from '../../assets/Arrow icon.png';
import notification_icon from '../../assets/Notification sign.png';
import profile_icon from '../../assets/leetcode.jpeg';
import Help from '../../components/Help/Help'
import Signup from '../../components/SignupPage/Signupage'
import Loginpage from '../../components/LoginPage/LoginPage'

const Navbar = () => {
  const [extended, setExtended] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('authenticated') === 'true'
  );

  
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      {!isAuthenticated ? (
        <Loginpage onLogin={handleLogin} />
      ) : (
        <div className="main">
          <div className="Nav">
            <div className="first-part">
              <div className="Logo-part">
                <img
                  src={menu_icon}
                  alt=""
                  height="30px"
                  onClick={() => setExtended(!extended)}
                  style={{ cursor: 'pointer' }}
                />
                <div className="logo">
                  <img src={task_icon} alt="" height="40px" />
                  <h1>UpTrack</h1>
                </div>
              </div>
              <div className="search-part">
                <img src={search_icon} alt="" height="15px" />
                <input type="text" placeholder="Search" />
              </div>
            </div>
            <div className="second-part">
              <img src={notification_icon} alt="" height="30px" />
              <img src={profile_icon} alt="" height="40px" />
              <h1>Manav</h1>
              <img src={Arrow_icon} alt="" height="10px" />
            </div>
          </div>

          <div className={`content-area ${extended ? 'sidebar-expanded' : ''}`}>
            <Sidebar extended={extended} />
            <div className="dashboard-wrapper">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Task" element={<TaskPage />} />
                <Route path="/ProfilePage" element={<Profile />} />
                <Route path="/HelpPage" element={<Help />} />
                <Route path="/SignupPage" element={<Signup />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;