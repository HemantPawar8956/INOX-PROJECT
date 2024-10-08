package com.velocitai.movie_booking.controller;


import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.velocitai.movie_booking.model.User;
import com.velocitai.movie_booking.service.UserService;

import jakarta.mail.Multipart;



@RequestMapping("/users")
@RestController
@CrossOrigin
public class UserController {
	@Autowired
	private  UserService userService; 
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
    @PutMapping("/{User}")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        try {
            ResponseEntity<User> updatedUser = userService.UpdateUser(user); 
            return updatedUser ; // Return 200 OK with the updated user   
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND); // Return 404 if user not found
        }
    } 
    @DeleteMapping("/delete")
    public ResponseEntity<User> deleteUser(@RequestBody User user) {
        return userService.deleteUser(user);  // Call the service with the User object
    } 
    @PutMapping("/{id}/image")
    public ResponseEntity<?> uploadUserImage(@RequestParam User user, @RequestParam("image") MultipartFile file) {
        try {
            return userService.saveUserImage(user, file);  
        } catch (Exception e) { 
            return new ResponseEntity<>("Error occurred while uploading image: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Value("${project.image}")
     private String path;
    @PostMapping("/upload") 
    public ResponseEntity<String>uploadImage(@RequestParam("image") MultipartFile image) throws IOException{
    	String uploadDir = "uploads/";
    	ResponseEntity <String>fileName = userService.uploadImage(path,image);
		  return ResponseEntity.ok("Image uploaded successfully :" + fileName);
    }
    
    @PostMapping("/uploads") 
    public ResponseEntity<String>uploadImages(@RequestParam MultipartFile image) throws IOException{
    	
		  return ResponseEntity.ok("Image uploaded successfully :" + image);
    }
}
