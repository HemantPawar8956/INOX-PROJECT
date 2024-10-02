package com.velocitai.movie_booking.controller;

import java.net.MalformedURLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.velocitai.movie_booking.model.Movie;
import com.velocitai.movie_booking.service.MovieService;



@RestController
@RequestMapping("/movies")
public class MovieController {
	@Autowired
	private MovieService movieService;

	
	@PostMapping("/save")
	public ResponseEntity<Movie> addMovie(@RequestBody Movie movie) {
		return null;
	}

	
    	@PostMapping("/upload")
        public ResponseEntity<String> uploadMovieImage(@RequestParam("movieImage") MultipartFile file, 
                                                       @RequestParam("movieid") long movieId) {
          return null;
           
    	}

    	
        @GetMapping("/image/{id}")
        public ResponseEntity<Resource> getMovieImage(@PathVariable long id) throws MalformedURLException {
        	
        	return null;
        }
        
      

}
