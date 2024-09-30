package com.velocitai.movie_booking.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.velocitai.movie_booking.model.Theater;

public interface TheaterRepository extends JpaRepository<Theater, Long>{
	
	 List<Theater> findByAddressContainingIgnoreCase(String location);

	List<Theater> findByAddress(String address);
	
	 @Query("SELECT t FROM Theater t WHERE LOWER(t.address) LIKE LOWER(CONCAT('%', :address, '%'))")
	    List<Theater> searchByAddress(@Param("address") String address);
}
