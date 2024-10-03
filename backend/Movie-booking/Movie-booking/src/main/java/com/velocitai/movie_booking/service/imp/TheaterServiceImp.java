package com.velocitai.movie_booking.service.imp;

import java.util.List;

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
		// TODO Auto-generated method stub
		return null;
	}

	

	

	@Override
	public ResponseEntity<List<Theater>> findAllTheater() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<List<Theater>> findTheaterByMovieName(String movieName) {
		// TODO Auto-generated method stub
		return null;
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
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<Theater> updateTheater(Theater Theater) {
		// TODO Auto-generated method stub
		return null;
	}





	@Override
	public ResponseEntity<Theater> saveTheater(Theater Theater) {
		// TODO Auto-generated method stub
		return null;
	}
	
}

    


