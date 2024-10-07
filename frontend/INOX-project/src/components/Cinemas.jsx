import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import movie1 from "../assests/movie1.avif";
import movie2 from "../assests/movie2.avif";
import movie3 from "../assests/movie3.avif";
import movie4 from "../assests/movie4.avif";
import movie5 from "../assests/movie5.jpg";
import movie6 from "../assests/movie6.jpg";

const Cinemas = () => {
  const movies = [
    { title: "Movie 1", posterUrl: movie1 },
    { title: "Movie 2", posterUrl: movie2 },
    { title: "Movie 3", posterUrl: movie3 },
    { title: "Movie 4", posterUrl: movie4 },
    { title: "Movie 5", posterUrl: movie5 },
    { title: "Movie 6", posterUrl: movie6 },
  ];

  let data1 = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="cinema-list">
      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Search for cinema"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <button className="addtheater">Add Theater</button>
      </div>
      <div className="cinema-cards-display">
        {data1.map((data) => {
          return (
            <div className="cinema-item" key={data.name}>
              <div>
                <h2 className="cinema-name">{data.name}</h2>
                <p className="cinema-address">{data.address}</p>
              </div>
              <div className="cinema-movie-items">
                <h2>Now Showing</h2>
                <div className="movie-list">
                  {movies.map((movie, index) => (
                    <div key={index} className="movie-item">
                      <img src={movie.posterUrl} alt={movie.title} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cinemas;
