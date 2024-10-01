package com.velocitai.movie_booking.service.imp;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.velocitai.movie_booking.dao.UserRepository;
import com.velocitai.movie_booking.model.User;

import jakarta.servlet.http.HttpSession;

@Service
public class UserService {
    @Autowired
    private  UserRepository userRepository;

    public List<User> allUsers() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    public String uploadImage(String path, MultipartFile file) throws IOException {
        // File name
        String name = file.getOriginalFilename();
        // Fullpath
        String filePath = File.separator + name;
        // create folder if not created
        File f = new File(path);
        if (!f.exists()) {
            f.mkdir();
        }
        // file copy
        Files.copy(file.getInputStream(), Path.of(filePath));
        return name;
    }

    public ResponseEntity<?> saveImage(MultipartFile file, HttpSession session, long id) throws IOException {
        // User u=userRepository.findById(id).get();
        if (file.isEmpty()) {
            // u.setImage(file.getName());
            // u.setPhoto(file.getBytes());
            // userRepository.save(u);

            // String
            // path=session.getServletContext().getRealPath("/")+"WEB-INF"+File.separator+"resources"+File.separator+"image"+File.separator+user.getName()+user.getEmail()+".jpeg";
            // System.out.println(path);
            // FileOutputStream fo=new FileOutputStream(path);
            // fo.write(file.getBytes());
        }
        return null;
    }

    public ResponseEntity<?> findImage(long id) {
        User u = userRepository.findById(id).get();

        return ResponseEntity.ok(u.getPhoto());
    }

}
