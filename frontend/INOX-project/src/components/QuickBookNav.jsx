import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker"; // Assuming you are using this library
import { useNavigate } from "react-router-dom"; // For navigation
import "react-datepicker/dist/react-datepicker.css"; // Import date picker styles

const QuickBookNav = ({ change }) => {
  const [fetchedData, setFetchedData] = useState([]);
  let [searchedMovie, setSearchedMovie] = useState("");
  const [data, setData] = useState({
    Show: change, // Either Movie or Cinema
    movie: "",
    cinema: "",
    date: null,
    timing: "10:00", // Default time
  });

  const { Show, movie, cinema, date, timing } = data;
  const navigate = useNavigate(); // Hook for navigation

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // Handle form submission and navigate to the SelectSeat page
  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the 'selectseat' page and pass the data as state
    navigate("/selectseat", { state: { ...data } });
  };

  // Fetch Movie Data
  const handleMovieData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/open/${change?.toLowerCase()}s/alls`
      );
      setFetchedData(data);
    } catch {
      console.log("Data not found");
    }
  };

  // Fetch Cinema Data
  const handleCinemaData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/open/${(change === "Movie"
          ? "Cinema"
          : "Movie"
        ).toLowerCase()}s/alls`
      );
      setFetchedData(data);
    } catch {
      console.log("Data not found");
    }
  };

  // Handle date change
  const handleDateChange = (selectedDate) => {
    setData({
      ...data,
      date: selectedDate, // Update the date field
    });
  };

  return (
    <div className="quick-book-container">
      <span className="quick-title">Quick Book</span>

      {/* Toggle between Movie and Cinema */}
      <div className="quick-book-change">
        <button onClick={() => setData({ ...data, Show: "Movie" })}>Movie</button>
        <button onClick={() => setData({ ...data, Show: "Cinema" })}>Cinema</button>
      </div>

      <form className="quick-book-options" onSubmit={handleSubmit}>
        {/* Movie/Cinema Input */}
        <div className="option">
          {fetchedData.length === 0 && (
            <input
              type="text"
              onClick={handleMovieData}
              onChange={(e) => setSearchedMovie(e.target.value)}
              value={searchedMovie}
              placeholder={`Search ${Show}`}
            />
          )}

          {fetchedData.length > 0 && (
            <select
              onClick={handleMovieData}
              onChange={(e) =>
                setData({
                  ...data,
                  [Show.toLowerCase()]: e.target.value, // Dynamically update the selected value (movie or cinema)
                })
              }
              value={data[Show.toLowerCase()]}
            >
              <option value="" disabled>
                Select {Show}
              </option>
              {fetchedData.map((item) => (
                <option key={item.id} value={item.moviename || item.name}>
                  {item.moviename || item.name} - {item.genre} (
                  {item.movieLanguage})
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Date Picker */}
        <div className="option">
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            placeholderText="YYYY/MM/DD"
            dateFormat="yyyy/MM/dd"
            popperPlacement="bottom"
            isClearable
          />
        </div>

        {/* Time Input */}
        <div className="option">
          <input
            type="time"
            name="timing"
            value={timing}
            onChange={handleChange} // Handle time input change
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
