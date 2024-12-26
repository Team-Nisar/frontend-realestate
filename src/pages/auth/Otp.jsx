import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/Otp.css';

const Otp = ({ type, number }) => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const handleOtpSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/verify-otp', { type, number, otp });
      localStorage.setItem('token', response.data.token);
      alert(`${type} successful!`);
      window.location.href = '/dashboard';
    } catch (error) {
      alert('Invalid OTP or server error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-container">
      <h2>{type === 'Signin' ? 'Sign In' : 'Sign Up'}</h2>
      <p>We have sent an OTP to {number}</p>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleOtpSubmit} disabled={loading}>
        {loading ? 'Verifying...' : 'Submit OTP'}
      </button>
    </div>
  );
};

export default Otp;