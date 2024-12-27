import React, { useState, useEffect } from 'react';
import '../../styles/Header.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API call to check login status
    axios.get('/api/auth/status')
      .then(response => {
        if (response.data.loggedIn) {
          setIsLoggedIn(true);
          setUserName(response.data.userName);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(error => {
        console.error('Error checking login status:', error);
      });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  return (
    <nav className="navbar">
      {/* Toggle Button */}
      <button className="menu-toggle" aria-label="Toggle Menu" onClick={toggleMenu}>
        ☰
      </button>

    
      <ul className={`menu ${menuOpen ? 'show' : ''}`}>
        <li className="menu-item"><a href="#">Home</a></li>
        <li className="menu-item dropdown">
          <a href="#">Buy <span className="accordion">{menuOpen ? '-' : 'V'}</span></a>
          {menuOpen ? (
            <div className="dropdown-accordion">
              <div className="accordion-section">
                <p className="dropdown-heading">Properties For Sale</p>
                <ul>
                  <li><a href="#">Properties in Mumbai</a></li>
                  <li><a href="#">Properties in Mumbai</a></li>
                  <li><a href="#">Properties in Mumbai</a></li>
                  <li><a href="#">Properties in Mumbai</a></li>
                  <li><a href="#">Properties in Mumbai</a></li>
                </ul>
              </div>
              <div className="accordion-section">
                <p className="dropdown-heading">Apartment/Flats</p>
                <ul>
                  <li><a href="#">Properties in Mumbai</a></li>
                  <li><a href="#">Properties in Mumbai</a></li>
                  <li><a href="#">Properties in Mumbai</a></li>
                  <li><a href="#">Properties in Mumbai</a></li>
                  <li><a href="#">Properties in Mumbai</a></li>
                </ul>
              </div>
            </div>
          ) : (
            <ul className="dropdown-menu">
              <div className="dropdown-column">
                <p className="dropdown-heading">Properties For Sale</p>
                <li><a href="#">Properties in Mumbai</a></li>
                <li><a href="#">Properties in Mumbai</a></li>
                <li><a href="#">Properties in Mumbai</a></li>
                <li><a href="#">Properties in Mumbai</a></li>
                <li><a href="#">Properties in Mumbai</a></li>
              </div>
              <div className="dropdown-column">
                <p className="dropdown-heading">Apartment/Flats</p>
                <li><a href="#">Properties in Mumbai</a></li>
                <li><a href="#">Properties in Mumbai</a></li>
                <li><a href="#">Properties in Mumbai</a></li>
                <li><a href="#">Properties in Mumbai</a></li>
                <li><a href="#">Properties in Mumbai</a></li>
              </div>
            </ul>
          )}
        </li>
        <li className="menu-item dropdown">
          <a href="#">Rent</a>
          {menuOpen ? (
            <div className="dropdown-accordion">
              <div className="accordion-section">
                <p className="dropdown-heading">Heading</p>
                <ul>
                  <li><a href="#">Legal Assistance</a></li>
                  <li><a href="#">Loan Services</a></li>
                  <li><a href="#">Property Management</a></li>
                </ul>
              </div>
              <div className="accordion-section">
                <p className="dropdown-heading">Heading</p>
                <ul>
                  <li><a href="#">Legal Assistance</a></li>
                  <li><a href="#">Loan Services</a></li>
                  <li><a href="#">Property Management</a></li>
                </ul>
              </div>
            </div>
          ) : (
            <ul className="dropdown-menu">
              <div className="dropdown-column">
                <p className="dropdown-heading">Heading</p>
                <li><a href="#">Legal Assistance</a></li>
                <li><a href="#">Loan Services</a></li>
                <li><a href="#">Property Management</a></li>
              </div>
              <div className="dropdown-column">
                <p className="dropdown-heading">Heading</p>
                <li><a href="#">Legal Assistance</a></li>
                <li><a href="#">Loan Services</a></li>
                <li><a href="#">Property Management</a></li>
              </div>
            </ul>
          )}
        </li>
        <li className="menu-item"><a href="#">Contact</a></li>
      </ul>
        {/* Login/Profile Button */}
      <div className="auth-section">
        {isLoggedIn ? (
          <>
            <span className="user-name">Hello, {userName}</span>
            <button className="profile-button" onClick={handleProfile}>Profile</button>
          </>
        ) : (
          <button className="login-button" onClick={handleLogin}>Login</button>
        )}
      </div>

    </nav>
  );
};

export default Header;
