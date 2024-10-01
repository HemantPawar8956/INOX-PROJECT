package com.velocitai.movie_booking.service.imp;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.velocitai.movie_booking.dao.UserRepository;
import com.velocitai.movie_booking.model.User;

import jakarta.servlet.http.HttpSession;

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


	public ResponseEntity<?> saveImage(MultipartFile file, HttpSession session,long id) throws IOException {
//		User u=userRepository.findById(id).get();
		if(file.isEmpty()) {
//			u.setImage(file.getName());
//			u.setPhoto(file.getBytes());
//			userRepository.save(u);
			
//			String path=session.getServletContext().getRealPath("/")+"WEB-INF"+File.separator+"resources"+File.separator+"image"+File.separator+user.getName()+user.getEmail()+".jpeg";
//				System.out.println(path);
//			FileOutputStream fo=new FileOutputStream(path);
//			fo.write(file.getBytes());
		}
		return null;
	}

	public ResponseEntity<?> findImage(long id) {
		User u=userRepository.findById(id).get();
		
		return ResponseEntity.ok(u.getPhoto());
	}
	

	
}
