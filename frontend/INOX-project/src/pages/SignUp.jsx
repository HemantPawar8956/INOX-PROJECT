import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/signup', user);
      console.log('User created:', response.data);
      // Navigate to login page after successful signup
      navigate("/login"); 
    } catch (error) {
      console.error('There was an error creating the user!', error);
    }
  };

  return (
    <section className='signMain'>
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2 className="form-title">SIGNUP PAGE</h2>
      <div className="form-group">
        <label className="form-label">Name :</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Email :</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Phone :</label>
        <input
          type="tel"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Password :</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label">Role :</label>
        <input
          type="text"
          name="role"
          value={user.role}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
    </section>
  );
};

export default SignUp;
