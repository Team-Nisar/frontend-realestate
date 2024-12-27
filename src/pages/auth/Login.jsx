import React, { useState } from 'react';
import Otp from './Otp';
import '../../styles/Login.css';
import Layout from '../../components/Layout/Layout';

const Login = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('Individual');
  const [formData, setFormData] = useState({ number: '', country: '+91' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitNumber = () => {
    if (formData.number) {
      setStep(2);
    } else {
      alert('Please enter your mobile number.');
    }
  };

  return (
    <Layout title={'Login Page'}>
      <div className="login-container">
      {step === 1 && (
        <div className="login-step-one">
          <h2>Login</h2>
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
              {/* Add more country codes and flags as needed */}
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
      <div>If You Are New Then Plase Register ....<a href='/register'>Click Here</a></div>
      {step === 2 && (
        <Otp type="Signin" number={`${formData.country}${formData.number}`} />
      )}
    </div>
    </Layout>
  );
};

export default Login;