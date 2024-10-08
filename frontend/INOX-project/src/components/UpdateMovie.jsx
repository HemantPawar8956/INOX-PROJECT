import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'; 
import { globalVar } from '../globalContext/GlobalContext';
import toast from 'react-hot-toast';

const UpdateMovie = () => {
    let {MovieId, setMovieId ,updatemoviePanel,setUpdatemoviePanel}=useContext(globalVar)
    
   let [updateMovie, setUpdateMovie] = useState({
      id: " ",
      moviename: " ",
      genre: " ",
      duration: " ",
      movieLanguage: " ", 
      movieImage: " "
   });

   const handleChange = (e) => {
     const { name, value } = e.target;
     setUpdateMovie({ ...updateMovie, [name]: value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault(); 
      let token=localStorage.getItem("auth")
      try {
          const response = await axios.put('http://localhost:8080/movies/update', updateMovie,{

            headers: {
                Authorization: `Bearer ${token}`,  // Include token in the headers
              },
          }
        );
        toast.success("updated successfully");
        setUpdatemoviePanel(!updatemoviePanel);

        console.log('Movie updated:', response.data);
    } catch (error) {
        console.error('There was an error updating the movie!', error);
    }
 };
    useEffect(()=>{
 const fetchMovie = async () => {
  console.log(MovieId);
  let token=localStorage.getItem("auth")
  try {
      const response = await axios.get(`http://localhost:8080/movies/find/${MovieId}`,{
          headers: {
              Authorization: `Bearer ${token}`,  // Include token in the headers
            },
      });
      setUpdateMovie(response.data)
      console.log('Movie updated:', response.data);
  } catch (error) {
      console.error('There was an error updating the movie!', error);
  }
   }
   fetchMovie();
  },[])
 return (
    <div className="update-movie">
       <form className="update-movie__form" onSubmit={handleSubmit}>
          <label className="update-movie__label">Movie ID:</label>
          <input
             type="text"
             className="update-movie__input"
             value={updateMovie.id}
             readOnly
             />
            
             <label className="update-movie__label">Movie Name:</label>
             <input
                type="text"
                className="update-movie__input"
                name="moviename"
                value={updateMovie.moviename}
                onChange={handleChange}
             />
             
             <label className="update-movie__label">Genre:</label>
             <input
                type="text"
                className="update-movie__input"
                name="genre"
                value={updateMovie.genre}
                onChange={handleChange}
             />
             
             <label className="update-movie__label">Duration:</label>
             <input
                type="text"
                className="update-movie__input"
                name="duration"
                value={updateMovie.duration}
                onChange={handleChange}
             />
       
       <label className="update-movie__label">Language:</label> 
            <input
               type="text"
               className="update-movie__input"
               name="movieLanguage"
               value={updateMovie.movieLanguage}
               onChange={handleChange}
            />
            
            <label className="update-movie__label">Movie Image:</label>
            <input
               type="text"
               className="update-movie__input"
               name="movieImage"
               value={updateMovie.movieImage}
               onChange={handleChange}
            />
            
            <button type="submit" className="update-movie__button">Update Movie</button>
         </form>
      </div>
   );
};

export default UpdateMovie; 

