import React, { useState } from 'react';
import Otp from './Otp';
import '../../styles/Login.css';
import Layout from '../../components/Layout/Layout';
import phone from "../../../public/assets/phone.jpg"
import { GoArrowRight } from "react-icons/go";

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
      <div className="flex justify-center items-center w-screen bg-cover h-[90vh] bg-loginBg bg-no-repeat">
      {step === 1 && (
        <div className="bg-white p-10 flex flex-col gap-3 rounded-2xl">
          <h2 className='font-semibold text-2xl text-gray-800'>Login to continue</h2>
          <img src={phone} className='w-[15rem] h-[15rem]'/>
          {/* <div className="radio-buttons">
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
          </div> */}
          <div className="flex text-gray-600">
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className='w-[30%] py-2.5'
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
          <button className='w-full flex gap-2 justify-center items-center bg-blue-600 text-white py-2.5 rounded-lg' onClick={submitNumber}>Submit <GoArrowRight size={20} /></button>
          <div className='text-gray-600'>If You Are New Then Plase Register ....<a href='/register'>Click Here</a></div>
        </div>
      )}
      {step === 2 && (
        <Otp type="Signin" number={`${formData.country}${formData.number}`} />
      )}
    </div>
    </Layout>
  );
};

export default Login;