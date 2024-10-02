package com.velocitai.movie_booking.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.velocitai.movie_booking.dao.MovieRepository;
import com.velocitai.movie_booking.dao.ShowRepository;
import com.velocitai.movie_booking.dao.TheaterRepository;
import com.velocitai.movie_booking.model.Movie;
import com.velocitai.movie_booking.model.Show;
import com.velocitai.movie_booking.model.Theater;

@Service
public class ShowServiceImpl implements ShowService{
	
	  @Autowired
	    private ShowRepository showRepository;
	  
	  @Autowired
	    private MovieRepository movieRepository;
	  
	  @Autowired
	  private TheaterRepository theaterRepository;
	    
	    // Find shows by movie name
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
	    
	  // Find shows by theater location (assuming Theater entity has a location field)
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
	public ResponseEntity<Show> saveShow(Show show) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<Show> findShowById(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<Show> UpdateShow(Show show) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> deleteShow(Show show) {
		// TODO Auto-generated method stub
		return null;
	}
	  // Method to find all shows
    public ResponseEntity<List<Show>> findAllShow() {
        List<Show> shows = showRepository.findAll();
        return ResponseEntity.ok(shows);
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
