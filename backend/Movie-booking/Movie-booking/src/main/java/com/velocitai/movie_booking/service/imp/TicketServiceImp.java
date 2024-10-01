package com.velocitai.movie_booking.service.imp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.velocitai.movie_booking.dao.TheaterRepository;
import com.velocitai.movie_booking.model.Ticket;
import com.velocitai.movie_booking.service.TicketService;
@Service
public class TicketServiceImp implements TicketService {

	@Autowired
	TheaterRepository theaterRepository;
	
	@Override
	public ResponseEntity<Ticket> saveTicket(Ticket Ticket,boolean paymentStatus) {
		/**
		 * booking ticket after payment is sucessfull true 
		 * add ticket and change seat status to false 
		 * in frontend only true status can be booked
		 */
		return null;
	}

	@Override
	public ResponseEntity<?> deleteTicket(Ticket Ticket) {
		// TODO Auto-generated method stub
		return null;
	}

}
