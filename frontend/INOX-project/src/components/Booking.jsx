import React from 'react';
import photo1 from "../Assets/photo1.webp";
import photo2 from "../Assets/photo2.jpg";
import photo3 from "../Assets/photo3.jpg";
import photo4 from "../Assets/photo4.avif";
import photo5 from "../Assets/photo5.jpg";
import photo6 from "../Assets/photo6.avif";
import photo7 from "../Assets/photo7.avif";
import photo8 from "../Assets/photo8.avif";
import photo9 from "../Assets/photo9.avif";
import photo10 from "../Assets/photo10.avif";
import photo11 from "../Assets/photo11.avif";
import photo12 from "../Assets/photo12.webp";
import photo13 from "../Assets/photo13.avif";
import photo14 from "../Assets/photo14.jpg";
import photo15 from "../Assets/photo15.avif";

const Booking = () => {
    let bookings = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, 
        photo11, photo12, photo13, photo14, photo15];

  return (
    <section className='bookingcard'>
        <section className='maincards'>
       
        {bookings.map((ele, i) => {
            return (
                <div key={i} className='booking'>
                     <div className='heading'>
            <h1>Username: Seema</h1><br />
            <h1>Movie Name: Tumbbad</h1>
        </div>
                    <img src={ele} alt={`Booking ${i + 1}`} />
                    <div className='details'>
            <p>Contact No.: 9142445058 </p>
            <p>Date: 02-10-2024 </p>
            <p>Time: 12:00AM</p>
            <p>Seats: 5</p>
            <p>Language: Hindi</p>
        </div>
                </div>
            );
        })}
       
        </section>
    </section>
  );
}

export default Booking;
