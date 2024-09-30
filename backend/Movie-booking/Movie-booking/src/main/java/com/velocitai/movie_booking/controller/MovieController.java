package com.velocitai.movie_booking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.velocitai.movie_booking.model.Movie;
import com.velocitai.movie_booking.service.imp.MovieService;

@RestController
@RequestMapping("/movies")
public class MovieController {
	@Autowired
    private MovieService movieService;

    @PostMapping("/add")
    public Movie addMovie(@RequestBody Movie movie) {
        Movie savedMovie = movieService.addMovie(movie);
        return savedMovie;
    }

}
