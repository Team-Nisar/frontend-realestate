import React, { useContext } from "react";
import SearchBar from "./Searchbar"; // Assuming SearchBar is in the same directory
import { FilterContext } from "../context/FilterContext";

const HeroSection = () => {
  const { curruntCity } = useContext(FilterContext);

  const getBackgroundImage = (city) => {
    try {
      return `../../public/assets/${city}.jpg`; // Adjust path if needed
    } catch (error) {
      return null; // Fallback if image doesn't exist
    }
  };

  const backgroundImage = curruntCity ? getBackgroundImage(curruntCity) : "../../public/assets/Banner1.jpg";

  return (
    <section
      style={{
        backgroundColor:"black",
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition:"background-image 0.5s ease-in-out"
      }}
      className={` h-[100vh] text-white flex px-5 flex-col justify-center items-center relative z-1 max-w-[1740px] mx-auto`}>
      <div className="flex flex-col gap-1 justify-center items-center">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold text-center">
          Journey To Your Perfect Home
        </h1>
        <p className="w-[90%] sm:w-[80%] mx-auto text-center text-xs sm:text-sm md:text-md lg:text-md xl:text-lg 2xl:text-lg ">
          Lets our expert team guide you through the magic of real estate and
          helping you to find the perfect home where your dreams takes flight.
        </p>
      </div>
      <div className="pt-10">
        <SearchBar onSearch={(params) => console.log(params)} />
      </div>
    </section>
  );
};

export default HeroSection;
