import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { globalVar } from '../globalContext/GlobalContext';

const LoginPage = () => {
  let navigate = useNavigate();
  let [user, setUser] = useState({
    email: '',
    password: '',
  });

  let handleChange = (e) => {
    let {name, value} =e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(user.password)
      const response = await axios.post(`http://localhost:8080/auth/login?email=${user.email}&password=${user.password}`,user, {
        headers: {
          'Content-Type': 'application/json ,text/plain, /',
        },
      });
      console.log('User authenticated:', response);
      
      /*console.log(role==='ADMIN')
       if (role === 'ADMIN') {
          navigate('/admin'); 
      } else if (role === 'USER') {
          navigate('/user');
      } else {
          console.error('Unknown role:', response.data.role);
          
      }*/
  
  } catch (error) {
      console.error('There was an error authenticating the user!', error);
  }
  };
console.log(user)
  return  (
    <section className='mainCont'>
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-title">Login Page</h2>

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
      <button  className="login-button">Login</button>
    </form>
    </section>
  );
};

export default LoginPage;