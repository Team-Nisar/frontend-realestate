import React from 'react';
import SearchBar from './Searchbar' // Assuming SearchBar is in the same directory
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="bg-banner bg-cover h-[92vh] text-white flex px-5 flex-col justify-center items-center relative z-1">
      <div className="flex flex-col gap-1 justify-center mb-10 items-center">
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-7xl font-bold text-center">Find Your Dream Property</h1>
        <p className=" text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-semibold">Explore the best properties available around you.</p>
      </div>
      <div className=" mt-10">
        <SearchBar onSearch={(params) => console.log(params)} />
      </div>
    </section>
  );
};

export default HeroSection;
