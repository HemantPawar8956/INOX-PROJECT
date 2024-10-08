import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles

const QuickBookNav = () => {
  const [change, setChange] = useState("Movie");
  const [fetchedMovieData, setFetchedMovieData] = useState([]); // to store the fetched data
  const [fetchedCinemaData, setFetchedCinemaData] = useState([]); // to store the fetched data
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
  };

  let handleMovieData = async () => {
    try {
      let { data } = await axios.get(
        `http://localhost:8080/open/${change?.toLowerCase()}s/alls`
      );
      setFetchedMovieData(data);
      console.log(data);
    } catch {
      console.log("Data not found");
    }
  };

  let handleCinemaData = async () => {
    try {
      let { data } = await axios.get(
        `http://localhost:8080/open/${(change === "Movie"
          ? "Cinema"
          : "Movie"
        )?.toLowerCase()}s/alls`
      );
      setFetchedCinemaData(data);
      console.log(data);
    } catch {
      console.log("Data not found");
    }
  };

  // Handle date change
  const handleDateChange = (selectedDate) => {
    setData({
      ...data,
      date: selectedDate, // Update the date field with the selected date
    });
  };

  // // Handle time change
  // const handleTimeChange = (selectedTime) => {
  //   setData({
  //     ...data,
  //     timing: selectedTime, // Update the timing field with the selected time
  //   });
  // };

  // >>>>>>> Kanupriya

  // console.log(
  //   fetchedData
  // .filter((movie) =>
  //       movie?.moviename?.toLowerCase()?.includes(searchedMovie.toLowerCase())
  //     )
  //     .map((ele) => {
  //       console.log(ele.moviename);
  //     })
  // );
  useEffect(() => {
    handleMovieData();
    handleCinemaData();
  }, [change]);
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
            type="text"
            onClick={change === "Movie" ? handleMovieData : handleCinemaData}
            onChange={(e) => handleChange(e.target.value)}
            name={change}
            placeholder={`Select ${change}`}
          />
          {change == "Movie"
            ? console.log(fetchedMovieData)
            : console.log(fetchedCinemaData)}
        </div>
        <div className="option">
          <DatePicker
            className="datepicker"
            selected={date} // Bind the selected date to the state
            onChange={handleDateChange}
            placeholderText="YYYY/MM/DD"
            dateFormat="yyyy/MM/dd"
            popperPlacement="bottom"
            isClearable // Allow clearing the date
          />
        </div>
        <div className="option">
          <input
            onClick={change === "Cinema" ? handleMovieData : handleCinemaData}
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
