import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { globalVar } from "../globalContext/GlobalContext";
import { jwtDecode } from "jwt-decode";
const LoginPage = () => {
  let navigate = useNavigate();
  let { loginPanel, setLoginPanel, loginTypes, loginType, setLoginType } = useContext(globalVar);
  
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
      console.log(user.password);
         const response = await axios.post(
           `http://localhost:8080/auth/login?email=${user.email}&password=${user.password}`
      //     {
      //       headers: {
      //         "Content-Type": "application/json ,text/plain, /",
      //       },
       //   }
         );
         console.log("User authenticated:", response);

        
      localStorage.setItem(
        "auth",
        JSON.stringify({
          token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrYW51MTIzQGdtYWlsLmNvbSIsImlhdCI6MTcyNzk1MjA5NiwiZXhwIjoxNzI3OTg4MDk2fQ.DhI29sbnh2YIemtu9dn3-ky-xEWhMAec4wE2bPFhsSI",
          user: {
            role: "user",
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
