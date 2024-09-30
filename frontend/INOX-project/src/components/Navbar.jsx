import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assests/inox_web-logo.png";
import {
  FaHome,
  FaFilm,
  FaTags,
  FaUser,
  FaSearch,
  FaChevronDown,
  FaStar,
  FaBars,
  FaUserCircle,
  FaGifts,
  FaGift,
} from "react-icons/fa";
import { AiFillFund } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { MdLocationSearching } from "react-icons/md";
import Sider from "./Sider";
import { IoBag } from "react-icons/io5";
import { RiAdvertisementFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { globalVar } from "../globalContext/GlobalContext";

const Navbar = () => {
  let [dropdownVisible, setDropdownVisible] = useState(false);
  let { siderVisible, setSiderVisible } = useContext(globalVar);

  let Dropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  let siderVisiblefunc = () => {
    setSiderVisible(!siderVisible);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}>
              <FaHome className="icon" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/showtimings"
              className={({ isActive }) => (isActive ? "active" : "")}>
              <FaStar className="icon" /> Showtimings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cinemas"
              className={({ isActive }) => (isActive ? "active" : "")}>
              <FaFilm className="icon" /> Cinemas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}>
              <FaTags className="icon" /> Offers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}>
              <AiFillFund className="icon" /> Investor Section
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/passport"
              className={({ isActive }) => (isActive ? "active" : "")}>
              <FaUser className="icon" /> Passport
            </NavLink>
          </li>
          <li>
            <div className="dropdown">
              <button
                className="dropdownbtn"
                onMouseOver={Dropdown}
                onMouseLeave={Dropdown}>
                <FaBars /> More <FaChevronDown />
              </button>
              {dropdownVisible && (
                <div
                  onMouseOver={() => {
                    setDropdownVisible(true);
                  }}
                  onMouseLeave={Dropdown}>
                  <div className="dropDown">
                    <p className="content">
                      <FaGift />
                      Gift Card
                    </p>
                    <p className="content">
                      <BsFillPeopleFill />
                      ORD Portal
                    </p>
                    <p className="content">
                      <FaGifts />
                      Bulk Gift Card
                    </p>
                    <p className="content">
                      <RiAdvertisementFill />
                      Advertise
                    </p>
                    <p className="content">
                      <IoBag />
                      Merchandise
                    </p>
                  </div>
                  <p></p>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
      <div className="right">
        <div className="search">
          <CiSearch />{" "}
        </div>
        <div className="location">
          <button className="locationbtn" onClick={siderVisiblefunc}>
            <MdLocationSearching className="location-logo" /> Location{" "}
            <FaChevronDown />
          </button>
        </div>
        <button className="login">
          {" "}
          <FaUserCircle />
          Login
        </button>
      </div>
    </header>
  );
};

export default Navbar;
