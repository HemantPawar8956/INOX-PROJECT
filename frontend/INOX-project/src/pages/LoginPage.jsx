import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { globalVar } from "../globalContext/GlobalContext";
import { jwtDecode } from "jwt-decode";
const LoginPage = () => {
  let navigate = useNavigate();
  let { loginPanel, setLoginPanel, loginTypes, loginType, setLoginType,inoxLoginType, setInoxLoginType } =
    useContext(globalVar);
  console.log(loginTypes);
  // Default user state with email and password
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

  // Handle form submission
  let handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
    
      const response = await axios.post(
        `http://localhost:8080/auth/login?email=${user.email}&password=${user.password}`
      );
      console.log("User authenticated:", response.data);
      let token = response.data.token;
      localStorage.setItem("auth",token)
      // let token = response.data.token;
      console.log('Token:', token); 
     //to get user
     // Making an API call to fetch user data using the token

      let decode= jwtDecode(token);
      
       console.log(decode);
    // console.log('User Data:', userObj.data);

      // console.log(role==='ADMIN')
      let roles=decode.role;
       if (roles === 'ADMIN') {
          navigate('/'); 
      } else if (roles === 'USER') {
          navigate('/');
      } else {
          console.error('Unknown role:', response.data.role);          
      } 

    } catch (error) {
      console.error("There was an error authenticating the user!", error);
    }
  };
  const handleSignUpClick = (e) => {
    navigate("/signup");
    // e.stopPropagation();
  };

  return (
    <section
      className="mainCont"
      onClick={(e) => {
        e.stopPropagation();
        setLoginPanel(!loginPanel);
      }}>
      <section className="headlogin">
        <div className="mainadminbtn">
          {loginTypes?.map((ele) => (
            <button
              key={ele.loginVal}
              onClick={(e) => (e.stopPropagation(), setLoginType(ele.loginVal))}
              className="adminbtns">
              {ele.loginName}
            </button>
          ))}
        </div>
        <form
          className="login-form"
          onSubmit={handleSubmit}
          onClick={(e) => {
            e.stopPropagation();
            setLoginPanel(true);
          }}>
          <h1 className="login-title">Login as {loginType}</h1>
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
          <button className="signupbtn" onClick={handleSignUpClick}>
            Click to Signup
          </button>
        </form>
      </section>
    </section>
  );
};

export default LoginPage;