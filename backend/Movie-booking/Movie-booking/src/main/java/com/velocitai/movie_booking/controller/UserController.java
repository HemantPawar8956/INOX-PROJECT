package com.velocitai.movie_booking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.velocitai.movie_booking.model.User;
import com.velocitai.movie_booking.playload.FileResponse;
import com.velocitai.movie_booking.service.imp.UserService;

import io.jsonwebtoken.io.IOException;
import jakarta.servlet.http.HttpSession;
//@RequestMapping("/image")  
@RequestMapping("/users")
@RestController
public class UserController {
    //private  final String fileService = null;
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
    @Value("${project.image}")
    private String path;
    @PostMapping("/upload")
    public ResponseEntity<String> uploadImage(@RequestParam("image") MultipartFile image) {
        String uploadDir = "uploads/";  // Set your upload directory here

        try {
            // Call the method to upload the image
            ResponseEntity <String>fileName = uploadImage(image);
            return ResponseEntity.ok("Image uploaded successfully: " + fileName);

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to upload image: " + e.getMessage());
        }
    }

	
}
