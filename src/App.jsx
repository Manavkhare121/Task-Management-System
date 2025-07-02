import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LoginPage from './components/LoginPage/LoginPage';
import Signup from './components/SignupPage/Signupage';
import './App.css';
import { TaskProvider } from './Context/TaskContext';
import { ProfileProvider } from './Context/ProfileContext';

function AppWrapper() {
  const location = useLocation();

  
  const hideLayout = location.pathname === '/loginsignup' || location.pathname === '/SignupPage';

  return (
    <>
      {hideLayout ? (
        <Routes>
          <Route path="/loginsignup" element={<LoginPage />} />
          <Route path="/SignupPage" element={<Signup />} />
        </Routes>
      ) : (
        <Navbar />
      )}
    </>
  );
}

function App() {
  return (
   <ProfileProvider>
     <TaskProvider>
      <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
    </TaskProvider>
   </ProfileProvider>
    
  );
}

export default App;
