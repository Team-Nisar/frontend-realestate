import React, { useState } from 'react';
import PropertyCard from '../components/HotSellingCard';
import '../styles/hotSellingPage.css';

const properties = [
  // List of properties
  {
    id: 1,
    image: 'property1.jpg',
    name: 'Luxury Villa in Beverly Hills',
    location: 'Beverly Hills, CA',
    price: '5,000,000',
    area: '5000 sq.ft.',
    bedrooms: 5,
    bathrooms: 4,
    features: ['Swimming Pool', 'Private Garden', 'Modern Design'],
    city: 'Los Angeles',
  },
  {
    id: 2,
    image: 'property2.jpg',
    name: 'Beachfront Apartment',
    location: 'Miami Beach, FL',
    price: '2,000,000',
    area: '2500 sq.ft.',
    bedrooms: 3,
    bathrooms: 2,
    features: ['Ocean View', 'Balcony', '24/7 Security'],
    city: 'Miami',
  },
  {
    id: 3,
    image: 'property3.jpg',
    name: 'Penthouse in Manhattan',
    location: 'Manhattan, NY',
    price: '8,000,000',
    area: '4000 sq.ft.',
    bedrooms: 4,
    bathrooms: 3,
    features: ['Skyline View', 'Private Elevator', 'Luxury Finishes'],
    city: 'New York',
  },
  // Add more properties...
];

const cities = ['All Cities', 'Los Angeles', 'Miami', 'New York', 'San Francisco', 'Chicago', 'Houston', 'Seattle'];

const HotSellingPage = () => {
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProperties =
    selectedCity === 'All Cities'
      ? properties
      : properties.filter((property) => property.city === selectedCity);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 3, filteredProperties.length - 3)
    );
  };

  return (
    <div className="container">
      <h1>Hot Selling Properties</h1>

      <div className="city-buttons">
        {cities.map((city, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedCity(city);
              setCurrentIndex(0); // Reset to the first property
            }}
            className={selectedCity === city ? 'active' : 'inactive'}
          >
            {city}
          </button>
        ))}
      </div>

      <div className="arrow-buttons">
        <button onClick={handlePrev} className="arrow-button">
          {'<'}
        </button>
        <button onClick={handleNext} className="arrow-button">
          {'>'}
        </button>
      </div>

      <div className="property-list">
        {filteredProperties.slice(currentIndex, currentIndex + 3).map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
      <br/><br/><br/>
    </div>
  );
};

export default HotSellingPage;
