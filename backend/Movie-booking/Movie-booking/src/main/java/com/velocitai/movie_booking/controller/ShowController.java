package com.velocitai.movie_booking.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.velocitai.movie_booking.model.Show;
import com.velocitai.movie_booking.service.ShowServiceImpl;

@RestController
@RequestMapping("/show")
public class ShowController {
	
	  @Autowired
	    private ShowServiceImpl showServiceImpl;
	    
	    // Find shows by movie name
	    @GetMapping("/movie")
	    public ResponseEntity<List<Show>> getShowsByMovieName(@RequestParam String movieName) {
	    	System.out.println("movienme:-----------------------"+movieName);
	        return showServiceImpl.findShowByMovieName(movieName);
	    }

	    // Find shows by location
	    @GetMapping("/location/{location}")
	    public ResponseEntity<List<Show>> getShowsByLocation(@PathVariable String location) {
	        return showServiceImpl.findShowByLocation(location);
	    }
	    
	    // Find all shows
	    @GetMapping("/all")
	    public ResponseEntity<List<Show>> getAllShows() {
	        return showServiceImpl.findAllShow();
	    }
}
