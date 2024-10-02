package com.velocitai.movie_booking.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.velocitai.movie_booking.dao.SeatRepository;
import com.velocitai.movie_booking.model.Seat;

@Service
public class SeatServiceImplimentation implements SeatService {


    @Autowired
    private SeatRepository seatRepository;

    // Update an existing seat
    public ResponseEntity<Seat> UpdateSeat(Seat seat) {
        Optional<Seat> existingSeat = seatRepository.findById(seat.getId());
        
        if (existingSeat.isPresent()) {
            Seat updatedSeat = seatRepository.save(seat);  
            return ResponseEntity.ok(updatedSeat);
        } else {
            return ResponseEntity.notFound().build();  
        }
    }

	
	  
    public ResponseEntity<?> deleteSeat(long id) {
        Optional<Seat> existingSeat = seatRepository.findById(id);
        
        if (existingSeat.isPresent()) {
            seatRepository.deleteById(id);  
            return ResponseEntity.ok().build();  
        } else {
            return ResponseEntity.notFound().build();  
        }
    }

	

}
