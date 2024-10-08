import React, { useContext, useEffect, useState } from "react";
import { globalVar } from "../globalContext/GlobalContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Corousel2 = () => {
  let navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const {
    loginType,
    moviePanel,
    setMoviePanel,
    inoxLoginType,
    setInoxLoginType,
    updatemoviePanel,setUpdatemoviePanel,
        MovieId , setMovieId,refadd , setrefadd,
        delMovie,setDelMovie
  } = useContext(globalVar);

  let handleBooking = (ele) => {
    navigate("/showtimings", { state: ele });
  };

  useEffect(() => {
    let token = localStorage.getItem("auth");
    console.log(token);

    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:8080/open/movies/alls"
          );
        console.log(response.data);
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, [refadd,delMovie]);

  return (
    <section className="corousel2">
      <div className="heading">
        <div className="head">
          <h1>Now Showing</h1>
        </div>

        {inoxLoginType === "ADMIN" && (
          <div
            className="new-btn"
            onClick={() => {
              setMoviePanel(!moviePanel);
            }}>
            <button>Add New Movies</button>
          </div>
        )}

        <div className="box">
          <div className="box1">
            <input type="checkbox" name="" id="Subtitle" />
            <label htmlFor="Subtitle">With Subtitle</label>
          </div>
          <div className="box1">
            <select name="" id="" className="GenreDropdown">
              <option value="">All Genres</option>
              <option value="">Action</option>
              <option value="">Adventures</option>
              <option value="">Drama</option>
              <option value="">Horror</option>
              <option value="">Crime</option>
              <option value="">Biography</option>
              <option value="">Romance</option>
              <option value="">Comedy</option>
            </select>
          </div>
          <div className="box1">
            <select name="" id="">
              <option value="">All Languages</option>
              <option value="">English</option>
              <option value="">Hindi</option>
              <option value="">Malayalam</option>
              <option value="">Marathi</option>
              <option value="">Punjabi</option>
              <option value="">Tamil</option>
              <option value="">Telugu</option>
            </select>
          </div>
        </div>
      </div>

      {movies.length > 0 &&
        movies.map((ele, i) => (
          <div className="cards2" key={i}>
            <div className="card-info">
              <img src={ele.movieImage} alt="" />
              <h3>{ele.moviename}</h3>
              <p>Language: {ele.movieLanguage}</p>
              <p>Duration: {ele.duration} minutes</p>
              <p>Genre: {ele.genre}</p>

              {inoxLoginType === "USER" ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation(), handleBooking(ele);
                  }}>
                  Book Tickets
                </button>
              ) : inoxLoginType === "ADMIN" ? (
                <div className="admin-btn">
                  <button onClick={()=>{UpdateMovie(ele)}}>Update</button>
                  <button onClick={()=>{deleteMovie(ele)}}>Delete</button>
                </div>
              ) : null}
            </div>
          </div>
        ))}
    </section>
  );
};

export default Corousel2;
