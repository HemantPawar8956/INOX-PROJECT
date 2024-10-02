import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    imagename: "",
    role: "",
  });
  const [showAdminDetails, setShowAdminDetails] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleAdminClick = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/auth/signup`);
      console.log("Admin details:", response.data);
      setShowAdminDetails(true);
      setShowUserDetails(false);
    } catch (error) {
      console.error("Error fetching admin details", error);
    }
  };

  const handleUserClick = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/auth/signup`);
      console.log("User details:", response.data);
      setShowUserDetails(true);
      setShowAdminDetails(false);
    } catch (error) {
      console.error("Error fetching user details", error);
    }
  };

  return (
    <section className="singupmain">
        <div className="imgbox"></div>
      <form className="signupform">
        <h2 className="signuptitle">SIGN UP PAGE</h2>

       

        <div className="formdetails">
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

        <div className="formdetails">
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

        <div className="formdetails">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div className="formdetails">
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

       {/*  <div className="formdetails">
          <label>Image :</label>
          <input
            type="file"
            name="imagename"
            value={user.imagename}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div> */}

        <div className="formdetails">
          <label>Role:</label>
          <input
            type="text"
            name="role"
            value={user.role}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div className="singupbuttons">
          <button type="button" onClick={handleAdminClick} className="button"> Admin </button>
          <button type="button" onClick={handleUserClick} className="button"> User </button>
        </div>

        {showAdminDetails && <p>Admin details are shown here.</p>}
        {showUserDetails && <p>One user detail is shown here.</p>}
      </form>
    </section>
  );
};

export default SignUp;
