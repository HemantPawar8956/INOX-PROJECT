import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateTheatre = () => {
  // Create state for theatre details including the id
  const [theatre, setTheatre] = useState({
    id: '',
    name: '',
    address: ''
  });

  // Handle input change for all fields (id, name, address)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTheatre({
      ...theatre,
      [name]: value,
    });
  };

  // Handle form submission to update the theatre details
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/theater/update`, {
        id: theatre.id,
        name: theatre.name,
        address: theatre.address,
      }, {
        headers: {
            ContentType: "application/json",
          Authorization: `Bearer ${localStorage.getItem('auth')}`
        }
      });
      console.log('Theatre updated successfully:', response.data);
      // Optionally reset form fields after successful submission
      setTheatre({ id: '', name: '', address: '' });
    } catch (error) {
      console.error('Error updating theatre:', error);
    }
  };

  // Handle form reset
  const handleReset = () => {
    setTheatre({ id: '', name: '', address: '' });
  };

  return (
    <div className="theatre-main-container">
      <section className="theatre-form-section">
        <div className="theatre-form-container">
          <h2>Update Theatre Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="theatre-form-group">
              <label htmlFor="theatreId">Theatre ID:</label>
              <input
                type="text"
                id="id"
                name="id"
                value={theatre.id}
                onChange={handleChange}
                placeholder="Enter theatre ID"
                required
              />
            </div>

            <div className="theatre-form-group">
              <label htmlFor="theatreName">Theatre Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={theatre.name}
                onChange={handleChange}
                placeholder="Enter theatre name"
                required
              />
            </div>

            <div className="theatre-form-group">
              <label htmlFor="theatreAddress">Theatre Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={theatre.address}
                onChange={handleChange}
                placeholder="Enter theatre address"
                required
              />
            </div>

            <div className="theatre-form-actions">
              <button type="submit" className="theatre-update-btn">
                Update
              </button>
              <button type="button" className="theatre-delete-btn" onClick={handleReset}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UpdateTheatre;
