package com.velocitai.movie_booking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.velocitai.movie_booking.model.Movie;
import com.velocitai.movie_booking.model.Theater;
import com.velocitai.movie_booking.service.MovieService;
import com.velocitai.movie_booking.service.TheaterService;

@RestController
@RequestMapping("/open")

public class NoAuthController {
	
	@Autowired
	private MovieService movieService;

	@Autowired
	private TheaterService theaterService;
	//find all movie
	//find 
	@GetMapping("/movies/alls")
	public ResponseEntity<List<Movie>> findAllMovie() {

		return movieService.findAllMovie();
	}
	
	//find all theater
	//find 
	@GetMapping("cinemas/alls")
	public ResponseEntity<List<Theater>> getAllTheaters() {
		return theaterService.findAllTheater();
	}
}
