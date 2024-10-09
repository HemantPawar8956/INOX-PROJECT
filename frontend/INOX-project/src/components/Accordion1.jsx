import React, { useContext, useState } from "react";
import { RiWheelchairFill } from "react-icons/ri";
import { MdOutlineDirections } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { globalVar } from "../globalContext/GlobalContext";

const Accordion1 = ({ data }) => {
  console.log(data);
  let { setUpdateShowPanel, setDeleteData ,setIsModalOpen} = useContext(globalVar);
  const [isOpen, setIsOpen] = useState(false);
  // let [data, setData] = useState({});

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  let handleDeleteShow = (data) => {
    console.log(data);
    setIsModalOpen(true);
    setDeleteData({
      comp: "",
      data: data,
    });
  };
  return (
    <section className="show-timings-container">
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="inoxhead">
          <h2 className="inoxh2">INOX AIPL JOY Street Mall Gurugram</h2>
          <p className="inoxp">
            INOX AIPL JOY Street Mall Gurugram PVR INOX Limited , 3rd Floor ,
            AIPL JOYSTREET MALL
          </p>
        </div>
        <div className="accordionicons">
          <p>20.1km away</p>
          <div>
            <RiWheelchairFill />
          </div>
          <div>
            <MdOutlineDirections />
          </div>
          <div>
            <FaRegHeart />
          </div>
          <span>{isOpen ? "-" : "+"}</span>
        </div>
      </div>

      {isOpen && (
        <div className="downaccordion">
          <div className="accordion-content">
            <h3>STREE-2( SARKATE - KA - ATANK ) (U/A)</h3>
            {/* <p>2h 50m • Hindi, Telugu • Action</p> */}

            <div className="timings-row">
              <div className="time-box">11:10 AM</div>
              <div className="time-box">12:45 PM</div>
              <div className="time-box">02:45 PM</div>
              <div className="time-box">04:20 PM</div>
              <div className="time-box">06:20 PM</div>
              <div className="time-box">07:55 PM</div>
              <div className="time-box">09:55 PM</div>
            </div>

            <div className="button-container">
              <button
                className="delete-show-button"
                onClick={() => {
                  handleDeleteShow(data);
                }}>
                Delete Show
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Accordion1;
