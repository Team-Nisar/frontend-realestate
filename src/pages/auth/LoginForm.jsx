import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import CTABtn from "../../components/common/CTABtn";
import { PiEyeDuotone, PiEyeSlashDuotone } from "react-icons/pi";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="bg-white sm:w-[70%] md:w-[60%] lg:w-[65%] flex flex-col mt-5 gap-3">
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-3 text-gray-600"
        >
          <label className="w-full">
            <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Email Address <sup className="text-rose-500">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
              className="border-2 py-2.5 rounded-lg"
            />
          </label>
          <label className="relative">
            <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Password <sup className="text-rose-500">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
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
            <Link to="/forgot-password">
              <p className="mt-1 ml-auto max-w-max text-xs text-dark-blue">
                Forgot Password
              </p>
            </Link>
          </label>
          <CTABtn
            title={"Login"}
            icon={<LuArrowLeft size={18} className="rotate-180" />}
            iconPosition={"right"}
            bg={"rich-purple-100"}
            text={"white"}
          />
        </form>

        <div className="text-gray-600 text-sm">
          If You Are New Then Please Register ....
          <a href="/register" className="text-rich-purple-200">
            Click Here
          </a>
        </div>
      </div>
    </>
    // </Layout>
  );
};

export default Login;
