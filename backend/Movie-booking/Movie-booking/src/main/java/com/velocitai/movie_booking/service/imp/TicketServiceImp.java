package com.velocitai.movie_booking.service.imp;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.velocitai.movie_booking.dao.SeatRepository;
import com.velocitai.movie_booking.dao.TicketRepository;
import com.velocitai.movie_booking.dao.UserRepository;
import com.velocitai.movie_booking.model.Seat;
import com.velocitai.movie_booking.model.Ticket;
import com.velocitai.movie_booking.model.User;
import com.velocitai.movie_booking.service.TicketService;
@Service
public class TicketServiceImp implements TicketService {

	@Autowired
	TicketRepository ticketRepository;
	@Autowired
    SeatRepository seatRepository;
	
	@Autowired
	UserRepository userRepository;

	
	public ResponseEntity<Ticket> saveTicket(Ticket ticket, boolean paymentStatus) {
	    if (!paymentStatus) {
	        return ResponseEntity.badRequest().body(null);
	    }

	    User managedUser = userRepository.findById(ticket.getUser().getId())
	        .orElseThrow(() -> new RuntimeException("User not found"));

	    ticket.setUser(managedUser);

	    List<Seat> managedSeats = new ArrayList<>();
	    for (Seat seat : ticket.getSeats()) {
	        Seat managedSeat = seatRepository.findById(seat.getId())
	            .orElseThrow(() -> new RuntimeException("Seat not found"));
	        
	        // Check if the seat is already booked
	        if (managedSeat.isBooked()) {
	            return ResponseEntity.status(HttpStatus.CONFLICT)
	                .body(null); // Return conflict if the seat is already booked
	        }
	        
	        managedSeat.setBooked(true); // Mark the seat as booked
	        managedSeats.add(managedSeat);
	    }

	    ticket.setSeats(managedSeats);
	    Ticket savedTicket = ticketRepository.save(ticket);
	    
	    return ResponseEntity.ok(savedTicket);
	}

	
	@Override
	 public ResponseEntity<?> deleteTicket(Long id) {
		if (!ticketRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Ticket not found with id: " + id);
        }

        ticketRepository.deleteById(id);
        return ResponseEntity.ok("Ticket deleted successfully");
    }

}
