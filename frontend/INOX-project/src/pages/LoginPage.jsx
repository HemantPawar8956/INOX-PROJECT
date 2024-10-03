import React, { useContext, useState } from "react";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";
import { globalVar } from "../globalContext/GlobalContext";

const LoginPage = () => {
  let navigate = useNavigate();
  let { loginPanel, setLoginPanel } = useContext(globalVar);
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
 


  let handleChange = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      console.log(user.password);
      //   const response = await axios.post(
      //     `http://localhost:8080/auth/login?email=${user.email}&password=${user.password}`,
      //     user,
      //     {
      //       headers: {
      //         "Content-Type": "application/json ,text/plain, /",
      //       },
      //     }
      //   );
      //   console.log("User authenticated:", response);
      localStorage.setItem(
        "auth",
        JSON.stringify({
          token: "xyzhgehcknhfkhf",
          user: {
            role: "admin",
          },
        })
      );

      /*console.log(role==='ADMIN')
       if (role === 'ADMIN') {
          navigate('/admin'); 
      } else if (role === 'USER') {
          navigate('/user');
      } else {
          console.error('Unknown role:', response.data.role);
          
      }*/
    } catch (error) {
      console.error("There was an error authenticating the user!", error);
    }
  };
  console.log(user);
  return (
    <section
      className="mainCont"
      onClick={(e) => {
        e.stopPropagation(), setLoginPanel(!loginPanel);
      }}>
      <form
        className="login-form"
        onSubmit={handleSubmit}
        onClick={(e) => {
          e.stopPropagation(), setLoginPanel(true);
        }}>
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
        <button className="login-button">Login</button>
      </form>
    </section>
  );
};


export default LoginPage;
