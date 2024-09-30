package com.velocitai.movie_booking.service.imp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.velocitai.movie_booking.dao.MovieRepository;
import com.velocitai.movie_booking.model.Movie;
@Service
public class MovieService {

	   @Autowired
	    private MovieRepository movieRepository;

	
    	public Movie  addMovie(Movie movie)
    	{
	        return movieRepository.save(movie);
	    }
	}

	   


