import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LoginPage from './components/LoginPage/LoginPage';
import Signup from './components/SignupPage/Signupage';
import './App.css';
import { TaskProvider } from './Context/TaskContext';
import { ProfileProvider } from './Context/ProfileContext';

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('authenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/loginsignup" />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/loginsignup" element={<LoginPage />} />
      <Route path="/SignupPage" element={<Signup />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <Navbar />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function App() {
  useEffect(() => {
    if (
      process.env.NODE_ENV === 'development' &&
      !sessionStorage.getItem('auth_cleared')
    ) {
      localStorage.removeItem('authenticated');
      sessionStorage.setItem('auth_cleared', 'true');
    }
  }, []);

  return (
    <ProfileProvider>
      <TaskProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TaskProvider>
    </ProfileProvider>
  );
}

export default App;

