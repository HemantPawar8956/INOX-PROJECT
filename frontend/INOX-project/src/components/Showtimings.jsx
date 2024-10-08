import React from "react";
import Accordion from "./Accordion1";
import Accordion1 from "./Accordion1";
import Accordion2 from "./Accordion1";
import Accordion3 from "./Accordion1";
import { CiCreditCard1 } from "react-icons/ci";
import { RiWheelchairFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";




const ShowTimings = () => {
  const dates = [
    { day: "Sep 30", label: "Today" },
    { day: "Oct 01", label: "Tomorrow" },
    { day: "Oct 02", label: "Wed" },
    { day: "Oct 03", label: "Thu" }, 
    { day: "Oct 04", label: "Fri" }, 
    { day: "Oct 05", label: "Sat" },
    { day: "Oct 06", label: "Sun" },
  ];

  return (
    <section className="show-sec">
      <div className="show">
        <h2 className="showh2">Showtimings</h2>
      </div>
      <div className="show-timings-container1">
        <div className="show-timings-header"></div> 

        <div className="show-timings-dates">
          {dates.map((date, index) => (
            <div key={index} className="date-item">
              <span>{date.day}</span>
              <span>{date.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="status-options"> 
      <div className="show-timings-search-status">
        <div className="search-bar">
        <div className="ciSearch"><CiSearch /></div>
          <input
            type="text"
            placeholder="Search for cinema"
            className="search-input" 
          />
        </div>        
         <section className="optionitems">
          <div className="available">
          <div className="color1">
            <div className="colorg"></div>
            <div>Available</div>
          </div>

          <div className="color1">
            <div className="colory"></div>
            <div>Filling Fast</div>
          </div>

          <div className="color1">
            <div className="colorb"></div>
            <div>Sold Out</div>
          </div>


          <div className="color1">
            <div className="colorgray"></div>
            <div>Lapsed</div>
          </div>
          </div>
         <div className="status-item1">
          <div className="reacticons">
          <CiCreditCard1 />
          Subtitle</div>
          <div className="reacticons">
          <RiWheelchairFill />
          Accessibility</div>
          </div>
          </section>

          </div>
       
       </div> 
      <section className="accor">
        {<Accordion />}
        <Accordion1 />
        <Accordion2 />
        <Accordion3 />
      </section>
    </section>
  );
};

export default ShowTimings;
