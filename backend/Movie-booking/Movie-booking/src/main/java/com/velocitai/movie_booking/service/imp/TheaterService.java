package com.velocitai.movie_booking.service.imp;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.velocitai.movie_booking.dao.TheaterRepository;
import com.velocitai.movie_booking.model.Show;
import com.velocitai.movie_booking.model.Theater;

@Service
public class TheaterService {

	@Autowired
    private TheaterRepository theaterRepository;
	

	
	public Theater addTheater(Theater theater) {
		
		
		return theaterRepository.save(theater);
	}


	public boolean deleteTheaterById(Long id) {
		if (theaterRepository.existsById(id)) 
		{  
			 theaterRepository.deleteById(id);
              return true;
        }
		else 
		{
            return false; 
        }
		
	}


	public Theater updateTheater(Long id, Theater updatedTheater) {
		 Optional<Theater> optional = theaterRepository.findById(id);

		    if (optional.isPresent()) {
		        Theater existingTheater =optional.get();
		        existingTheater.setName(updatedTheater.getName());
		        existingTheater.setAddress(updatedTheater.getAddress());
		    
		        return theaterRepository.save(existingTheater);
		    } else {
		        return null; // Theater not found
		    }
		
	}

}
