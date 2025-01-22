import React from "react";
import RegisterForm from "../auth/RegisterForm";
import LoginForm from "../auth/LoginForm";
import { LuArrowLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const FormTemplate = ({ title, formType }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative flex flex-col xs:flex-row sm:flex-row md:flex-row w-screen h-screen">
        <div
          onClick={() => navigate(-1)}
          className="p-2 absolute top-6 left-5 flex justify-center items-center rounded-full border-2 border-gray-200"
        >
          <LuArrowLeft size={20} />
        </div>
        <div className="w-full px-5 lg:w-[40%] flex flex-col h-screen bg-gry-400 justify-center items-center bg-gry-300">
          <div className="font-semibold text-3xl">{title}</div>
          {formType === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
        <div
          className={`${
            formType === "login" ? "bg-loginBg" : "bg-registerBg"
          } bg-cover bg-center hidden sm:flex md:flex lg:flex py-2 pr-2 h-screen sm:w-[60%] md:w-[60%] lg:w-[60%]`}
        ></div>
      </div>
    </>
  );
};

export default FormTemplate;
