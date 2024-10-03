package com.velocitai.movie_booking.service.imp;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.velocitai.movie_booking.dao.MovieRepository;
import com.velocitai.movie_booking.dao.SeatRepository;
import com.velocitai.movie_booking.dao.ShowRepository;
import com.velocitai.movie_booking.dao.TheaterRepository;
import com.velocitai.movie_booking.model.Movie;
import com.velocitai.movie_booking.model.Show;
import com.velocitai.movie_booking.model.Theater;
import com.velocitai.movie_booking.service.ShowService;

@Service
public class ShowServiceImp implements ShowService {

	  @Autowired
	    private ShowRepository showRepository;
	  
	  @Autowired
	    private MovieRepository movieRepository;
	  
	  @Autowired
	  private TheaterRepository theaterRepository;
	
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
    public ResponseEntity<List<Show>> findShowByMovieName(String moviename) {
    	List<Movie> movies = movieRepository.findAll();
    	System.out.println("allmovies");
    	System.out.println(movies);
    	Movie movie = movieRepository.findByMoviename(moviename);
    	System.out.println("movie00");
    	System.out.println(movie);
        List<Show> shows = showRepository.findByMovie(movie);
        System.out.println("vhghgh");
        System.out.println(shows);
        if (shows.isEmpty()) {
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }
	    return new ResponseEntity<>(shows, HttpStatus.OK);
	
    }


    @Override
    public ResponseEntity<List<Show>> findShowByLocation(String location) {
    	Theater theater = theaterRepository.findByAddress(location) ;
        List<Show> shows = showRepository.findByTheater(theater);
        if (shows.isEmpty()) {
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }
	    return new ResponseEntity<>(shows, HttpStatus.OK);
	

    }

	@Override
	public ResponseEntity<List<Show>> findShowByDate(LocalDate date) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<List<Show>> findShowByTheater(long theaterId) {
		// TODO Auto-generated method stub
		return null;
	}

}
