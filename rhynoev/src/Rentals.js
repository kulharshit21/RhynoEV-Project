import React, { useState } from 'react';
import './Rentals.css';

const Rentals = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    phoneNumber: '',
    email: '',
    product: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API or server)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="rentals">
      <h1>Rental Inquiry Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Choose Product:
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a product</option>
            <option value="se03-lite">Rhyno SE03 Lite</option>
            <option value="se03">Rhyno SE03</option>
            <option value="se03-max">Rhyno SE03 Max</option>
            {/* Add other products as needed */}
          </select>
        </label>
        <label>
          How much time do you need?
          <textarea
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            rows="4"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Rentals;
