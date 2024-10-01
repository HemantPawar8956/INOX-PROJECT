package com.velocitai.movie_booking.service.imp;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.velocitai.movie_booking.dao.MovieRepository;
import com.velocitai.movie_booking.model.Movie;

@Service
public class MovieService {
	private final String UPLOAD_DIR = "path/to/store/images"; // You can configure this in `application.properties`

	@Autowired
	private MovieRepository movieRepository;

	public Movie addMovie(Movie movie) {
		return movieRepository.save(movie);
	}

	
	public String storeMovieImage(MultipartFile file, long movieId) throws IOException {
               String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename(); // Generate a unique file name
               Path path = Paths.get(UPLOAD_DIR + File.separator + fileName);
              
               Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);

               // Create and save Movie entity with image
               Optional<Movie> optional = movieRepository.findById(movieId);
               System.out.println(optional.get());
               if(optional.isPresent()) {
            	 Movie movie= optional.get(); 
            	 System.out.println(path);
            	 movie.setMovieImage(fileName);
            	 movieRepository.save(movie);
               }
               
               return fileName;
               
               
	}


	public Movie findById(long id) {
		// TODO Auto-generated method stub
		 Optional<Movie> optional = movieRepository.findById(id);
		 if(optional.isPresent()) {
			return optional.get();
			
		 }
		 throw new RuntimeException();
	}
}