import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Dashboard.css';
import Layout from '../../components/Layout/Layout';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Layout title={'Dashboard'}>
    <div className="dashboard-container">
      <h1>Welcome to Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
    </Layout>
  );
};

export default Dashboard;