import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [type, setType] = useState('Buy');
  const [propertyCategory, setPropertyCategory] = useState('Residential');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [rooms, setRooms] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCommercialTypes, setSelectedCommercialTypes] = useState([]);
  const [selectedResidentialTypes, setSelectedResidentialTypes] = useState([]);

  const commercialTypes = [
    'Office Space', 'Shop', 'Land', 'Industrial Plot', 'Showroom',
    'Office Space in IT/SEZ', 'Warehouse', 'Co-working Space'
  ];

  const residentialTypes = [
    'Apartment', 'Plot', 'Builder Floor', 'Independent House', 'Villa', 'Penthouse'
  ];

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const citiesRes = await axios.get('/api/cities');
        setCities(citiesRes.data);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };
    fetchCities();
  }, []);

  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        axios
          .get(`/api/reverse-geocode?lat=${latitude}&lon=${longitude}`)
          .then((res) => setLocation(res.data.location))
          .catch((err) => console.error('Error fetching location:', err));
      },
      (error) => console.error('Geolocation error:', error)
    );
  };

  const handlePropertyTypeChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'commercial') {
      setSelectedCommercialTypes((prevState) =>
        checked
          ? [...prevState, value]
          : prevState.filter((item) => item !== value)
      );
    } else {
      setSelectedResidentialTypes((prevState) =>
        checked
          ? [...prevState, value]
          : prevState.filter((item) => item !== value)
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchParams = {
      type,
      propertyCategory,
      location,
      city,
      minBudget,
      maxBudget,
      rooms,
      selectedCommercialTypes,
      selectedResidentialTypes,
    };
    onSearch(searchParams);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar-card">
        <form onSubmit={handleSubmit} className="search-form">
          {/* First Row: Property Type & Category */}
          <div className="search-row">
            <div className="input-group">
              <select value={type} onChange={(e) => setType(e.target.value)} className="input">
                <option value="Buy">Buy</option>
                <option value="Rent">Rent</option>
              </select>
            </div>
            <div className="input-group">
              <select value={propertyCategory} onChange={(e) => setPropertyCategory(e.target.value)} className="input">
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>
            {/* Commercial/Residential Property Types */}
            {propertyCategory === 'Commercial' && (
              <div className="checkbox-group">
                {commercialTypes.map((type) => (
                  <label key={type} className="checkbox-label">
                    <input
                      type="checkbox"
                      name="commercial"
                      value={type}
                      checked={selectedCommercialTypes.includes(type)}
                      onChange={handlePropertyTypeChange}
                      className="checkbox-input"
                    />
                    {type}
                  </label>
                ))}
              </div>
            )}

            {propertyCategory === 'Residential' && (
              <div className="checkbox-group">
                {residentialTypes.map((type) => (
                  <label key={type} className="checkbox-label">
                    <input
                      type="checkbox"
                      name="residential"
                      value={type}
                      checked={selectedResidentialTypes.includes(type)}
                      onChange={handlePropertyTypeChange}
                      className="checkbox-input"
                    />
                    {type}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Second Row: Location, City, Budget */}
          <div className="search-row">
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="input"
              />
            </div>
            <div className="input-group">
              <button type="button" onClick={handleGetLocation} className="btn-nearme">
                Near Me
              </button>
            </div>
            <div className="input-group">
              <select value={city} onChange={(e) => setCity(e.target.value)} className="input">
                <option value="">Select City</option>
                {cities.map((c) => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            {/* Budget */}
            {(propertyCategory === 'Plots' || type === 'Buy') && (
              <div className="input-group">
                <select value={minBudget} onChange={(e) => setMinBudget(e.target.value)} className="input">
                  <option value="">Min Budget</option>
                  {[50000, 100000, 200000].map((budget) => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
                <select value={maxBudget} onChange={(e) => setMaxBudget(e.target.value)} className="input">
                  <option value="">Max Budget</option>
                  {[100000, 300000, 500000].map((budget) => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="submit-btn">
            <button type="submit" className="btn-submit">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
