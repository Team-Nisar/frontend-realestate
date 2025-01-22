import React from "react";
import { Link } from "react-router-dom";

const Button = ({title, icon, bg, text, iconPosition}) => {
  return (
    <div className="w-full">
        <button className={`w-full flex gap-2 justify-center items-center ${iconPosition === "right" ? "flex-row-reverse" : "flex-row"} py-2.5 px rounded-lg text-${text} bg-${bg} hover:scale-105 transition-all duration-300 ease-in-out`}>
          {icon}{title}
        </button>
    </div>
  );
};

export default Button;
