import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/Otp.css';
import Layout from '../../components/Layout/Layout';

const Otp = ({ type, number }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;  // Only allow numeric input
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically move to next input when a digit is entered
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleOtpSubmit = async () => {
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      alert("Please enter the 6-digit OTP.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('/api/verify-otp', { type, number, otp: otpCode });
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
        
        <div className="otp-input-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(e, index)}
              required
            />
          ))}
        </div>
        <div>If you didn't get the OTP then <a href='#'>Resend OTP</a></div>

        <button onClick={handleOtpSubmit} disabled={loading}>
          {loading ? 'Verifying...' : 'Submit OTP'}
        </button>
      </div>
  );
};

export default Otp;
