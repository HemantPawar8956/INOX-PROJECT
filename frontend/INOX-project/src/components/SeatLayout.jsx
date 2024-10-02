import { space } from "postcss/lib/list";
import React, { useState } from "react";

const SeatLayout = () => {
  let seatSeq = "A";
  let [selectedSeats, setSelectedSeats] = useState([]);
  let data = [
    {
      seatNo: "A1",
      price: 200,
      boooked: true,
    },
    {
      seatNo: "A2",
      price: 200,
      boooked: true,
    },
    {
      seatNo: "A3",
      price: 200,
      boooked: false,
    },
    {
      seatNo: "A4",
      price: 200,
      boooked: false,
    },
    {
      seatNo: "A5",
      price: 200,
      boooked: false,
    },
    {
      seatNo: "A6",
      price: 200,
      boooked: false,
    },
    {
      seatNo: "A7",
      price: 200,
      boooked: false,
    },
    {
      seatNo: "A8",
      price: 200,
      boooked: true,
    },
    {
      seatNo: "A9",
      price: 200,
      boooked: false,
    },
    {
      seatNo: "A10",
      price: 200,
      boooked: true,
    },
    {
      seatNo: "A11",
      price: 200,
      boooked: true,
    },
    {
      seatNo: "A12",
      price: 200,
      boooked: false,
    },
    {
      seatNo: "A13",
      price: 200,
      boooked: false,
    },
    {
      seatNo: "A14",
      price: 200,
      boooked: false,
    },
    {
      seatNo: "A15",
      price: 200,
      boooked: true,
    },

    {
      seatNo: "A16",
      price: 200,
    },
    {
      seatNo: "A17",
      price: 200,
    },
    {
      seatNo: "A18",
      price: 200,
      boooked: false,
    },
    {
      seatNo: "B1",
      price: 200,
      boooked: false,
    },
    {
      seatNo: "B2",
      price: 200,
      boooked: false,
    },
    {
      seatNo: "B3",
      price: 200,
      boooked: false,
    },
    {
      seatNo: "B4",
      price: 200,
      boooked: false,
    },
    {
      seatNo: "B5",
      price: 200,
    },
    {
      seatNo: "B6",
      price: 200,
    },
    {
      seatNo: "B7",
      price: 200,
    },
    {
      seatNo: "B8",
      price: 200,
    },
    {
      seatNo: "B9",
      price: 200,
    },
    {
      seatNo: "B10",
      price: 200,
    },
    {
      seatNo: "B11",
      price: 200,
    },
    {
      seatNo: "B12",
      price: 200,
    },
    {
      seatNo: "B13",
      price: 200,
    },
    {
      seatNo: "B14",
      price: 200,
    },
    {
      seatNo: "B15",
      price: 200,
    },
    {
      seatNo: "B16",
      price: 200,
    },
    {
      seatNo: "B17",
      price: 200,
    },
    {
      seatNo: "B18",
      price: 200,
    },
  ];
  let spaces = [1, 2, 3];

  let SeatStatus = (e, ele) => {
    if (!ele.boooked && !selectedSeats.includes(ele.seatNo)) {
      e.target.style.backgroundColor = "#003688";
      e.target.style.color = "white";
      setSelectedSeats([...selectedSeats, ele.seatNo]);
    } else {
      e.target.style.backgroundColor = "white";
      e.target.style.color = "black";
      setSelectedSeats(selectedSeats.filter((seat) => seat !== ele.seatNo));
    }
  };
  console.log(selectedSeats);
  return (
    <>
      <section className="main1">
        <section className="main">
          <nav className="navseat">
            <div className="nav2">
              <span>← BACK</span>
              <span>SELECT SEAT</span>
              <span>CHOOSE CINEMA</span>
              <span>GRAB FOOD</span>
              <span>PAYMENT</span>
            </div>
          </nav>

          <div className="nav3">
            <select name="" id="">
              <option value="">30 sep,Monday</option>
              <option value="">1 oct tuesday</option>
            </select>
            <div className="hindi">
              <div className="hindi1">
                Hindi
                <div>03:40PM</div>
              </div>
              <div className="hindi1">
                Hindi
                <div>03:40PM</div>
              </div>
              <div className="hindi1">
                Hindi
                <div>03:40PM</div>
              </div>
            </div>
          </div>

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
                    <spans
                      className={`seats ${ele.boooked ? "bookedSeat" : ""}`}
                      disabled={ele.boooked}
                      onClick={(e) => {
                        SeatStatus(e, ele);
                      }}>
                      {ele.seatNo}
                    </spans>
                    {(ele.seatNo.slice(1) == 4 || ele.seatNo.slice(1) == 14) &&
                      spaces.map((ele) => <span className="space">space</span>)}
                  </>
                );
              })}
            </section>
          </section>
        </section>
        <section className="carpayment">
          <div className="image-pic">
            <h1>Booking Summary</h1>
          </div>
          <div className="image-pic2"></div>
          <div className="image-pic3">
            <div>SEAT INFO</div>
            <div>Gold</div>
            <div className="r1">R1</div>
          </div>
          <div className="image-pic4">
            <div>
              <h1>Tickets</h1>
            </div>
            <div>
              <h1>1 x 300</h1>
            </div>
          </div>
          <div className="image-pic5">
            <div>
              <h1>PAYMENT DETAILS</h1>
            </div>
            <div>
              <h1>Sub Total</h1>
            </div>
            <div>
              <select name="" id="" className="t1">
                <option value="">TAXTS & FEES</option>
                <option value="">1 oct tuesday</option>
              </select>
            </div>
          </div>
          <div className="image-pic6"></div>
          <div className="image-pic7">
            <div>
              <h1>Grand total</h1>
            </div>
            <div>
              <button className="button-grand">proceed</button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default SeatLayout;
