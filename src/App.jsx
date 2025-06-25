import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LoginPage from './components/LoginPage/LoginPage';
import './App.css';
function AppWrapper() {
  const location = useLocation();
  const hideLayout = location.pathname === '/loginsignup';
  

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
         
        <Route path="/loginsignup" element={<LoginPage />} />
       
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;

