package com.velocitai.movie_booking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.velocitai.movie_booking.model.Theater;
import com.velocitai.movie_booking.service.imp.TheaterService;

@RestController
@RequestMapping("/theaters")
public class TheaterController {
	@Autowired
    private TheaterService theaterService;

	
	@PostMapping("/add")
    public Theater addTheater(@RequestBody Theater theater) {
        Theater savedTheater = theaterService.addTheater(theater);
        return  savedTheater;
    }
	
	@DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteTheater(@PathVariable Long id) {
        boolean isDeleted = theaterService.deleteTheaterById(id);
        if (isDeleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); 
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
        }
    }

	 @PutMapping("/update/{id}")
	    public ResponseEntity<Theater> updateTheater(@PathVariable Long id, @RequestBody Theater updatedTheater) {
	        Theater theater = theaterService.updateTheater(id, updatedTheater);
	        if (theater != null) {
	            return new ResponseEntity<>(theater, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }
	 
	
}
