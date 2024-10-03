import React, { useContext, useState } from "react";
import { globalVar } from "../globalContext/GlobalContext";
import { ImCross } from "react-icons/im";
import banglore from "../assests/banglore.jpg";
import delhi from "../assests/delhi.png";
import mumbai from "../assests/mumbai.jpg";
import hyderabad from "../assests/hyderabad.jpg";

const Sider = () => {
  let [searchedCity, setSEarchedCity] = useState("");
  let staticCity = [
    { name: "Ahmedabad", image: hyderabad },
    { name: "Delhi-NCR", image: delhi },
    { name: "Mumbai-All", image: mumbai },
    { name: "Bengaluru", image: banglore },
  ];
  let cities = [
    "Ahmedabad",
    "Ajmer",
    "Amritsar",
    "Anand",
    "Armoor",
    "Aurangabad",
    "Bareilly",
    "Belagavi",
    "Belgaum",
    "Bengaluru",
    "Bharuch",
    "Bhilai",
    "Bhilwara",
    "Bhiwadi",
    "Bhopal",
    "Bhubaneswar",
    "Bilaspur",
    "Bokaro",
    "Burdwan",
    "Chandigarh",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Cuttack",
  ];
  let { siderVisible, setSiderVisible, userLocation, setUserLocation } =
    useContext(globalVar);
  let handleClose = (e) => {
    e.stopPropagation();
    setSiderVisible(false);
  };
  return (
    <section className="sideBar" onClick={handleClose}>
      <div
        className="city-sidebar"
        onClick={(e) => {
          e.stopPropagation();
          setSiderVisible(true);
        }}>
        <div>
          <button className="btn" onClick={handleClose}>
            <ImCross />
          </button>
        </div>
        <div className="selectcity">
          <h3>Select City</h3>
          <br />
          <input
            type="text"
            name=""
            id=""
            placeholder="Select City"
            onChange={(e) => {
              setSEarchedCity(e.target.value);
            }}
            value={searchedCity}
          />
          {searchedCity && (
            <div className="SearchedCityPanel">
              {cities
                .filter((city) => city.includes(searchedCity))
                .map((e) => (
                  <div
                    className="SearchedCityPanelItems"
                    onClick={() => {
                      setSEarchedCity(e);
                    }}>
                    {e}
                  </div>
                ))}
            </div>
          )}
        </div>
        <div className="static">
          <div className="city-grid">
            {staticCity.map((city, index) => (
              <div
                key={index}
                className="city-tile"
                onClick={() => {
                  setUserLocation(city.name);
                }}
                >
                <img src={city.image} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="cityLines">
          <p></p>
          <h4>Other Cities </h4>
          <p></p>
        </div>
        <ul>
          {cities.map((city, index) => (
            <li
              key={index}
              onClick={() => {
                setUserLocation(city);
              }}>
              {city}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Sider;
