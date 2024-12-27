import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HotSellingCard.css';

const HotSellingCard = ({ id, image, name, location, price, area, bedrooms, bathrooms, features }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/property/${id}`);
  };

  return (
    <div className="property-card">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="details">
        <h2>{name}</h2>
        <p className="location">{location}</p>
        <p className="price">${price}</p>
        <p className="area">{area}</p>
        <p className="rooms">
          {bedrooms} Bedrooms | {bathrooms} Bathrooms
        </p>
        <ul className="features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button onClick={handleViewDetails} className="view-details-button">
          View Details
        </button>
      </div>
    </div>
  );
};

export default HotSellingCard;
