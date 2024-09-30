package com.velocitai.movie_booking.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.velocitai.movie_booking.model.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
