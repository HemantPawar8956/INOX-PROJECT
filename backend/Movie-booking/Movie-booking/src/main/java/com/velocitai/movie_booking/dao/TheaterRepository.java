package com.velocitai.movie_booking.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.velocitai.movie_booking.model.Theater;

public interface TheaterRepository extends JpaRepository<Theater, Long>{

}
