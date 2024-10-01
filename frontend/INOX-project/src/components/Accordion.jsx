import React, { useState } from "react";

const Accordion1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="show-timings-container">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>INOX AIPL JOY Street Mall Gurugram</h2>
        <span>{isOpen ? "-" : "+"}</span>
      </div>

      {isOpen && (
        <div className="accordion-content">
          <p>
            INOX AIPL JOY Street Mall Gurugram
            
          PVR INOX Limited , 3rd Floor , AIPL JOYSTREET MALL
          </p>
          <h3>STREE-2( SARKATE - KA - ATANK ) (U/A)</h3>
          <p>2h 50m • Hindi, Telugu • Action</p>

          <div className="timings-row">
            <div className="time-box">11:10 AM</div>
            <div className="time-box">12:45 PM</div>
            <div className="time-box">02:45 PM</div>
            <div className="time-box">04:20 PM</div>
            <div className="time-box">06:20 PM</div>
            <div className="time-box">07:55 PM</div>
            <div className="time-box">09:55 PM</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion1;
