package com.velocitai.movie_booking.model;

import java.util.List;

import org.springframework.stereotype.Component;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
@Entity
@Table(name = "tickets")
@Component
@Getter
@Setter
public class Ticket {
	
	

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "ticket_id")
		private long id;
		@Column(name = "ticket_totalprice")
		private double totalePrice;
	    @OneToOne
		private Show showTime;
		@ManyToOne(cascade = CascadeType.ALL)
		private User user;
	    @OneToMany(cascade = CascadeType.ALL)
		private List<Seat> seats;

	}