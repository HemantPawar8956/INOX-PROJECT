import React, { useEffect, useState } from "react";
import { IoGiftSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import ShowTimings from './Showtimings';

const Payment = () => {
  const { state } = useLocation(); 
  console.log(state)
  const { movieName, theatreName, showTiming, seatInfo, GrandTotal } = state;

  let [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer); 
  }, []);

  return (
    <section className="paymentPage">
      <div className="paymentmain">
        <div className="pay1">
          <div className="pays1">
          <p className="date">{currentDate.toLocaleString()}</p>
            <h1>Movie Name : {movieName}</h1>
            <p>Theatre Name{theatreName}</p>
          </div>
          <div className="pays2">
            <h1>Seat Info : {}</h1> 
          </div>
        </div>

        <div className="pay2">
          <div className="pays3">
            <p>Sub-total</p>
            <p className="greys">Internet Handling fees</p>
            <p>Show Timing : {showTiming}</p>
            <p>Integrated GST(IGST) @ 18%</p>
          </div>
          <div className="pays4">
            <p>Rs {GrandTotal}</p> 
            <p className="greys">Rs 70.80</p> 
            <p>Rs 60.00</p> 
          
          </div>
        </div>
 <div className="pay3">
          <div className="pays5">
            <p>Unlock Offers or Promocodes</p>
          </div>
          <div className="pays6">
            <div className="gift">
              <IoGiftSharp />
            </div>
          </div>
        </div>

        <div className="pay6">
          <p>Pay Rs {parseFloat(GrandTotal) + 70.80 + 60 }</p>
        </div>
      </div>
    </section>
  );
};

export default Payment;
