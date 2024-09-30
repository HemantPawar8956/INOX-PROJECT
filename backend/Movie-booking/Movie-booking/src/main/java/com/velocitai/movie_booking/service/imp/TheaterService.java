package com.velocitai.movie_booking.service.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.velocitai.movie_booking.dao.TheaterRepository;
import com.velocitai.movie_booking.model.Theater;
import com.velocitai.movie_booking.util.ResponseStructure;

@Service
public class TheaterService {
	
    @Autowired
    TheaterRepository theaterRepo;

    // Find theaters by address
    public ResponseStructure<List<Theater>> FindTheaterByLocation(String address) {
        List<Theater> list = theaterRepo.searchByAddress(address);

        ResponseStructure<List<Theater>> responseStructure = new ResponseStructure<>();
        
        if (list.isEmpty()) {
            responseStructure.setStatus_code(404);
            responseStructure.setMessage("No theaters found for the given location.");
        } else {
            responseStructure.setStatus_code(200);
            responseStructure.setMessage("Theaters found successfully.");
            responseStructure.setData(list);
        }

        return responseStructure;
    }

    // Add new theater
    public ResponseStructure<Theater> addTheater(Theater theater) {
        Theater savedTheater = theaterRepo.save(theater);
        
        ResponseStructure<Theater> responseStructure = new ResponseStructure<>();
        responseStructure.setStatus_code(201);
        responseStructure.setMessage("Theater added successfully.");
        responseStructure.setData(savedTheater);
        
        return responseStructure;
    }

    // Update existing theater
    public ResponseStructure<Theater> updateTheater(long id) {
        Optional<Theater> optionalTheater = theaterRepo.findById(id);
        ResponseStructure<Theater> responseStructure = new ResponseStructure<>();
        
        if (optionalTheater.isPresent()) {
            Theater existingTheater = optionalTheater.get();
            
            // Update theater details
            existingTheater.setName(existingTheater.getName());
            existingTheater.setAddress(existingTheater.getAddress());
            
            Theater updatedTheater = theaterRepo.save(existingTheater);
            
            responseStructure.setStatus_code(200);
            responseStructure.setMessage("Theater updated successfully.");
            responseStructure.setData(updatedTheater);
        } else {
            responseStructure.setStatus_code(404);
            responseStructure.setMessage("Theater not found.");
        }
        
        return responseStructure;
    }

    // Delete theater by ID
    public ResponseStructure<String> deleteTheater(long id) {
        Optional<Theater> optionalTheater = theaterRepo.findById(id);
        ResponseStructure<String> responseStructure = new ResponseStructure<>();
        
        if (optionalTheater.isPresent()) {
            theaterRepo.deleteById(id);
            responseStructure.setStatus_code(200);
            responseStructure.setMessage("Theater deleted successfully.");
            responseStructure.setData("Deleted Theater ID: " + id);
        } else {
            responseStructure.setStatus_code(404);
            responseStructure.setMessage("Theater not found.");
            responseStructure.setData(null);
        }
        
        return responseStructure;
    }
}
