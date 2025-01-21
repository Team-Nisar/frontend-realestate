import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import Tab from "../../components/common/Tab";
import CTABtn from "../../components/common/CTABtn";
import { countryCodes } from "../../Data/CountryCodes";
import { PiEyeDuotone, PiEyeSlashDuotone } from "react-icons/pi";
import toast from "react-hot-toast";

const Register = () => {
  const [userType, setUserType] = useState("Individual");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryCodePhone: "+91",
    phoneNumber: "",
    countryCodeWhatsapp: "+91",
    whatsappNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    DOB: "",
    gender: "",
    street: "",
    area: "",
    city: "",
    zipcode: "",
    state: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit user details
  const submitHandler = (e) => {
    e.preventDefault();
    if(formData.countryCodePhone === "+91" && formData.phoneNumber.length !== 10){
      return toast.error("Please enter valid Phone Number")
    }
    if(formData.countryCodeWhatsapp === "+91" && formData.whatsappNumber.length !== 10){
      return toast.error("Please enter valid Whatsapp Number")
    }
    if(formData.password !== formData.confirmPassword){
      return toast.error("Confirm Password doesn’t match Password.")
    }
    toast.success("Registed Sucessfully");
    // navigate("/dashboard"); // Redirect to the Dashboard
  };

  const tabData = [
    {
      id: 1,
      tabName: "Individual",
      type: "Individual",
    },
    {
      id: 2,
      tabName: "Agent",
      type: "Agent",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center bg-white gap-3">
        <div>
          {/* Tab */}
          <Tab tabData={tabData} field={userType} setField={setUserType} />

          <form onSubmit={submitHandler} className="flex flex-col gap-y-2">
            <div className="h-[60vh] px-2 overflow-y-scroll no-scrollbar">
              {/* FirstName and LastName */}
              <div className="flex gap-x-2">
                <label>
                  <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    First Name <sup className="text-rose-500">*</sup>
                  </p>
                  <input
                    required
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                    className="border-2 py-2.5 rounded-lg"
                  />
                </label>
                <label>
                  <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Last Name <sup className="text-rose-500">*</sup>
                  </p>
                  <input
                    required
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter last name"
                    className="border-2 py-2.5 rounded-lg"
                  />
                </label>
              </div>
              {/* Email */}
              <label>
                <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  Email Address <sup className="text-rose-500">*</sup>
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email Address"
                  className="border-2 py-2.5 rounded-lg"
                />
              </label>
              {/* Phone Number */}
              <label>
                <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  Phone Number <sup className="text-rose-500">*</sup>
                </p>
                <div className="flex gap-x-2">
                  <select
                    name="countryCodePhone"
                    value={formData.countryCodePhone}
                    onChange={handleInputChange}
                    className="w-[75px] py-2.5 border-2 rounded-lg"
                  >
                    {countryCodes.map((countryCode, i) => (
                      <option key={i} value={countryCode.code}>
                        {countryCode.code} {countryCode.country}{" "}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter your mobile number"
                    value={formData.phoneNumber}
                    className="border-2 py-2.5 rounded-lg"
                    onChange={handleInputChange}
                  />
                </div>
              </label>
              {/* Whatsapp Number */}
              <label>
                <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  Whatsapp Number <sup className="text-rose-500">*</sup>
                </p>
                <div className="flex gap-x-2">
                  <select
                    name="countryCodeWhatsapp"
                    value={formData.countryCodeWhatsapp}
                    onChange={handleInputChange}
                    className="w-[75px] py-2.5 border-2 rounded-lg"
                  >
                    {countryCodes.map((countryCode,i) => (
                      <option key={i} value={countryCode.code}>
                        {countryCode.code} {countryCode.country}{" "}
                      </option>
                    ))}
                  </select>
                  <input
                    required
                    type="text"
                    name="whatsappNumber"
                    placeholder="Enter your mobile number"
                    value={formData.whatsappNumber}
                    className="border-2 py-2.5 rounded-lg"
                    onChange={handleInputChange}
                  />
                </div>
              </label>
              {/* Password and confirmPassword */}
              <div className="flex gap-x-2">
                <label className="relative">
                  <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Create Password <sup className="text-rose-500">*</sup>
                  </p>
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter Password"
                    className="border-2 py-2.5 rounded-lg"
                  />
                  <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-9 text-gray-500 z-[10] cursor-pointer"
                  >
                    {showPassword ? (
                      <PiEyeDuotone fontSize={20} />
                    ) : (
                      <PiEyeSlashDuotone fontSize={20} />
                    )}
                  </span>
                </label>
                <label className="relative">
                  <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Confirm Password <sup className="text-rose-500">*</sup>
                  </p>
                  <input
                    required
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm Password"
                    className="border-2 py-2.5 rounded-lg"
                  />
                  <span
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-9 z-[10] text-gray-500 cursor-pointer"
                  >
                    {showConfirmPassword ? (
                      <PiEyeDuotone fontSize={20} />
                    ) : (
                      <PiEyeSlashDuotone fontSize={20} />
                    )}
                  </span>
                </label>
              </div>
              {/* DOB and Gender */}
              <div className="flex gap-x-2">
                <label>
                  <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Gender <sup className="text-rose-500">*</sup>
                  </p>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-[150px] py-2.5 border-2 rounded-lg"
                  >
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                    <option value={"Other"}>Other</option>
                  </select>
                </label>
                <label>
                  <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Date of Birth <sup className="text-rose-500">*</sup>
                  </p>
                  <input
                    required
                    type="date"
                    name="DOB"
                    value={formData.DOB}
                    onChange={handleInputChange}
                    placeholder="Enter DOB"
                    className="border-2 py-2.5 w-[150px] rounded-lg"
                  />
                </label>
              </div>
              <div className="flex flex-col gap-x-2">
                <label>
                  <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Street <sup className="text-rose-500">*</sup>
                  </p>
                  <input
                    required
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleInputChange}
                    placeholder="Enter Street"
                    className="border-2 py-2.5 rounded-lg"
                  />
                </label>
                <label>
                  <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Area <sup className="text-rose-500">*</sup>
                  </p>
                  <input
                    required
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    placeholder="Enter Area"
                    className="border-2 py-2.5 rounded-lg"
                  />
                </label>
                <div className="flex gap-x-2">
                  <label>
                    <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
                      City <sup className="text-rose-500">*</sup>
                    </p>
                    <input
                      required
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Enter Your City"
                      className="border-2 py-2.5 rounded-lg"
                    />
                  </label>
                  <label>
                    <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
                      Zipcode <sup className="text-rose-500">*</sup>
                    </p>
                    <input
                      required
                      type="text"
                      name="zipcode"
                      value={formData.zipcode}
                      onChange={handleInputChange}
                      placeholder="Enter Zipcode"
                      className="border-2 py-2.5 rounded-lg"
                    />
                  </label>
                </div>
                <div className="flex gap-x-2">
                  <label>
                    <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
                      State <sup className="text-rose-500">*</sup>
                    </p>
                    <input
                      required
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="Enter Your State"
                      className="border-2 py-2.5 rounded-lg"
                    />
                  </label>
                  <label>
                    <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
                      Country <sup className="text-rose-500">*</sup>
                    </p>
                    <input
                      required
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="Enter Country"
                      className="border-2 py-2.5 rounded-lg"
                    />
                  </label>
                </div>
              </div>
            </div>
            <CTABtn
              type="input"
              title={"Next"}
              icon={<LuArrowLeft size={18} className="rotate-180" />}
              iconPosition={"right"}
              bg={"rich-purple-100"}
              text={"white"}
            />
          </form>
        </div>
        <div className="text-gray-600 text-sm">
          Already have an account,Then Please ....
          <a href="/login" className="text-rich-purple-200">
            Click Here
          </a>
        </div>
      </div>
    </>
    // </Layout>
  );
};

export default Register;
