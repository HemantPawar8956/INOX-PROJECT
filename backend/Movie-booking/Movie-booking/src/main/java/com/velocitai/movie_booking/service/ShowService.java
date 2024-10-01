package com.velocitai.movie_booking.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.velocitai.movie_booking.model.Show;

@Service
public interface ShowService {

	public ResponseEntity<Show> saveShow(Show show);

	public ResponseEntity<Show> findShowById(long id);

	public ResponseEntity<Show> UpdateShow(Show show);

	public ResponseEntity<?> deleteShow(Show show);

	public ResponseEntity<List<Show>> findAllShow();

	public ResponseEntity<List<Show>> findShowByMovieName(String movieName);

	public ResponseEntity<List<Show>> findShowByLocation(String location);

	public ResponseEntity<List<Show>> findShowByDate(LocalDate date);

	public ResponseEntity<List<Show>> findShowByTheater(long theaterId);

}
