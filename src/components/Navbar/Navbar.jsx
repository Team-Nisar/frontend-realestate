import React, { useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'
import NavLinks from "./NavLinks";
import CTABtn from "../CTABtn"
import { Link } from "react-router-dom";

const Navbar = () => {
  
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-sup-light-purple shadow fixed z-[10] w-full text-dark-blue">
      <div className="flex items-center font-medium justify-between px-5">
        <div className="z-50 px-2 md:w-auto w-full flex justify-between items-center">
          <div className="flex gap-10 items-center">
            <Link to="/"><h1 className="text-3xl text-rich-purple-100 font-bold">Logo</h1></Link>
            <ul className="md:flex hidden text-sm items-center gap-3">
              <NavLinks />
            </ul>
          </div>
          <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
            <Hamburger size={20} color="#7065F0" toggled={open} toggle={setOpen} />
          </div>
        </div>
        <div className="md:block hidden w-[6rem]">
          <CTABtn title={"Login"} link={"login"} bg={"rich-purple-100"} text={"white"}/>
        </div>

        {/* Mobile nav */}
        <ul className={`md:hidden no-scrollbar bg-sup-light-purple fixed z-[2] w-full top-0 overflow-y-auto bottom-0 py-24 px-3 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
          <NavLinks/>
          <div className="p-3">
            <CTABtn title={"Login"} link={"login"} bg={"rich-purple-100"} text={"white"}/>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
