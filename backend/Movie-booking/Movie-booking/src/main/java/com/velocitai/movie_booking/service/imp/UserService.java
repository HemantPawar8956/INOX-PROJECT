package com.velocitai.movie_booking.service.imp;


import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.velocitai.movie_booking.dao.UserRepository;
import com.velocitai.movie_booking.model.User;



import java.io.File;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path; 

@Service
public class UserService { 
	@Autowired
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public List<User> allUsers() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    } 
    public String uploadImage(String path , MultipartFile file) throws IOException {
    	//File name 
    	String name = file.getOriginalFilename();
    	//Fullpath
    	String filePath = File.separator+name;
    	//create folder if not created
    	File f = new File(path);
    	if(!f.exists()) {
    		f.mkdir();
    	} 
    	//file copy
    	Files.copy(file.getInputStream(), Path.of(filePath));
    	return name;
    }
}
