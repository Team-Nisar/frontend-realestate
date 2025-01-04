import React, { useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'
import Button from "../Button";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black ">
      <div className="flex items-center font-medium justify-between px-5">
        <div className="z-50 px-2 md:w-auto w-full flex justify-between items-center">
          <div className="flex gap-10 items-center">
            <h1 className="text-3xl font-bold">Logo</h1>
            <ul className="md:flex hidden text-sm items-center gap-3">
              <NavLinks />
            </ul>
          </div>
          <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
            <Hamburger size={23} toggled={open} toggle={setOpen} />
          </div>
        </div>
        <div className="md:block hidden">
          <Button />
        </div>

        {/* Mobile nav */}
        <ul className={`md:hidden no-scrollbar bg-black fixed z-[2] w-full top-0 overflow-y-auto bottom-0 py-24 px-3 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
          <NavLinks />
          <div className="p-3">
            <Button/>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
