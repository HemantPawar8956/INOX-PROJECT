import React from "react";
import Accordion from "../components/Accordion";
import Accordion1 from "../components/Accordion";
import Accordion2 from "../components/Accordion";
import Accordion3 from "../components/Accordion";

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
        <h2>Showtimings</h2>
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
      <div className="show-timings-search-status">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for cinema"
            className="search-input"
          />
        </div>

        {/* <div  className="status-options1">
          <div className="status-options">
          <div className="status-item available1"><div className="status-item available"></div><div>Available</div></div>
          <div className="status-item filling-fast">Filling Fast</div>
          <div className="status-item sold-out">Sold Out</div>
          <div className="status-item lapsed">Lapsed</div>
          </div>
          <div className="status-item1">
          <div className="status-item subtitle">Subtitle</div>
          <div className="status-item accessibility">Accessibility</div>
          </div>
        </div> */}
        <div className="first-status">
          <div className="first-status1">
            <div className="available"></div>
            <div>Available</div>
          </div>
          <div className="first-status1">
            <div className="available1"></div>
            <div>Filling Fast</div>
          </div>
          <div className="first-status1">
            <div className="available2"></div>
            <div>Sold Out</div>
          </div>
          <div className="first-status1">
            <div className="available3"></div>
            <div>Lapsed</div>
          </div>
          <div className="first-status2">
            <div>Subtitle</div>
            <div>Accessibility</div>
          </div>
        </div>
        <div></div>
      </div>
      <section className="accor">
        <Accordion />
        <Accordion1 />
        <Accordion2 />
        <Accordion3 />
      </section>
    </section>
  );
};

export default ShowTimings;
