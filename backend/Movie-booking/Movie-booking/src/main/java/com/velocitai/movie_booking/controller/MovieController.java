package com.velocitai.movie_booking.controller;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
import com.velocitai.movie_booking.service.imp.MovieService;


@RestController
@RequestMapping("/movies")
public class MovieController {
	@Autowired
	private MovieService movieService;

	
	@PostMapping("/save")
	public ResponseEntity<Movie> addMovie(@RequestBody Movie movie) {
		Movie savedMovie = movieService.addMovie(movie);

		return ResponseEntity.status(HttpStatus.CREATED).body(movie) ;
	}

	
    	@PostMapping("/upload")
        public ResponseEntity<String> uploadMovieImage(@RequestParam("movieImage") MultipartFile file, 
                                                       @RequestParam("movieid") long movieId) {
            try {
                String fileName = movieService.storeMovieImage(file, movieId);
                System.out.println(fileName);
                return ResponseEntity.ok("Image uploaded successfully: " + fileName);
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Image upload failed");
            }
        
           
    	}

    	
        @GetMapping("/image/{id}")
        public ResponseEntity<Resource> getMovieImage(@PathVariable long id) throws MalformedURLException {
        	
        	Movie movie= movieService.findById(id);
        	System.out.println(movie);
        	System.out.println(movie.getMovieImage());
            Path path = Paths.get("path/to/store/images").resolve(movie.getMovieImage());
            Resource resource = new UrlResource(path.toUri());

            if (resource.exists()) {
                return ResponseEntity.ok()
                        .contentType(MediaType.IMAGE_JPEG)
                        .body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        }

}
