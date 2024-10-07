import React, { useContext, useEffect, useState } from "react";
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
import photo16 from "../Assets/photo16.avif";
import photo17 from "../Assets/photo17.avif";
import photo18 from "../Assets/photo18.webp";
import photo19 from "../Assets/photo19.avif";
import photo20 from "../Assets/photo20.avif";
import { globalVar } from "../globalContext/GlobalContext";

const Corousel2 = () => {
  const [movies, setMovies] = useState([]);
  let { loginType } = useContext(globalVar);
  let data1 = [
    {
      img: photo1,
      title: "Joker Folie",
      genres: "Crime",
      languages: "English",
    },
    {
      img: photo2,
      title: "Devara",
      genres: "Action",
      languages: "Hindi , Telugu",
    },
    { img: photo3, title: "Stree 2 ", genres: "Horror", languages: "Hindi" },
    { img: photo4, title: "Tumbbad", genres: "Horror", languages: "Hindi" },
    {
      img: photo5,
      title: "The Buckingham Murders",
      genres: "Crime",
      languages: "English, Hindi",
    },
    { img: photo6, title: "Shukrana", genres: "Drama", languages: "Punjabi" },
    { img: photo7, title: "Veer Zara", genres: "Drama", languages: "Hindi" },
    {
      img: photo8,
      title: "Trailer Screening",
      genres: "Drama",
      languages: "Multiple",
    },
    {
      img: photo9,
      title: "Khel Khel Me",
      genres: "Comedy",
      languages: "Hindi",
    },
    {
      img: photo10,
      title: "Transformers One",
      genres: "Animation",
      languages: "English, Hindi",
    },
    {
      img: photo11,
      title: "Binny and family",
      genres: "Drama",
      languages: "Hindi",
    },
    { img: photo12, title: "Taal", genres: "Drama", languages: "Hindi" },
    { img: photo13, title: "MEIYAZHAGAN", genres: "Drama", languages: "Tamil" },
    {
      img: photo14,
      title: "Ardaas sarbat de bhale",
      genres: "Drama",
      languages: "Punjabi",
    },
    {
      img: photo15,
      title: "Khiskindam kandam",
      genres: "Drama",
      languages: "Malayalam",
    },
    {
      img: photo16,
      title: "Inside out 2",
      genres: "Animation",
      languages: "English",
    },
    {
      img: photo17,
      title: "Imax Trailer",
      genres: "Drama",
      languages: "Multiple",
    },
    {
      img: photo18,
      title: "Dharmveer",
      genres: "Biography",
      languages: "Marathi",
    },
    {
      img: photo19,
      title: "Jab we Met",
      genres: "Romance",
      languages: "Hindi",
    },
    {
      img: photo20,
      title: "Khel khel me",
      genres: "Comedy",
      languages: "Hindi",
    },
  ];
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <section className="corousel2">
      <div className="heading">
        <div className="head">
          <h1>Now Showing</h1>
        </div>

        {loginType == "ADMIN" && (
          <div className="new-btn">
            <button>Add New Movies</button>
          </div>
        )}

        <div className="box">
          <div className="box1 checkboxBox">
            <input type="checkbox" name="" id="Subtitle" />
            <label htmlFor="Subtitle">WithSubtitle</label>
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
            <select name="" id="" className="GenreDropdown">
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
      {data1.map((ele, i) => {
        return (
          <div className="cards2" key={i}>
            <img src={ele.img} alt={ele.title} />
            <div className="card-info">
              <h3>{ele.title}</h3>
              <p>Genres: {ele.genres}</p>
              <p>language: {ele.languages}</p>
              {loginType === "USER" ? (
                <button>Book Tickets</button>
              ) : loginType === "ADMIN" ? (
                <div>
                  <button>Update</button>
                  <button>Delete</button>
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
      ;
    </section>
  );
};

export default Corousel2;
