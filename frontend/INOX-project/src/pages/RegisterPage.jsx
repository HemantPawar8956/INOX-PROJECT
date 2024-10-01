import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    image: null,
    role: 'USER' // default role
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setUser({
      ...user,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('email', user.email);
    formData.append('phone', user.phone);
    formData.append('password', user.password);
    formData.append('image', user.image);
    formData.append('role', user.role);

    try {
      const response = await axios.post('http://localhost:8080/auth/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <section className='mainCont'>
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Register Page</h2>

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Profile Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Role:</label>
          <select name="role" value={user.role} onChange={handleChange} className="input-field">
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>

        <button className="register-button">Register</button>
      </form>
    </section>
  );
};

export default RegisterPage;
