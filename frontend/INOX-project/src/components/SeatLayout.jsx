import React, { useState } from "react";

const SeatLayout = () => {
  let seatSeq = "A";
  let [selectedSeats, setSelectedSeats] = useState([]);
  let [showPayment, setShowPayment] = useState(false); 
  let data = [
    { seatNo: "A1", price: 200, boooked: true },
    { seatNo: "A2", price: 200, boooked: true },
    { seatNo: "A3", price: 200, boooked: false },
    { seatNo: "A4", price: 200, boooked: false },
    { seatNo: "A5", price: 200, boooked: false },
    { seatNo: "A6", price: 200, boooked: false },
    { seatNo: "A7", price: 200, boooked: false },
    { seatNo: "A8", price: 200, boooked: true },
    { seatNo: "A9", price: 200, boooked: false },
    { seatNo: "A10", price: 200, boooked: true },
    { seatNo: "A11", price: 200, boooked: true },
    { seatNo: "A12", price: 200, boooked: false },
    { seatNo: "A13", price: 200, boooked: false },
    { seatNo: "A14", price: 200, boooked: false },
    { seatNo: "A15", price: 200, boooked: true },
    { seatNo: "A16", price: 200, boooked: false },
    { seatNo: "A17", price: 200, boooked: false },
    { seatNo: "A18", price: 200, boooked: false },
    { seatNo: "B1", price: 200, boooked: false },
    { seatNo: "B2", price: 200, boooked: false },
    { seatNo: "B3", price: 200, boooked: false },
    { seatNo: "B4", price: 200, boooked: false },
    { seatNo: "B5", price: 200, boooked: false },
    { seatNo: "B6", price: 200, boooked: false },
    { seatNo: "B7", price: 200, boooked: false },
    { seatNo: "B8", price: 200, boooked: false },
    { seatNo: "B9", price: 200, boooked: false },
    { seatNo: "B10", price: 200, boooked: false },
    { seatNo: "B11", price: 200, boooked: false },
    { seatNo: "B12", price: 200, boooked: false },
    { seatNo: "B13", price: 200, boooked: false },
    { seatNo: "B14", price: 200, boooked: false },
    { seatNo: "B15", price: 200, boooked: false },
    { seatNo: "B16", price: 200, boooked: false },
    { seatNo: "B17", price: 200, boooked: false },
    { seatNo: "B18", price: 200, boooked: false },
  ];
  let spaces = [1, 2, 3];

  let SeatStatus = (e, ele) => {
    if (!ele.boooked && !selectedSeats.includes(ele.seatNo)) {
      e.target.style.backgroundColor = "#003688";
      e.target.style.color = "white";
      setSelectedSeats((prevSeats) => [...prevSeats, ele.seatNo]);
      setShowPayment(true); 
    } else if (selectedSeats.includes(ele.seatNo)) {
      e.target.style.backgroundColor = "lightgray";
      e.target.style.color = "black";
      setSelectedSeats((prevSeats) => prevSeats.filter((seat) => seat !== ele.seatNo));

      if (selectedSeats.length === 1) {
        setShowPayment(false);
      }
    }
  };

  const seatPrice = 200;
  const subtotal = selectedSeats.length * seatPrice;
  const grandTotal = subtotal;

  return (
    <section className="main1">
      <section className="main">
        <nav className="navseat">
          <div className="nav2">
            <span className="SeatLayoutNavEle">← BACK</span>
            <span className="SeatLayoutNavEle">SELECT SEAT</span>
            <span className="SeatLayoutNavEle">CHOOSE CINEMA</span>
            <span className="SeatLayoutNavEle">GRAB FOOD</span>
            <span className="SeatLayoutNavEle">PAYMENT</span>
          </div>
        </nav>


        <section className="seat">
          <div className="seat-content">
            <div className="line"></div>
            <div className="seat-screen">SCREEN</div>
            <div className="seat-legend">
              <span className="small1">
                <div className="small availableSeat"></div>
                <div className="SeatSelectionType">Available</div>
              </span>
              <span className="small1">
                <div className="small selectedSeat"></div>
                <div className="SeatSelectionType">Selected</div>
              </span>
              <span className="small1">
                <div className="small occupiedSeat"></div>
                <div className="SeatSelectionType">Occupied</div>
              </span>
            </div>
          </div>
          <section className="car1">
            {data.map((ele, index) => {
              return (
                <>
                  {ele.seatNo.slice(0, 1) !== seatSeq &&
                    ((seatSeq = ele.seatNo.slice(0, 1)),
                    (
                      <>
                        <br key={index} />
                        <br key={index + 1} />
                      </>
                    ))}

                  <span
                    className={`seats ${ele.boooked ? "bookedSeat" : ""}`}
                    disabled={ele.boooked}
                    onClick={(e) => {
                      SeatStatus(e, ele);
                    }}
                    key={index + 2}>
                    {ele.seatNo}
                  </span>
                  {(ele.seatNo.slice(1) == 4 || ele.seatNo.slice(1) == 14) &&
                    spaces.map((ele, i) => (
                      <span className="space" key={i + 1}>
                        space
                      </span>
                    ))}
                </>
              );
            })}
          </section>
        </section>
      </section>

      {showPayment && (
        <section className="carpayment">
          <div className="image-pic">
            <h1>Booking Summary</h1>
          </div>
          <div className="image-pic2">
            <div>SEAT INFO</div>
            <div>{selectedSeats.join(", ")}</div>
            <div className="r1">R1</div>
          </div>
          <div className="image-pic3">
            <div>
              <h1>Tickets</h1>
            </div>
            <div>
              <h1>{selectedSeats.length} x {seatPrice}</h1>
            </div>
          </div>
          <div className="image-pic4">
            <div>
              <h1>PAYMENT DETAILS</h1>
            </div>
            <div>
              <h1>Sub Total: ₹{subtotal}</h1>
            </div>
            <div>
              <select name="" id="" className="t1">
                <option value="">TAXES & FEES</option>
                <option value="">5%</option>
                <option value="">10%</option>
              </select>
            </div>
          </div>
          <div className="image-pic5">
            <div>
              <h1>Grand Total: ₹{grandTotal}</h1>
            </div>
            <div>
              <button className="button-grand">Proceed</button>
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default SeatLayout;
