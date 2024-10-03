import React, { useState, useContext } from "react";
import { ImCross } from "react-icons/im";
import { globalVar } from "../globalContext/GlobalContext";
import banglore from "../assests/banglore.jpg";
import delhi from "../assests/delhi.png"
import mumbai from "../assests/mumbai.jpg";
import hyderabad from "../assests/hyderabad.jpg";

const SelectLocation = () => {
  let selectCity = [
    { name: "Ahmedabad", image:  hyderabad  },
    { name: "Delhi-NCR", image: delhi },
    { name: "Mumbai-All", image:  mumbai  },
    { name: "Bengaluru", image:  banglore  },
    { name: "Mumbai-All", image:  mumbai  },
    { name: "Bengaluru", image: banglore  },
  ];

  let selectcities = [
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
  
  let { location, setLocation , userLocation , setUserLocation } = useContext(globalVar);

  const handleClose = (e) => {
    e.stopPropagation();
    setLocation(false);
  };

  return (
    <section className="selectLocation" onClick={handleClose}>
      <section
        className={`horizontalBar ${location ? "visible" : "hidden"}`}
        onClick={(ele)=>{ele.stopPropagation(),setLocation(true)}}>
         <div>
         <button className="btn" onClick={handleClose}>
              <ImCross />
            </button>
          <div className="input-container">
          <h3>Select City</h3>
            <input type="text" placeholder="Select City" />
          </div>
          <div className="static-horizontal">
            <div className="city-grid">
              {selectCity.map((city, index) => (
                <div key={index} className="city-tile" onClick={()=>{setUserLocation(city.name)}}>
                  <img src={city.image} alt={city.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="city-list">
       
          <h4>Other Cities</h4>
          <ul>
            {selectcities.map((city, index) => (
              <li key={index} onClick={()=>{setUserLocation(city)}}>{city}</li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default SelectLocation;
