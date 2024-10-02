package com.velocitai.movie_booking.service.imp;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.velocitai.movie_booking.dao.SeatRepository;
import com.velocitai.movie_booking.dao.ShowRepository;
import com.velocitai.movie_booking.model.Show;
import com.velocitai.movie_booking.service.ShowService;

@Service
public class ShowServiceImp implements ShowService {

	@Autowired
	ShowRepository showRepository;
	
	@Autowired
	SeatRepository seatRepository;
	
	@Override
	public ResponseEntity<Show> saveShow(Show show) {
		// TODO Auto-generated method stub
		/**
		 * write a logic to save show and add 50 seats for this A1-10 assign show object
		 * and theater object from front end use show.getMovie();
		 */
		return null;
	}

	@Override
	public ResponseEntity<Show> findShowById(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<Show> UpdateShow(Show show) {

		return null;
	}

	@Override
	public ResponseEntity<?> deleteShow(Show show) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<List<Show>> findAllShow() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<List<Show>> findShowByMovieName(String movieName) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<List<Show>> findShowByLocation(String location) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<List<Show>> findShowByDate(LocalDate date) {
	    List<Show> shows = showRepository.findByDate(date);
	    if (shows.isEmpty()) {
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }
	    return new ResponseEntity<>(shows, HttpStatus.OK);
	}




	

	@Override
    public ResponseEntity<List<Show>> findShowByTheater(long theaterId) {
        List<Show> shows = showRepository.findByTheaterId(theaterId);
        if (shows.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(shows, HttpStatus.OK);
    }

}
