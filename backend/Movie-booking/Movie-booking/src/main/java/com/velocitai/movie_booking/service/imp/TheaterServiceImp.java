package com.velocitai.movie_booking.service.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.velocitai.movie_booking.dao.TheaterRepository;
import com.velocitai.movie_booking.model.Theater;
import com.velocitai.movie_booking.service.TheaterService;

@Service
public class TheaterServiceImp implements TheaterService {

	@Autowired
	TheaterRepository theaterRepository;
	
	

	@Override
	public ResponseEntity<Theater> findTheaterById(long id) {
		 Optional<Theater> theater = theaterRepository.findById(id);
	        return theater.map(t -> new ResponseEntity<>(t, HttpStatus.OK))
	                      .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
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
		 List<Theater> theaters = theaterRepository.findByAddress(location);

		    if (theaters.isEmpty()) {
		        
		        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		    }

		    return ResponseEntity.ok(theaters);
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
	public ResponseEntity<Theater> updateTheater(Theater Theater) {
		 if (theaterRepository.existsById(Theater.getId())) {
	            Theater updatedTheater = theaterRepository.save(Theater);
	            return new ResponseEntity<>(updatedTheater, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	}





	@Override
	public ResponseEntity<Theater> saveTheater(Theater Theater) {
		Theater savedTheater = theaterRepository.save(Theater);
        return new ResponseEntity<>(savedTheater, HttpStatus.CREATED);
	}
	
}

    


