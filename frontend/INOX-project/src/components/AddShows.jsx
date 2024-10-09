import axios from "axios";
import React, { useEffect, useState } from "react";

const AddShows = () => {
  const [theaters, setTheaters] = useState([]); // List of theaters
  const [movies, setMovies] = useState([]);//list of movies
  const [showDetails, setShowDetails] = useState({
    time: "",
    date: "",
    theater: "",
    movie: "",

  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShowDetails({
      ...showDetails,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { time, date, seat, theater, movie } = showDetails;
    const newErrors = {};

    if (!time) newErrors.time = "Time is required";
    if (!date) newErrors.date = "Date is required";
    if (!theater) newErrors.theater = "Theater name is required";
    if (!movie) newErrors.movie = "Movie name is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
useEffect(() => {
  const fetchTheaters = async () => {
    try {
      const response = await axios.get('http://localhost:8080/theater/all',showDetails,
        {
          headers: {
            Authorization:`Bearer ${localStorage.getItem("auth")}`
          }
        }
      ); // Replace with your API endpoint
      // const data = await response.json();
      setTheaters(response.data); // Assuming data is an array of theaters
    } catch (error) {
      console.error("Error fetching theaters:", error);
    }
  };
  fetchTheaters();
}, []);
  
  useEffect(() => {
    const fetchMovies = async () => {
    
    try {
      const response = await axios.get('http://localhost:8080/movies/all',
        {
          headers: {
            Authorization:`Bearer ${localStorage.getItem("auth")}`
          }
        }
      ); // Replace with your API endpoint
      setMovies(response.data); // Assuming response.data is an array of movies
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  fetchMovies();
  }, []);
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(localStorage.getItem("auth"))
      const response = await axios.post("http://localhost:8080/show/save",
        {
          headers: {
            Authorization:`Bearer ${localStorage.getItem("auth")}`
          }
        }
      );
      console.log(response)
    }
    catch (error) {
      console.log("error" + error);
    }
    if (validateForm()) {
      
      console.log("Show Details:", showDetails);
      console.log("Show Details:", showDetails.movie);
       console.log("Show Details:", showDetails.movie);
      
      // setShowDetails({
      //   time: "",
      //   date: "",
      //   theater: "",
      //   movie: "",
      // });
      setErrors({});
     
    }
  };
console.log(showDetails)
  return (
    <section className="add-show-main">
    <div className="add-shows-container">
      <h2>Add New Show</h2>
      <form onSubmit={handleSubmit} className="add-show-form">
        <div className="form-group">
          <label>Time</label>
          <input
            type="time"
            name="time"
            value={showDetails?.time}
            onChange={handleChange}
            className={errors.time ? "error" : ""}
          />
          {errors.time && <p className="error-message">{errors.time}</p>}
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={showDetails.date}
            onChange={handleChange}
            className={errors.date ? "error" : ""}
          />
          {errors.date && <p className="error-message">{errors.date}</p>}
        </div>


        <div className="form-group">
          <label>Theater</label>
          <input
            type="text"
            name="theater"
            value={showDetails.theater}
            onChange={handleChange}
            className={errors.theater ? "error" : ""}
          />
          {errors.theater && <p className="error-message">{errors.theater}</p>}
          </div>
          <div className="form-group">
  <label>Theater</label>
  <select
    name="theater"
    value={showDetails.theater}
    onChange={handleChange}
    className={errors.theater ? "error" : ""}
  >
   <option value="">Select a theater</option>
    {theaters.map((theater) => (
      <option key={theater.id} value={theater.name}>
        {theater.name}
      </option> 
    ))}
  </select>
  {errors.theater && <p className="error-message">{errors.theater}</p>}
</div>

        <div className="form-group">
  <label>Movie</label>
  <select
    name="movie"
    value={showDetails.movie}
    onChange={handleChange}
    className={errors.movie ? "error" : ""}
  >
    <option value="">Select a movie</option>
    {movies.map((movie) => (
      <option key={movie.id} value={movie}>
        {movie.moviename}
      </option>
    ))}
  </select>
  {errors.movie && <p className="error-message">{errors.movie}</p>}
</div>

        <button type="submit" className="submit-button">
          Add Show
        </button>
      </form>
    </div>
    </section>
  );
};

export default AddShows;