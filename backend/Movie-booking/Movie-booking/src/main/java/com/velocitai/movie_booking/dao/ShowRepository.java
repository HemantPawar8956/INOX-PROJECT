package com.velocitai.movie_booking.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.velocitai.movie_booking.model.Movie;
import com.velocitai.movie_booking.model.Show;
import com.velocitai.movie_booking.model.Theater;

public interface ShowRepository extends JpaRepository<Show, Long>{

	List<Show> findByMovie(Movie movie);
	
	
	List<Show> findByTheater(Theater address);




}
