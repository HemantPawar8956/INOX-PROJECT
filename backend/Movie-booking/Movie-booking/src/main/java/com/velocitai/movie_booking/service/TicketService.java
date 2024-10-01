package com.velocitai.movie_booking.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.velocitai.movie_booking.model.Ticket;

@Service
public interface TicketService {

	public ResponseEntity<Ticket> saveTicket(Ticket Ticket, boolean paymentStatus);

	public ResponseEntity<?> deleteTicket(Ticket Ticket);

}
