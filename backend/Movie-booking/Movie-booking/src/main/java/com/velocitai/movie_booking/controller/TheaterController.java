package com.velocitai.movie_booking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.velocitai.movie_booking.model.Theater;
import com.velocitai.movie_booking.service.imp.TheaterService;
import com.velocitai.movie_booking.util.ResponseStructure;

@RestController
@RequestMapping("/theaters")
public class TheaterController {
	@Autowired
    private TheaterService theaterService;

	
	 

	    // Get theaters by address
	    @GetMapping("/gettheaters/{address}")
	    public ResponseStructure<List<Theater>> searchByAddress(@PathVariable String address) {
	        return theaterService.FindTheaterByLocation(address);
	    }
	    
	    // Add a new theater
	    @PostMapping("/add")
	    public ResponseStructure<Theater> addTheater(@RequestBody Theater theater) {
	        return theaterService.addTheater(theater);
	    }


	   
	
	
	
	@DeleteMapping("/delete/{id}")
    public ResponseStructure<String> deleteTheater(@PathVariable Long id) {
        return theaterService.deleteTheater(id);
        
    }

	 @PutMapping("/update/{id}")
	    public ResponseEntity<Theater> updateTheater( @RequestBody Theater updatedTheater) {
	        Theater theater = theaterService.updateTheater( updatedTheater);
	        if (theater != null) {
	            return new ResponseEntity<>(theater, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }
	 
	
}
