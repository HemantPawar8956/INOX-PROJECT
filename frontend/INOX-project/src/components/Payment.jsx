import React, { useContext, useEffect, useState } from "react";
import { IoGiftSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import ShowTimings from './Showtimings';
import { globalVar } from "../globalContext/GlobalContext";
import PaymentSuccess from './PaymentSuccess';

const Payment = () => {
  let auth = localStorage.getItem("auth");
  const decodedToken = auth && jwtDecode(auth);
  let userDetails=decodedToken.sub
  let {setPaymentSuccessfullPanel,paymentSuccessfullPanel}=useContext(globalVar)
  const { state } = useLocation(); 
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
     { paymentSuccessfullPanel && <PaymentSuccess  ticket={{movieName, theatreName, showTiming, seatInfo, GrandTotal,userDetails}}/>}
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

        <div className="pay6" onClick={(e)=>{setPaymentSuccessfullPanel(true)}}>
          <p onClick={(e)=>{setPaymentSuccessfullPanel(true)}}>Pay Rs {parseFloat(GrandTotal) + 70.80 + 60 }</p>
        </div>
      </div>
    </section>
  );
};

export default Payment;
