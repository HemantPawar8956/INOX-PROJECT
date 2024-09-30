package com.velocitai.movie_booking.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.velocitai.movie_booking.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

	Optional<User> findByEmail(String username);

}
