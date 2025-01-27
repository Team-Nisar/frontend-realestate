import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cities } from "./Mylinks";
import { FiChevronUp, FiChevronDown, FiPlus, FiMinus } from "react-icons/fi";
import { FilterContext } from "../../context/FilterContext";
import {useMegaMenuLinks} from "../Navbar/Mylinks"

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  const {setCurruntCity, curruntCity} = useContext(FilterContext)

  const handleVal = (i) => {
    const val = cities.filter((city, ind)=> ind === i);
    setCurruntCity(val[0]);
  }

  //get links from costom component
  const links = useMegaMenuLinks();

  return (
    <>
      {/* Cities */}
      <div className="px-3 text-left md:cursor-pointer group">
        <h1 
          className="flex items-center justify-between py-5 pr-5 border-b md:border-b-0 lg:border-b-0 xl:border-b-0 md:pr-0 group"
          onClick={() => {heading !== "City" ? setHeading("City") : setHeading("");
                setSubHeading("");
              }}>
          {curruntCity === "" ? "City" : curruntCity}
          <span className="inline text-xl md:hidden">
                {heading === "City" ? (
                  <FiChevronUp size={25}/>
                ) : (
                  <FiChevronDown size={25}/>
                )}
          </span>
          <span className="hidden text-xl md:mt-1 md:ml-2 md:block group-hover:rotate-180">
            <FiChevronDown />
          </span>
        </h1>
        {cities && (
          <div>
            <div className="absolute hidden top-16 group-hover:md:block hover:md:block">
              <div className="py-3">
                <div className="w-4 h-4 left-10 absolute mt-1 bg-sup-light-purple rotate-45"></div>
              </div>
              <div className={`bg-sup-light-purple mega-menu rounded-xl max-w-7xl min-w-3xl h-[41vh] p-5 flex flex-col justify-evenly `}>
                <h1 className="text-lg text-rich-purple-100 font-semibold">
                  Top Cities
                </h1>
                <div className="overflow-y-scroll">
                  {cities.map((city, i) => (
                    <li onClick={()=>handleVal(i)} key={i} className="text-xs my-2.5">
                      {city.slice(0, 30) + `${city.length > 35 ? "..." : ""}`}
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* City Mobile Menu */}
        <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
          {cities.map((city, i)=>(
            <div className={`${heading === "City" ? "block": "hidden"} my-1`}>
              <li onClick={()=>handleVal(i)} className="py-1 pl-5 text-rich-purple-100">{city}</li>
            </div>
          ))}
        </div>
      </div>

      {/* Other Links */}
      {links.map((link, i) => (
        <div key={i}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="flex items-center justify-between py-5 pr-5 border-b md:border-b-0 lg:border-b-0 xl:border-b-0 md:pr-0 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="inline text-xl md:hidden">
                {heading === link.name ? (
                  <FiChevronUp size={25} />
                ) : (
                  <FiChevronDown size={25} />
                )}
              </span>
              <span className="hidden text-xl md:mt-1 md:ml-2 md:block group-hover:rotate-180">
                <FiChevronDown />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute hidden top-16 group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-10 absolute mt-1 bg-sup-light-purple rotate-45"></div>
                  </div>
                  <div
                    className={`bg-sup-light-purple mega-menu rounded-xl max-w-7xl min-w-3xl h-[41vh] p-5 flex justify-evenly gap-10`}
                  >
                    {link.sublinks.map((mysublinks, i) => (
                      <div key={i}>
                        <h1 className="text-lg text-rich-purple-100 font-semibold">
                          {mysublinks.Head}
                        </h1>
                        <div className="overflow-y-scroll h-[90%] pr-5">
                          {mysublinks.sublink.map((slink, i) => (
                            <li key={i} className="text-xs my-2.5">
                              <Link
                                to={slink.link}
                                className="font-medium hover:text-primary"
                              >
                                {slink.name.slice(0, 27) +
                                  `${slink.name.length > 25 ? "..." : ""}`}
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

          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {/* sublinks */}
            {link.sublinks.map((slinks, i) => (
              <div key={i}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                  >
                    {slinks.Head}

                    <span className="text-2xl md:mt-1 md:ml-2 inline">
                      {subHeading === slinks.Head ? <FiMinus size={20} /> : <FiPlus size={20} />}
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    } px-3 `}
                  >
                    {slinks.sublink.map((slink, i) => (
                      <li key={i} className="py-1 pl-14 text-rich-purple-100">
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
