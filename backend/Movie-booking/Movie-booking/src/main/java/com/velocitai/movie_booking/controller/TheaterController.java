package com.velocitai.movie_booking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.velocitai.movie_booking.model.Theater;
import com.velocitai.movie_booking.service.TheaterService;

@RestController
@RequestMapping("/theaters")
public class TheaterController {
	@Autowired
    private TheaterService theaterService;


	    // Get theaters by address
	    @GetMapping("/gettheaters/{address}")
	    public ResponseEntity<List<Theater>> searchByAddress(@PathVariable String address) {
	        return theaterService.findTheaterByLocation(address);
	    }
	    
	    // Add a new theater
	    @PostMapping("/add")
	    public ResponseEntity<Theater> addTheater(@RequestBody Theater theater) {
	        return theaterService.saveTheater(theater);
	    }


	@DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTheater(@PathVariable Long id) {
        return theaterService.deleteTheater(id);
        
    }

	 @PutMapping("/update/{id}")
	    public ResponseEntity<Theater> updateTheater( @RequestBody Theater theater) {
	        
	            return theaterService.updateTheater(theater);
	        
	    }
	 
	
}
