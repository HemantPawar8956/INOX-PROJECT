package com.velocitai.movie_booking.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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

	
	public ResponseEntity<Ticket> saveTicket(Ticket ticket) {
	   

		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        User currentUser = (User) authentication.getPrincipal();

	    ticket.setUser(currentUser);

	   List<Seat> seatInfo = ticket.getSeatInfo();
	   for(Seat seat:seatInfo) {
		   seat.setBooked(true);
		   
	   }
	    seatRepository.saveAll(seatInfo);
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
