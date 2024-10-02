package com.velocitai.movie_booking.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.velocitai.movie_booking.model.Show;

public interface ShowRepository extends JpaRepository<Show, Long>{
	
    List<Show> findByTheaterId(long theaterId);
    List<Show> findByDate(LocalDate date);


}
