import React, { useState } from 'react';
import PropertyCard from '../components/HotSellingCard';
import '../styles/hotSellingPage.css';

const properties = [
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
  {
    id: 4,
    image: 'property4.jpg',
    name: 'Modern House in San Francisco',
    location: 'San Francisco, CA',
    price: '3,500,000',
    area: '3000 sq.ft.',
    bedrooms: 4,
    bathrooms: 4,
    features: ['Rooftop Terrace', 'Eco-friendly', 'Open Plan'],
    city: 'San Francisco',
  },
  {
    id: 5,
    image: 'property5.jpg',
    name: 'Historic Mansion in London',
    location: 'London, UK',
    price: '10,000,000',
    area: '6000 sq.ft.',
    bedrooms: 6,
    bathrooms: 5,
    features: ['Private Garden', 'Gated Entrance', 'Library'],
    city: 'London',
  },
  {
    id: 6,
    image: 'property6.jpg',
    name: 'Stylish Loft in Paris',
    location: 'Paris, France',
    price: '2,500,000',
    area: '2000 sq.ft.',
    bedrooms: 2,
    bathrooms: 2,
    features: ['Eiffel Tower View', 'High Ceilings', 'Balcony'],
    city: 'Paris',
  },
  {
    id: 7,
    image: 'property7.jpg',
    name: 'Country Estate in Tuscany',
    location: 'Tuscany, Italy',
    price: '7,500,000',
    area: '8000 sq.ft.',
    bedrooms: 7,
    bathrooms: 6,
    features: ['Vineyard', 'Olive Grove', 'Historic Charm'],
    city: 'Florence',
  },
  {
    id: 8,
    image: 'property8.jpg',
    name: 'Contemporary Apartment in Berlin',
    location: 'Berlin, Germany',
    price: '1,800,000',
    area: '1500 sq.ft.',
    bedrooms: 2,
    bathrooms: 1,
    features: ['City Views', 'Private Balcony', 'Modern Design'],
    city: 'Berlin',
  },
  {
    id: 9,
    image: 'property9.jpg',
    name: 'Secluded Cabin in Aspen',
    location: 'Aspen, CO',
    price: '4,200,000',
    area: '3500 sq.ft.',
    bedrooms: 4,
    bathrooms: 3,
    features: ['Mountain Views', 'Hot Tub', 'Ski-In/Ski-Out'],
    city: 'Aspen',
  },
  {
    id: 10,
    image: 'property10.jpg',
    name: 'Oceanfront Villa in Malibu',
    location: 'Malibu, CA',
    price: '12,000,000',
    area: '7000 sq.ft.',
    bedrooms: 5,
    bathrooms: 5,
    features: ['Infinity Pool', 'Beach Access', 'Gourmet Kitchen'],
    city: 'Malibu',
  },
  {
    id: 11,
    image: 'property11.jpg',
    name: 'Downtown Condo in Chicago',
    location: 'Chicago, IL',
    price: '1,000,000',
    area: '1500 sq.ft.',
    bedrooms: 2,
    bathrooms: 2,
    features: ['City View', 'Modern Kitchen', 'Fitness Center'],
    city: 'Chicago',
  },
  {
    id: 12,
    image: 'property12.jpg',
    name: 'Mountain Lodge in Colorado',
    location: 'Vail, CO',
    price: '6,000,000',
    area: '5000 sq.ft.',
    bedrooms: 5,
    bathrooms: 4,
    features: ['Ski Resort', 'Sauna', 'Outdoor Deck'],
    city: 'Vail',
  },
  {
    id: 13,
    image: 'property13.jpg',
    name: 'Luxury Apartment in Tokyo',
    location: 'Tokyo, Japan',
    price: '4,500,000',
    area: '3000 sq.ft.',
    bedrooms: 4,
    bathrooms: 3,
    features: ['Panoramic Views', 'Smart Home Features', 'Rooftop Garden'],
    city: 'Tokyo',
  },
  {
    id: 14,
    image: 'property14.jpg',
    name: 'Beachfront Villa in Bali',
    location: 'Bali, Indonesia',
    price: '3,200,000',
    area: '4000 sq.ft.',
    bedrooms: 4,
    bathrooms: 4,
    features: ['Private Pool', 'Beach Access', 'Tropical Garden'],
    city: 'Denpasar',
  },
  {
    id: 15,
    image: 'property15.jpg',
    name: 'Charming Cottage in the Hamptons',
    location: 'Hamptons, NY',
    price: '2,800,000',
    area: '2200 sq.ft.',
    bedrooms: 3,
    bathrooms: 2,
    features: ['Private Garden', 'Wooded Area', 'Charming Interior'],
    city: 'East Hampton',
  },
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
      Math.min(prevIndex + 1, filteredProperties.length - 1)
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
              setCurrentIndex(0); // Reset to the first property when city changes
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
        {filteredProperties.slice(currentIndex, currentIndex + 5).map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default HotSellingPage;
