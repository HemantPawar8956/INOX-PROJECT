package com.velocitai.movie_booking.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.velocitai.movie_booking.model.Ticket;
import com.velocitai.movie_booking.service.TicketService;

@RestController
@RequestMapping("/ticket")

public class TicketController {
	
	@Autowired
	TicketService ticketService;
	
	@PostMapping("/save")
    public ResponseEntity<Ticket> saveTicket(@RequestBody Ticket ticket) {
        return ticketService.saveTicket(ticket);
    }

	@DeleteMapping("/deleteTicket/{id}")
    public ResponseEntity<?> deleteTicket(@PathVariable Long id) {
        return ticketService.deleteTicket(id);
    }
	
	@GetMapping("/all")
    public ResponseEntity<?> findAllTicket() {
        return ticketService.findAllTickets();
    }

}
