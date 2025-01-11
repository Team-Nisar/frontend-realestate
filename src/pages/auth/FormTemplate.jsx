import React from "react";
import RegisterForm from "../auth/RegisterForm";
import LoginForm from "../auth/LoginForm";

const FormTemplate = ({title, formType}) => {
  return (
    <>
      <div className="flex justify-end items-start w-screen bg-cover h-screen bg-loginBg bg-no-repeat">
        <div className="flex justify-end items-center w-[95%] sm:w-[60%] md:w-[75%] lg:w-[75%] xl:w-[75%] 2xl:w-[75%] h-screen py-20 mx-auto">
          {
            formType === "login" ? <LoginForm/> : <RegisterForm/>
          }
        </div>
      </div>
    </>
  );
};

export default FormTemplate;
