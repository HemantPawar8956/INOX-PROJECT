import React, { useEffect, useState } from 'react'
import { IoGiftSharp } from "react-icons/io5";


const Payment = () => {
    let [currentDate , setCurrentDate] = useState(new Date());


    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentDate(new Date());
        }, 1000);
    });    
  return (
   <section>

    <div className="paymentmain">

        <div className="pay1">
            <div className="pays1">
                <h1>STREE 2</h1>
                <p>Carnival: Odean Complex</p>
                <p className="date">{currentDate.toLocaleString()}</p>
            </div>
            <div className="pays2">
                <h1>2</h1>
                <p>M-Ticket</p>
            </div>
        </div>
        <div className="pay2">
        <div className="pays3">
             <p>Sub-total</p>
             <p className="greys">Internet Handling fees</p>
             <p>Base Amount</p>
             <p>Integrated GST(IGST) @ 18%</p>
        </div>
        <div className="pays4">
             <p>Rs 1140.00</p>
             <p className="greys">Rs 70.80</p>
             <p>Rs 60.00</p>
             <p>Rs 10.80</p>
        </div>
        </div>
        <div className="pay3">
        <div className="pays5">
            <p className="grey">Donate to BookASmile </p>
            <p className="blue">Remove</p>
        </div>
        <div className="pays6">
            <p>Rs 2.00</p>
        </div>
        </div>
        <div className="pay4">
        <div className="pays7">
            <p>Unlock Offers or Promocodes</p>
        </div>
        <div className="pays8">
           <div className="gift"><IoGiftSharp /></div> 
        </div>
        </div>
        <div className="pay5">
        <div className="pays9">
            <p>HDFC/PNB/ICICI BANK </p>
           
            </div>
        </div>
        <div className="pay6">
            <p>Pay Rs 1212.80</p>
        </div>
       
 </div>

   </section>
  )
}

export default Payment
