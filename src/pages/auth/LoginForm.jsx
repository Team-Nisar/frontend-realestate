import React, { useState } from "react";
import Otp from "./Otp";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import CTABtn from "../../components/CTABtn"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("Individual");
  const [formData, setFormData] = useState({ number: "", country: "+91" });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitNumber = () => {
    if (formData.number) {
      setStep(2);
    } else {
      alert("Please enter your mobile number.");
    }
  };

  return (
    // <Layout title={'Login Page'}>
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
              Login to continue
            </h2>
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
              {/* Add more country codes and flags as needed */}
            </select>
            <input
              type="text"
              name="number"
              placeholder="Enter your mobile number"
              value={formData.number}
              onChange={handleInputChange}
              className="border-2 rounded-lg"
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
            If You Are New Then Please Register ....
            <a href="/register" className="text-rich-purple-200">Click Here</a>
          </div>
        </div>
      )}
      {step === 2 && (
        <Otp type="Signin" number={`${formData.country}${formData.number}`} />
      )}
    </>
    // </Layout>
  );
};

export default Login;
