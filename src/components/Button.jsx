import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="/login">
      <button className="bg-primary text-white bg-blue-600 px-6 py-2.5 rounded-full">
      Login
    </button>
    </Link>
  );
};

export default Button;
