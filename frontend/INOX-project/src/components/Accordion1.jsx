import React, { useContext, useState } from "react";
import { RiWheelchairFill } from "react-icons/ri";
import { MdOutlineDirections } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { globalVar } from "../globalContext/GlobalContext";
import { useNavigate } from "react-router-dom";

const Accordion1 = ({ data }) => {
  console.log(data);
  let navigate=useNavigate();
  let { setUpdateShowPanel, setDeleteData ,setIsModalOpen,inoxLoginType} = useContext(globalVar);
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

  let handleBooking=(ele)=>{
    navigate("/selectseats", {state:ele})
  }
  return (
    <section className="show-timings-container">
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="inoxhead">
          <h2 className="inoxh2">{data.name}</h2>
          <p className="inoxp">
          {data.address}
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
              {data?.showTimes?.map((ele)=>{
             return  <div className="time-box" onClick={()=>{handleBooking(ele)}}>{ele.time}</div>
              
              })}
            </div>
             
             {/* {inoxLoginType=== "ADMIN" &&  <div className="button-container">
              <button
                className="delete-show-button"
                onClick={() => {
                  handleDeleteShow(data);
                }}>
                Delete Show
              </button>
            </div>} */}
           
          </div>
        </div>
      )}
    </section>
  );
};

export default Accordion1;
