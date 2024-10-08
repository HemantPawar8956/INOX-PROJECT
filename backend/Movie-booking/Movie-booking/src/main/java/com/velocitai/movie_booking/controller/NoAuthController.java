package com.velocitai.movie_booking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.velocitai.movie_booking.model.Movie;
import com.velocitai.movie_booking.model.Theater;
import com.velocitai.movie_booking.service.MovieService;
import com.velocitai.movie_booking.service.TheaterService;

@RestController
@RequestMapping("/open")
@CrossOrigin
public class NoAuthController {

	@Autowired
	private MovieService movieService;

	@Autowired
	private TheaterService theaterService;

	@DeleteMapping("/deletee")
	public ResponseEntity<?> deleteMovie(@RequestBody Movie movie) {

		return movieService.deleteMovie(movie);
	}

	@PostMapping("/savee")
	public ResponseEntity<Theater> addTheater(@RequestBody Theater theater) {
		return theaterService.saveTheater(theater);
	}

	@PostMapping("/saves")
	public ResponseEntity<Movie> addMovie(@RequestBody Movie movie) {

		return movieService.saveMovie(movie);
	}

	@PutMapping("/updates")
	public ResponseEntity<Movie> updateMovie(@RequestBody Movie movie) {

		return movieService.UpdateMovie(movie);
	}

	// findAllTheaters
	@GetMapping("/cinemas/alls")
	public ResponseEntity<List<Theater>> getAllTheaters() {
		return theaterService.findAllTheater();
	}

	@GetMapping("/movies/alls")
	public ResponseEntity<List<Movie>> findAllMovie() {

		return movieService.findAllMovie();
	}

}
