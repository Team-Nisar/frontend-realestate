import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Otp from './Otp';
import Details from './Details'; // Import Details component
import '../../styles/Register.css';
import Layout from '../../components/Layout/Layout';

const Register = () => {
  const [step, setStep] = useState(1); // Tracks the current step of the registration process
  const [userType, setUserType] = useState('Individual'); // Tracks the user type
  const [formData, setFormData] = useState({
    number: '',
    country: '+91',
    email: '',
    name: '',
    city: '',
  }); // Tracks user input data
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit the mobile number
  const submitNumber = () => {
    if (formData.number && /^\d{10}$/.test(formData.number)) {
      setStep(2); // Proceed to OTP verification step
    } else {
      alert('Please enter a valid 10-digit mobile number.');
    }
  };

  // Submit user details after all steps are completed
  const submitDetails = () => {
    console.log('User Details:', formData); // For debugging
    alert('Registration complete!');
    navigate('/dashboard'); // Redirect to the Dashboard
  };

  return (
    <Layout title={'Register'}>
      <div className="register-container">
        <div className="register-box">
          {step === 1 && (
            <div className="register-step-one">
              <h2>Register</h2>
              <div className="radio-buttons">
                <label>
                  <input
                    type="radio"
                    name="userType"
                    value="Individual"
                    checked={userType === 'Individual'}
                    onChange={() => setUserType('Individual')}
                  />
                  Individual
                </label>
                <label>
                  <input
                    type="radio"
                    name="userType"
                    value="Agent"
                    checked={userType === 'Agent'}
                    onChange={() => setUserType('Agent')}
                  />
                  Agent
                </label>
              </div>
              <div className="number-input">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  {/* Add more country codes if needed */}
                </select>
                <input
                  type="text"
                  name="number"
                  placeholder="Enter your mobile number"
                  value={formData.number}
                  onChange={handleInputChange}
                />
              </div>
              <button onClick={submitNumber}>Submit</button>
            </div>
          )}
          {step === 2 && (
            <Otp
              type="Signup"
              number={`${formData.country}${formData.number}`}
              onVerified={() => setStep(3)} // Proceed to the details step upon OTP verification
            />
          )}
          {step === 3 && (
            <Details
              formData={formData}
              setFormData={setFormData}
              submitDetails={submitDetails}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Register;
