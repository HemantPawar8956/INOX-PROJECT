import React, { useContext } from "react";
import { globalVar } from "../globalContext/GlobalContext";
import { ImCross } from "react-icons/im";
import banglore from "../assests/banglore.jpg"
import delhi from "../assests/delhincr.jpg"
import mumbai from "../assests/mumbai.jpg"
import hyderabad from "../assests/hyderabad.jpg"

const Sider = () => {
    let staticCity = [
        { name: 'Ahmedabad', image: {hyderabad} },
        { name: 'Delhi-NCR', image: {delhi} },
        { name: 'Mumbai-All', image: {mumbai} },
        { name: 'Bengaluru', image: {banglore} }
    ]
    let cities = [
        "Ahmedabad", "Ajmer", "Amritsar", "Anand", "Armoor", "Aurangabad",
        "Bareilly", "Belagavi", "Belgaum", "Bengaluru", "Bharuch", "Bhilai",
        "Bhilwara", "Bhiwadi", "Bhopal", "Bhubaneswar", "Bilaspur", "Bokaro",
        "Burdwan", "Chandigarh", "Chennai", "Coimbatore", "Cuddalore", "Cuttack"
        // Add more cities as needed
      ];
      let{siderVisible,setSiderVisible}=useContext(globalVar);
    let handleClose=(e)=>{
        e.stopPropagation();
        setSiderVisible(false);
       }
  return (
    <section className="sideBar">
    <div className="city-sidebar">
    <div><button className="btn" onClick={handleClose}><ImCross /></button></div>
        <div className="selectcity"><h3>Select City</h3>
        <br/>
        <input type="text" name="" id="" placeholder="Select City" />
        </div>
        <div className="static">
        <div className="city-grid">
      {staticCity.map((city, index) => (
        <div
          key={index}
          className="city-tile"
        >
            <img src={city.image} alt="" />
          {city.name}
        </div>
      ))}
    </div>
        </div>
        <div className="cityLines"><p></p><h4>Other Cities </h4><p></p></div>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
    </section>
  );
};
export default Sider;

