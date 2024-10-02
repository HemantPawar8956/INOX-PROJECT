package com.velocitai.movie_booking.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.velocitai.movie_booking.model.Show;
import com.velocitai.movie_booking.service.imp.ShowServiceImp;

@RestController
@RequestMapping("/show")
public class ShowController {

	
	
	   @Autowired
	   ShowServiceImp showServiceImp;
	   
	   
	   @PostMapping("/save")
	   public ResponseEntity<Show> saveShow(@RequestBody Show show) {
		   
		   return showServiceImp.saveShow(show);
				   
	   }
	   
	   
	   @DeleteMapping("/deleteshow/{id}")
	   public ResponseEntity<?> deleteShow(@PathVariable  Long id) {
		   return showServiceImp.deleteShow(id);
	   }
	   
	  
	 
	   @PutMapping("/updateshow/{id}")
	    public ResponseEntity<Show> updateShow(@PathVariable long id, @RequestBody Show show) {
	       
		    show.setId(id);
	    
	        	return showServiceImp.UpdateShow(show);
	    } 
	   
}
