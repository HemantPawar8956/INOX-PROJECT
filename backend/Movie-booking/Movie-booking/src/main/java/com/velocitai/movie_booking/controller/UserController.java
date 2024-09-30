package com.velocitai.movie_booking.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
<<<<<<< HEAD
=======
import org.springframework.web.bind.annotation.RequestBody;
>>>>>>> 5ac1b348248660da3ea1909ac94a79ac2562e287
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.velocitai.movie_booking.model.User;
import com.velocitai.movie_booking.service.imp.UserService;

import jakarta.servlet.http.HttpSession;

@RequestMapping("/users")
@RestController
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/me")
    public ResponseEntity<User> authenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        User currentUser = (User) authentication.getPrincipal();

        return ResponseEntity.ok(currentUser);
    }

    @GetMapping("/")
    public ResponseEntity<List<User>> allUsers() {
        List <User> users = userService.allUsers();

        return ResponseEntity.ok(users);
    }
    
<<<<<<< HEAD
    @PostMapping("/image")
    public ResponseEntity<?> saveimage(@RequestParam MultipartFile file , HttpSession session,int id) throws IOException {
		return userService.saveImage(file,session,id);
		
	}
    @GetMapping("/image")
    public ResponseEntity<?> findimage(long id) throws IOException {
		return userService.findImage(id);
		
	}
=======
   
>>>>>>> 5ac1b348248660da3ea1909ac94a79ac2562e287
}
