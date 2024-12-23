import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [type, setType] = useState('Buy');
  const [propertyCategory, setPropertyCategory] = useState('Plots');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
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
    };
    onSearch(searchParams);
  };

  return (
    <div className="w-full h-full flex justify-center items-center relative z-20">
      <div className="bg-[#3e5879] shadow-lg rounded-lg p-6 max-w-5xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Row: Type and Property Categories */}
          <div className="flex flex-wrap items-center justify-center space-x-4">
            {/* Type Selector */}
            {['Buy', 'Rent'].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setType(option)}
                className={`px-6 py-2 rounded-lg text-sm font-medium ${
                  type === option ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
                } hover:bg-red-400 hover:text-white`}
              >
                {option}
              </button>
            ))}

            {/* Property Categories */}
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setPropertyCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  propertyCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                } hover:bg-blue-400 hover:text-white`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Second Row: Search Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Location */}
            <div className="flex items-center space-x-2">
              <input
                id="location"
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-grow border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={handleGetLocation}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Near Me
              </button>
            </div>

            {/* City */}
            <select
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select City</option>
              {cities.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>

            {/* Budget */}
            <div className="flex space-x-2">
              <select
                id="minBudget"
                value={minBudget}
                onChange={(e) => setMinBudget(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Min Budget</option>
                {[50000, 100000, 200000].map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
              <select
                id="maxBudget"
                value={maxBudget}
                onChange={(e) => setMaxBudget(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Max Budget</option>
                {[100000, 300000, 500000].map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-red-600"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
