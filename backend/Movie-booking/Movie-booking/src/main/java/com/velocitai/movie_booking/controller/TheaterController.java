package com.velocitai.movie_booking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.velocitai.movie_booking.model.Theater;
import com.velocitai.movie_booking.service.imp.TheaterService;
import com.velocitai.movie_booking.util.ResponseStructure;

@RequestMapping("/Theater")
@RestController
public class TheaterController {
	
    @Autowired
    TheaterService theaterService;

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

    // Update an existing theater
    @PutMapping("/update")
    public ResponseStructure<Theater> updateTheater(@RequestParam long id) {
        return theaterService.updateTheater(id);
    }

    // Delete a theater by ID
    @DeleteMapping("/delete")
    public ResponseStructure<String> deleteTheater(@RequestParam long id) {
        return theaterService.deleteTheater(id);
    }
}
