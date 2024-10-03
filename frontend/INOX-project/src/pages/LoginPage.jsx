import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { globalVar } from "../globalContext/GlobalContext";

const LoginPage = () => {
  let navigate = useNavigate();
  let { loginPanel, setLoginPanel, loginTypes, loginType, setLoginType } = useContext(globalVar);
  
  // Default user state with email and password
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
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
        `http://localhost:8080/auth/login?email=${user.email}&password=${user.password}`,
        user,
        {
          headers: {
            "Content-Type": "application/json ,text/plain, /",
          },
        }
      );
      console.log("User authenticated:", response);
      localStorage.setItem(
        "auth",
        JSON.stringify({
          token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2huZG9lQGV4YW1wbGUuY29tIiwiaWF0IjoxNzI3OTM2MjU3LCJleHAiOjE3Mjc5NzIyNTd9.JF5yDl8_DPaKBKuBt2P6sscjrpop9KcZ1DwnnUFHH7Q",
          user: {
            role: loginType.toLowerCase(),
          },
        })
      );
      // setLoginPanel(false)
      // Navigate based on role (Admin/User)
  
    } catch (error) {
      console.error("There was an error authenticating the user!", error);
    }
  };
  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <section
      className="mainCont"
      onClick={(e) => {
        e.stopPropagation();
        setLoginPanel(!loginPanel);
      }}>
      <section className="headlogin">
       

        <form
          className="login-form"
          onSubmit={handleSubmit}
          onClick={(e) => {
            e.stopPropagation();
            setLoginPanel(true);
          }}>
             <div className="mainadminbtn">
        {loginTypes.map((ele) => (
         <button key={ele.loginVal} onClick={() => setLoginType(ele.loginVal)} 
            className={`adminbtns ${loginType === ele.loginVal ? "active" : ""}`}>  
            {ele.loginName}
          </button> 
        ))}
        </div>
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
          <button className="signupbtn" onClick={handleSignUpClick}>SignUp</button>
        </form>
      </section>
    </section>
  );
};

export default LoginPage;
