import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/user/Dashboard';
import HomePage from './pages/HomePage';
import HotSellings from './components/HotSellings';
import PropertyListPage from './pages/PropertyListPage';

const App = () => {
  const isAuthenticated = localStorage.getItem('token');

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hotselling" element={<HotSellings/>}/>
          <Route path="/property-list" element={<PropertyListPage/>}/>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
  );
};

export default App