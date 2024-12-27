import React from 'react';
import SearchBar from './Searchbar' // Assuming SearchBar is in the same directory
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Find Your Dream Property</h1>
        <p className="hero-description">Explore the best properties available around you.</p>
      </div>
      <div className="searchbar-container">
        <SearchBar onSearch={(params) => console.log(params)} />
      </div>
    </section>
  );
};

export default HeroSection;
