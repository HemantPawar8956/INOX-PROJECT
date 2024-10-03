import axios from "axios";
import React, { useState } from "react";

const QuickBookNav = () => {
  const [change, setChange] = useState("Movie");
  const [data, setData] = useState({
    Show: change,
    movie: "",
    cinema: "",
    date: "",
    timing: "",
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
    // axios
  };
console.log(change)
  let handleMovieData= async()=>{ 
    try{
        let data =  await axios.get(`http://localhost:8080/open/${change.toLowerCase()}s/alls`)
        console.log(data)
    }
    catch{
console.log("helll")
    }
  }
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
          <input
            type="text"
            name="date"
            placeholder="Select Date"
            onChange={handleChange}
            value={date} // This will bind the value to the state
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
          <input
            type="text"
            name="timing"
            placeholder="Select Timing"
            onChange={handleChange}
            value={timing} // This will bind the value to the state
          />
        </div>
        <button className="book-button" type="submit">
          Book
        </button>
      </form>
    </div>
  );
};

export default QuickBookNav;
