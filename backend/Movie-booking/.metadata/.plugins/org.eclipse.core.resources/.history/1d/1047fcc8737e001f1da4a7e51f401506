package com.velocitai.movie_booking.service.imp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.velocitai.movie_booking.dao.UserRepository;
import com.velocitai.movie_booking.model.User;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> allUsers() {
        List<User> users = new ArrayList<>();

        userRepository.findAll().forEach(users::add);

        return users;
    }
}
