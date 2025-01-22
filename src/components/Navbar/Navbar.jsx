import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import NavLinks from "./NavLinks";
import CTABtn from "../common/CTABtn";
import { Link } from "react-router-dom";
import {
  PiChartLineUpDuotone,
  PiUserCircleDuotone,
  PiArrowLeftDuotone,
} from "react-icons/pi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  return (
    <nav className="bg-sup-light-purple fixed z-[10] w-full text-dark-blue">
      <div className="flex items-center font-medium justify-between px-5">
        <div className="z-50 px-2 md:w-auto w-full flex justify-between items-center">
          <div className="flex gap-10 items-center">
            <Link to="/">
              <h1 className="text-3xl text-rich-purple-100 font-bold">Logo</h1>
            </Link>
            <ul className="md:flex hidden text-sm items-center gap-3">
              <NavLinks />
            </ul>
          </div>
          <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
            <Hamburger
              size={20}
              color="#7065F0"
              toggled={open}
              toggle={setOpen}
            />
          </div>
        </div>
        <div className="md:block hidden w-[6rem]">
          {isAuth ? (
            <div className="flex gap-2 items-center">
              <div
                onClick={() => setMenu(!menu)}
                className="w-10 h-10 p-2 rounded-full cursor-pointer flex justify-center items-center text-white bg-gray-400"
              >
                AB
              </div>
              <div
                onClick={() => setMenu(false)}
                className={`absolute ${
                  menu ? "opacity-100" : "opacity-0"
                } transition-opacity duration-200 ease-in-out top-20 cursor-pointer rounded-xl flex flex-col justify-center items-start gap-y-3 p-5 right-5 bg-rich-purple-50 text-dark-blue`}
              >
                <div className="flex gap-1 items-center">
                  <PiUserCircleDuotone size={25} />
                  Profile
                </div>
                <div className="flex gap-1 items-center">
                  <PiChartLineUpDuotone size={25} />
                  Dashboard
                </div>
                <div className="flex gap-1 items-center text-rose-500">
                  <PiArrowLeftDuotone size={25} />
                  Logout
                </div>
              </div>
            </div>
          ) : (
            <Link to={"/login"}>
              <CTABtn title={"Login"} bg={"rich-purple-100"} text={"white"} />
            </Link>
          )}
        </div>

        {/* Mobile nav */}
        <ul
          className={`md:hidden no-scrollbar bg-sup-light-purple fixed z-[2] w-full top-0 overflow-y-auto bottom-0 py-24 px-3 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <NavLinks />
          <div className="p-3">
            {isAuth ? (
              <div
                className={`cursor-pointer rounded-xl flex flex-col justify-center items-start gap-y-5 right-5 text-dark-blue`}
              >
                <div className="flex gap-1 items-center">
                  <PiUserCircleDuotone size={25} />
                  Profile
                </div>
                <div className="flex gap-1 items-center">
                  <PiChartLineUpDuotone size={25} />
                  Dashboard
                </div>
                <div className="flex gap-1 items-center text-rose-500">
                  <PiArrowLeftDuotone size={25} />
                  Logout
                </div>
              </div>
            ) : (
              <Link to={"/login"}>
                <CTABtn title={"Login"} bg={"rich-purple-100"} text={"white"} />
              </Link>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
