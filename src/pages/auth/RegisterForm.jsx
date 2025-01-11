import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Otp from "./Otp";
import Details from "./Details"; // Import Details component
import CTABtn from "../../components/CTABtn"
import { GoArrowRight } from "react-icons/go";
import { LuArrowLeft } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Register = () => {
  const [step, setStep] = useState(1); // Tracks the current step of the registration process
  const [userType, setUserType] = useState("Individual"); // Tracks the user type
  const [formData, setFormData] = useState({
    number: "",
    country: "+91",
    email: "",
    name: "",
    city: "",
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
      alert("Please enter a valid 10-digit mobile number.");
    }
  };

  // Submit user details after all steps are completed
  const submitDetails = () => {
    console.log("User Details:", formData); // For debugging
    alert("Registration complete!");
    navigate("/dashboard"); // Redirect to the Dashboard
  };

  return (
    // <Layout title={'Register'}>
    <>
      {step === 1 && (
        <div className="bg-white p-10 flex flex-col gap-3 rounded-2xl">
          <div className="flex gap-3 mb-10">
            <div
              className="p-2 flex justify-center items-center rounded-full bg-[#00000044]"
              onClick={() => navigate(-1)}
            >
              <LuArrowLeft size={20} />
            </div>
            <h2 className="font-semibold text-2xl text-gray-800">
              Create an account
            </h2>
          </div>
          {/* <img src={phone} className="w-[15rem] h-[15rem]" /> */}
          <div className="flex justify-between items-center rounded-full bg-rich-purple-50 p-1">
            <label
              className={` w-[50%] flex justify-center items-center py-1.5 px-3 rounded-full ${
                userType === "Individual"
                  ? "bg-rich-purple-100 text-white"
                  : "bg-rich-purple-50 text-dark-blue"
              }`}
            >
              <input
                type="radio"
                name="userType"
                value="Individual"
                checked={userType === "Individual"}
                onChange={() => setUserType("Individual")}
                className="hidden"
              />
              Individual
            </label>

            <label
              className={` w-[50%] flex justify-center items-center py-1.5 px-3 rounded-full  ${
                userType === "Agent"
                  ? "bg-rich-purple-100 text-white"
                  : "bg-rich-purple-50 text-dark-blue"
              }`}
            >
              <input
                type="radio"
                name="userType"
                value="Agent"
                checked={userType === "Agent"}
                onChange={() => setUserType("Agent")}
                className="hidden"
              />
              Agent
            </label>
          </div>
          <div className="flex gap-2 text-gray-600">
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-[30%] py-2.5 border-2 rounded-lg"
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
              className="border-2 rounded-lg"
              onChange={handleInputChange}
            />
          </div>
          <button
            className="w-full flex gap-2 justify-center items-center bg-rich-purple-100 text-white py-2.5 rounded-lg"
            onClick={submitNumber}
          >
            Submit <GoArrowRight size={20} />
          </button>
          <div className="relative text-gray-400 my-3">
            <div className="absolute -top-3 px-2 left-[50%] translate-x-[-50%] bg-white">OR</div>
            <div className="border-t-2"></div>
          </div>
          <div className="flex gap-2 justify-start w-full text-dark-blue">
            <CTABtn title={"Google"} link={"/"} bg={"rich-purple-50"} icon={<FcGoogle size={20}/>} text={"dark-blue"}/>
            <CTABtn title={"Facebook"} link={"/"} bg={"rich-purple-50"} icon={<FaFacebook size={20} className="text-blue-600"/>} text={"dark-blue"}/>
          </div>
          <div className="text-gray-600 text-sm">
            Already have an account,Then Please ....
            <a href="/login" className="text-rich-purple-200">Click Here</a>
          </div>
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
    </>
    // </Layout>
  );
};

export default Register;
