import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { globalVar } from "../globalContext/GlobalContext";

const QuickBookNav = () => {
  let { inoxLoginType } = useContext(globalVar);
  const [change, setChange] = useState("Movie");
  const [fetchedMovieData, setFetchedMovieData] = useState([]); // List of Movies
  const [fetchedCinemaData, setFetchedCinemaData] = useState([]); // List of Cinemas
  const [data, setData] = useState({
    Show: change,
    movie: "",
    cinema: "",
    date: null,
    timing: "10:00",
  });

  const { Show, movie, cinema, date, timing } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", data);
    // Add your form submission logic here
  };

  const handleMovieData = async () => {
    try {
      let { data } = await axios.get("http://localhost:8080/open/movies/alls");
      setFetchedMovieData(data); // Fetch and set movie data
      console.log(data);
    } catch {
      console.log("Movie data not found");
    }
  };

  const handleCinemaData = async () => {
    try {
      let { data } = await axios.get("http://localhost:8080/open/cinemas/alls");
      setFetchedCinemaData(data); // Fetch and set cinema data
    } catch {
      console.log("Cinema data not found");
    }
  };

  const handleDateChange = (selectedDate) => {
    setData({ ...data, date: selectedDate });
  };

  useEffect(() => {
    handleCinemaData();
    handleMovieData();
  }, [change]);

  return (
    <div className="quick-book-container">
      

      {inoxLoginType === "ADMIN" ? (
        <>
        <span className="quick-title">Quick Book</span>
          <div className="quick-book-change">
            <button onClick={() => setChange("Movie")}>Movie</button>
            <button onClick={() => setChange("Cinema")}>Cinema</button>
          </div>

          <form className="quick-book-options" onSubmit={handleSubmit}>
            <div className="option">
              <select
                name={change === "Movie" ? "movie" : "cinema"}
                value={change === "Movie" ? movie : cinema}
                onChange={handleChange}
              >
                <option value="">{`Select ${change}`}</option>
                {(change === "Movie"
                  ? fetchedMovieData
                  : fetchedCinemaData
                ).map((item, index) => (
                  <option key={index} value={item.moviename}>
                    {item.moviename || item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="option">
              <DatePicker
                className="datepicker"
                selected={date}
                onChange={handleDateChange}
                placeholderText="YYYY/MM/DD"
                dateFormat="yyyy/MM/dd"
                popperPlacement="bottom"
                isClearable
              />
            </div>

            <div className="option">
              <select
                name={change === "Movie" ? "cinema" : "movie"}
                value={change === "Movie" ? cinema : movie}
                onChange={handleChange}
              >
                <option value="">{`Select ${
                  change === "Movie" ? "Cinema" : "Movie"
                }`}</option>
                {(change === "Movie"
                  ? fetchedCinemaData
                  : fetchedMovieData
                ).map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name || item.moviename}
                  </option>
                ))}
              </select>
            </div>

            <div className="option">
              <input
                type="time"
                name="timing"
                value={timing}
                onChange={(e) => setData({ ...data, timing: e.target.value })}
              />
            </div>

            <button className="book-button" type="submit">
              Book
            </button>
          </form>
        </>
      ) : (
       
        <div className="home-input-search">
           <span>Search by Movie Name :   </span>
          <input type="search" name="" id="" placeholder="Enter Movie Name" className="search-input"/>
          <button className="home-button">Search</button>
        </div>
      )}
    </div>
  );
};

export default QuickBookNav;
