package com.velocitai.movie_booking.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.velocitai.movie_booking.model.Seat;
import com.velocitai.movie_booking.service.imp.SeatServiceImp;


@RestController
@RequestMapping("/seats")
public class SeatController {

    @Autowired
    private SeatServiceImp seatServiceImp;

    // Update an existing seat
    @PutMapping("/update")
    public ResponseEntity<Seat> updateSeat(@RequestBody Seat seat) {
        return seatServiceImp.UpdateSeat(seat);
    }

    // Delete a seat by ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteSeat(@PathVariable long id) {
        return seatServiceImp.deleteSeat(id);
    }
}
