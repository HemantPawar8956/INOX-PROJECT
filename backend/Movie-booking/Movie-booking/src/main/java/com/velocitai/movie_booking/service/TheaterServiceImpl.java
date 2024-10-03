package com.velocitai.movie_booking.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.velocitai.movie_booking.dao.TheaterRepository;
import com.velocitai.movie_booking.model.Theater;


@Service
public class TheaterServiceImpl implements TheaterService {

    @Autowired
    private TheaterRepository theaterRepository;

    @Override
    public ResponseEntity<Theater> saveTheater(Theater theater) {
        Theater savedTheater = theaterRepository.save(theater);
        return new ResponseEntity<>(savedTheater, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<Theater> findTheaterById(long id) {
        Optional<Theater> theater = theaterRepository.findById(id);
        return theater.map(t -> new ResponseEntity<>(t, HttpStatus.OK))
                      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @Override
    public ResponseEntity<Theater> updateTheater(Theater theater) {
        if (theaterRepository.existsById(theater.getId())) {
            Theater updatedTheater = theaterRepository.save(theater);
            return new ResponseEntity<>(updatedTheater, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<?> deleteTheater(long id) {
        if (theaterRepository.existsById(id)) {
            theaterRepository.deleteById(id);
            return ResponseEntity.ok("Theater deleted successfully.");
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<List<Theater>> findAllTheater() {
        List<Theater> theaters = theaterRepository.findAll();
        return new ResponseEntity<>(theaters, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<Theater>> findTheaterByMovieName(String movieName) {
    	
        List<Theater> theaters = theaterRepository.findByShow_MovieName(movieName);
        
        return ResponseEntity.ok(theaters);
    }

    @Override
    public ResponseEntity<List<Theater>> findTheaterByLocation(String location) {
        List<Theater> theaters = theaterRepository.findByAddressContainingIgnoreCase(location);
        return ResponseEntity.ok(theaters);
    }
}
