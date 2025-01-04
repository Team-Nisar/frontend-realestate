import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/Otp.css';
import { GoArrowRight } from "react-icons/go";
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
      <div className="bg-white p-10 flex flex-col gap-3 rounded-2xl">
        <h2 className='font-semibold text-2xl text-gray-800'>{type === 'Signin' ? 'Sign In' : 'Sign Up'}</h2>
        <p className=' text-gray-600 text-sm font-semibold'>We have sent an OTP to {number}</p>
        
        <div className="otp-input-container mt-5">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(e, index)}
              required
              className='w-10 h-10 border-gray-400 text-gray-500 flex justify-center items-center text-lg'
            />
          ))}
        </div>
        <div className='text-gray-500'>If you didn't get the OTP then <a href='#'>Resend OTP</a></div>

        <button className='w-full flex gap-2 justify-center items-center bg-green-600 text-white py-2.5 rounded-lg' onClick={handleOtpSubmit} disabled={loading}>
          {loading ? 'Verifying...' : 'Submit OTP'}<GoArrowRight size={20} />
        </button>
      </div>
  );
};

export default Otp;
