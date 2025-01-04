import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Otp from './Otp';
import Details from './Details'; // Import Details component
import '../../styles/Register.css';
import Layout from '../../components/Layout/Layout';
import phone from "../../../public/assets/phone.jpg"
import { GoArrowRight } from "react-icons/go";

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
      <div className="flex justify-center items-center w-screen bg-cover h-[90vh] bg-registerBg bg-no-repeat">
        <div className="">
          {step === 1 && (
            <div className="bg-white p-10 flex flex-col gap-3 rounded-2xl">
              <h2 className="font-semibold text-2xl text-gray-800">Register to continue</h2>
              <img src={phone} className='w-[15rem] h-[15rem]'/>
              <div className="flex gap-3 rounded-full bg-gray-300 p-1">
                <label className={` py-2.5 px-12 rounded-full ${userType === 'Individual' ? 'bg-gray-800' : 'bg-gray-300 text-gray-800'}`}>
                  <input
                    type="radio"
                    name="userType"
                    value="Individual"
                    checked={userType === 'Individual'}
                    onChange={() => setUserType('Individual')}
                    className="hidden"
                    
                  />
                  Individual
                </label>
                    
                <label className={` py-2.5 px-12 rounded-full  ${userType === 'Agent' ? 'bg-gray-800' : 'bg-gray-300 text-gray-800'}`}>
                  <input
                    type="radio"
                    name="userType"
                    value="Agent"
                    checked={userType === 'Agent'}
                    onChange={() => setUserType('Agent')}
                    className="hidden"

                  />
                  Agent
                </label>
              </div>
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
              <button className='w-full flex gap-2 justify-center items-center bg-blue-600 text-white py-2.5 rounded-lg' onClick={submitNumber}>Submit <GoArrowRight size={20} /></button>
              <div className='text-gray-600'>Already have an account, Please ....<a href='/register'>Click Here</a></div>
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
