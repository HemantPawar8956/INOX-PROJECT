 package com.velocitai.movie_booking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.velocitai.movie_booking.model.Show;
import com.velocitai.movie_booking.service.ShowService;

@RestController
@RequestMapping("/show")
public class ShowController {
	
    @Autowired
    private ShowService showservice;
    
   

    
    @GetMapping("/byTheater")
    public ResponseEntity<List<Show>> getShowsByTheater(@RequestParam("theaterId") long theaterId) {
        return showservice.findShowByTheater(theaterId);
    }
    
    @GetMapping("/byDate")
    public ResponseEntity<List<Show>> getShowsByDate(@RequestParam("date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        return showservice.findShowByDate(date);
    }


	
	
	   @Autowired
	   ShowServiceImp showServiceImp;
	   
	   
	   @PostMapping("/save")
	   public ResponseEntity<Show> saveShow(@RequestBody Show show) {
		   
		   return showServiceImp.saveShow(show);
				   
	   }
	   
	   
	   @DeleteMapping("/delete/{id}")
	   public ResponseEntity<?> deleteShow(@PathVariable  Long id) {
		   return showServiceImp.deleteShow(id);
	   }
	   
	  
	 
}
	    
	    
	    
