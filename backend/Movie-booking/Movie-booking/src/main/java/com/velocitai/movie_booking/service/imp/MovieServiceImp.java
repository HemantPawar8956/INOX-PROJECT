package com.velocitai.movie_booking.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.velocitai.movie_booking.dao.MovieRepository;
import com.velocitai.movie_booking.model.Movie;
import com.velocitai.movie_booking.service.MovieService;

@Service
public class MovieServiceImp implements MovieService {
	
	@Autowired
	MovieRepository movieRepository;

	@Override
	public ResponseEntity<Movie> saveMovie(Movie movie) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<Movie> findMovieById(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<Movie> UpdateMovie(Movie movie) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> deleteMovie(Movie movie) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<List<Movie>> findAllMovie() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<List<Movie>> findMoviesByLocation(String location) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> saveMovieImage(Movie user, MultipartFile file) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> getMovieImage(long id) {
		// TODO Auto-generated method stub
		return null;
	}

}