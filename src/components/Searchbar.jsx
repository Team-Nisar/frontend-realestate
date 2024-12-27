import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [type, setType] = useState('Buy');
  const [propertyCategory, setPropertyCategory] = useState('Plots');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [rooms, setRooms] = useState('');
  const [cities, setCities] = useState([]);

  const categories = ['Plots', 'PG', 'Home', 'Flats', 'Villa', 'Office'];

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
    };
    onSearch(searchParams);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar-card">
        <form onSubmit={handleSubmit} className="search-form">
          {/* Type and Property Categories */}
          <div className="form-row">
            <div className="radio-buttons">
              {['Buy', 'Rent'].map((option) => (
                <label key={option} className="radio-label">
                  <input
                    type="radio"
                    name="type"
                    value={option}
                    checked={type === option}
                    onChange={() => setType(option)}
                    className="radio-input"
                  />
                  {option}
                </label>
              ))}
            </div>

            <div className="category-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setPropertyCategory(category)}
                  className={`btn ${propertyCategory === category ? 'active-btn' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="form-row">
            {/* Location */}
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="input"
              />
              <button type="button" onClick={handleGetLocation} className="btn-nearme">
                Near Me
              </button>
            </div>

            {/* City */}
            <div className="input-group">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="input"
              >
                <option value="">Select City</option>
                {cities.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget */}
            {(propertyCategory === 'Plots' || type === 'Buy') && (
              <>
                <div className="input-group">
                  <select
                    value={minBudget}
                    onChange={(e) => setMinBudget(e.target.value)}
                    className="input"
                  >
                    <option value="">Min Budget</option>
                    {[50000, 100000, 200000].map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-group">
                  <select
                    value={maxBudget}
                    onChange={(e) => setMaxBudget(e.target.value)}
                    className="input"
                  >
                    <option value="">Max Budget</option>
                    {[100000, 300000, 500000].map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}

            {/* Rooms for Home/Flats/Villa */}
            {(propertyCategory === 'Home' || propertyCategory === 'Flats' || propertyCategory === 'Villa') && (
              <div className="input-group">
                <select
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  className="input"
                >
                  <option value="">Select Rooms</option>
                  {[1, 2, 3, 4, 5].map((room) => (
                    <option key={room} value={room}>
                      {room} Room(s)
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="submit-btn">
            <button type="submit" className="btn-submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
