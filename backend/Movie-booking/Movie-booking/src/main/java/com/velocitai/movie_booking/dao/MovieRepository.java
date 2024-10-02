package com.velocitai.movie_booking.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.velocitai.movie_booking.model.Movie;
@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

	Movie findByMoviename(String moviename);

	
	

}