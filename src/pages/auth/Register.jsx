import React, { useState } from 'react';
import Otp from './Otp';
import Details from './Details'; // Import Details component
import '../../styles/Register.css';
import Layout from '../../components/Layout/Layout';

const Register = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('Individual');
  const [formData, setFormData] = useState({
    number: '',
    country: '+91',
    email: '',
    name: '',
    city: ''
  });

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

  const submitDetails = () => {
    // Handle form submission
    console.log('User Details:', formData);
    alert('Registration complete!');
  };

  return (
    <Layout title={'Register'}>
      <div className="register-container">
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
            onVerified={() => setStep(3)} // Move to step 3 on OTP verification
          />
        )}
        {step === 3 && (
          <Details formData={formData} setFormData={setFormData} submitDetails={submitDetails} />
        )}
      </div>
    </Layout>
  );
};

export default Register;
