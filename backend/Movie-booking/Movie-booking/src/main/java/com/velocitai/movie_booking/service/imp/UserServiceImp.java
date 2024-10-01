package com.velocitai.movie_booking.service.imp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.velocitai.movie_booking.dao.UserRepository;
import com.velocitai.movie_booking.model.User;
import com.velocitai.movie_booking.service.UserService;

@Service
public class UserServiceImp  implements UserService{
    @Autowired
    private  UserRepository userRepository;

    public List<User> allUsers() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

	@Override
	public ResponseEntity<User> findUserById(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<User> UpdateUser(User user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> deleteUser(User user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> saveUserImage(User user, MultipartFile file) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> getUserImage() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        User currentUser = (User) authentication.getPrincipal();

        /**
         * write logic to find image using currentuser
         */
		return null;
	}

 
}
