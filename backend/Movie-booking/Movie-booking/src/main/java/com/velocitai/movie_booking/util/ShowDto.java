package com.velocitai.movie_booking.util;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import com.velocitai.movie_booking.model.Seat;
import com.velocitai.movie_booking.model.Show;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ShowDto  {

	 private Long id;
	    private LocalTime time;  // Show time
	    private LocalDate date;  // Date of the show
	    private List<Seat> seats;  // List of seats (optional)

	    // Constructor that takes a Show entity and maps fields
	    public ShowDto(Show show) {
	        this.id = show.getId();
	        this.time = show.getTime();
	        this.date = show.getDate();
	        this.seats = show.getSeat();
	    }
}
