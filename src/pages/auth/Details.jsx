import React from 'react';
import '../../styles/Details.css';

const Details = ({ formData, setFormData, submitDetails }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="details-container">
      <h2>Enter Your Details</h2>
      <form>
        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            value={`${formData.country} ${formData.number}`}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={submitDetails}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Details;
