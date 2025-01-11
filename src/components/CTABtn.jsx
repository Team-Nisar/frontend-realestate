import React from "react";
import { Link } from "react-router-dom";

const Button = ({link, title, icon, bg, text}) => {
  return (
    <div className="w-full">
      <Link to={`/${link}`}>
      <button className={`w-full flex gap-2 justify-center items-center py-2.5 px rounded-lg text-${text} bg-${bg} hover:scale-105 transition-all duration-300 ease-in-out`}>
        {icon}{title}
      </button>
    </Link>
    </div>
  );
};

export default Button;
