import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import { FiChevronUp, FiChevronDown, FiPlus, FiMinus   } from "react-icons/fi";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-5 flex justify-between items-center border-b md:border-b-0 lg:border-b-0 xl:border-b-0 md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                {heading === link.name ? <FiChevronUp size={30}/> : <FiChevronDown size={30}/>}
              </span>
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180">
                <FiChevronDown/>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-16 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-10 absolute 
                    mt-1 bg-sup-light-purple rotate-45"
                    ></div>
                  </div>
                  <div className={`bg-sup-light-purple mega-menu rounded-xl max-w-7xl min-w-3xl h-[41vh] p-5 flex justify-evenly gap-10`}>
                    {link.sublinks.map((mysublinks) => (
                      <div className=" ">
                        <h1 className="text-lg text-rich-purple-100 font-semibold">
                          {mysublinks.Head}
                        </h1>
                        <div className="overflow-y-scroll h-[90%] pr-5">
                          {mysublinks.sublink.map((slink) => (
                            <li className="text-xs my-2.5">
                              <Link
                                to={slink.link}
                                className="hover:text-primary font-medium"
                              >
                                {slink.name.slice(0,27)+`${slink.name.length > 25 ? "..." : ""}`}
                              </Link>
                            </li>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Mobile menus */}
          <div
            className={`${heading === link.name ? "md:hidden" : "hidden"}`}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div className="">
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 text-rich-purple-100 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-2xl md:mt-1 md:ml-2 inline">
                      {subHeading === slinks.Head ? <FiMinus/> : <FiPlus/>}
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    } px-3 `}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-2 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
