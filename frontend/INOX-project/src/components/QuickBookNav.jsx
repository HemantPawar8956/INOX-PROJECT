import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles

const QuickBookNav = () => {
  const [change, setChange] = useState("Movie");
  const [data, setData] = useState({
    Show: change,
    movie: "",
    cinema: "",
    date: null, // Set initial date as null
    timing: "10:00", // Set a default time
  });

  const { Show, movie, cinema, date, timing } = data;

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., axios)
  };
  console.log(change);
  let handleMovieData = async () => {
    try {
      let data = await axios.get(
        `http://localhost:8080/open/${change.toLowerCase()}s/alls`
      );
      console.log(data);
    } catch {
      console.log("helll");
    }
  };
 
  // Handle date change
  const handleDateChange = (selectedDate) => {
    setData({
      ...data,
      date: selectedDate, // Update the date field with the selected date
    });
  };

  // Handle time change
  const handleTimeChange = (selectedTime) => {
    setData({
      ...data,
      timing: selectedTime, // Update the timing field with the selected time
    });
  };

  console.log(data);

  return (
    <div className="quick-book-container">
      <span className="quick-title">Quick Book</span>

      <div className="quick-book-change">
        <button onClick={() => setChange("Movie")}>Movie</button>
        <button onClick={() => setChange("Cinema")}>Cinema</button>
      </div>

      <form className="quick-book-options" onSubmit={handleSubmit}>
        <div className="option">
          <input
            onClick={handleMovieData}
            type="text"
            name={change}
            placeholder={`Select ${change}`}
            onChange={handleChange}
            value={data[change]} // This will bind the value to the state
          />
        </div>
        <div className="option">
          <DatePicker
            className="datepicker"
            selected={date} // Bind the selected date to the state
            onChange={handleDateChange} // Handle date change
            placeholderText="YYYY/MM/DD" // Placeholder text
            dateFormat="yyyy/MM/dd" // Date format
            popperPlacement="bottom" // Position the date picker
            isClearable // Allow clearing the date
          />
        </div>
        <div className="option">
          <input
            type="text"
            name={change === "Movie" ? "cinema" : "movie"}
            placeholder={`Select ${change === "Movie" ? "Cinema" : "Movie"}`}
            onChange={handleChange}
            value={change === "Movie" ? cinema : movie} // Bind the correct field to the state
          />
        </div>
        <div className="option">
          <input type="time" name="" id="" />
        </div>
        <button className="book-button" type="submit">
          Book
        </button>
      </form>
    </div>
  );
};

export default QuickBookNav;
