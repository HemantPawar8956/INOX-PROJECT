import { space } from "postcss/lib/list";
import React, { useState } from "react";

const SeatLayout = () => {
  let seatSeq="A"
  let data = [
    {
      seatNo: "A1",
      price: 200,
    },
    {
      seatNo: "A2",
      price: 200,
    },
    {
      seatNo: "A3",
      price: 200,
    },
    {
      seatNo: "A4",
      price: 200,
    },
    {
      seatNo: "A5",
      price: 200,
    },
    {
      seatNo: "A6",
      price: 200,
    },
    {
      seatNo: "A7",
      price: 200,
    },
    {
      seatNo: "A8",
      price: 200,
    },
    {
      seatNo: "A9",
      price: 200,
    },
    {
      seatNo: "A10",
      price: 200,
    },
    {
      seatNo: "A11",
      price: 200,
    },
    {
      seatNo: "A12",
      price: 200,
    },
    {
      seatNo: "A12",
      price: 200,
    },
    {
      seatNo: "A13",
      price: 200,
    },
    {
      seatNo: "A14",
      price: 200,
    },
    {
      seatNo: "A15",
      price: 200,
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
    },
    {
      seatNo: "A19",
      price: 200,
    },
    {
      seatNo: "A20",
      price: 200,
    },
    {
      seatNo: "B21",
      price: 200,
    },
    {
      seatNo: "B22",
      price: 200,
    },
    {
      seatNo: "B23",
      price: 200,
    },
    {
      seatNo: "B24",
      price: 200,
    },
  ];
  let spaces = [1, 2, 3, 4];
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
                  <div className="small"></div>
                  <div>Available</div>
                </span>
                <span className="small1">
                  <div className="small"></div>Selected
                </span>
                <span className="small1">
                  <div className="small"></div>Occupied
                </span>
              </div>
            </div>
            <section className="car1">
              {data.map((ele,index) => {

                return (
                  <>
                    <spans className="cards">{ele.seatNo}</spans>
                    {(ele.seatNo.slice(1) == 4 || ele.seatNo.slice(1) == 14) &&
                      spaces.map((ele) => <span className="space">hii</span>)}
                  </>
                );
                if (ele.seatNo.slice(0, 1) !== seatSeq) {
                  seatSeq=ele.seatNo.slice(0, 1);
                  return <><br key={index} /><br key={index} /><br key={index} />+</>;
                }
              })}
              ;
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
          <div><h1>Tickets</h1></div>
          <div><h1>1 x 300</h1></div>
        </div>
        <div className="image-pic5">
          <div>
            <h1>PAYMENT DETAILS</h1>
          </div>
          <div>
            <h1>
            Sub Total
            </h1>
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
