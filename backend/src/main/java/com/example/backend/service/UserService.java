package com.example.backend.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        return userRepository.save(user);
    }
     
    public User loginUser(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    } 

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    // public User loginUser(String email, String password) {
    //     User user = userRepository.findByEmailAndPassword(email, password);
    //     return user;
    // }

    


        // Method to update a user
        public User updateUser(Long id, User userDetails) {
            Optional<User> optionalUser = userRepository.findById(id);
    
            if (!optionalUser.isPresent()) {
                throw new ResourceNotFoundException("User not found with id: " + id);
            }
    
            User user = optionalUser.get();
            user.setName(userDetails.getName());
            user.setEmail(userDetails.getEmail());
            // Add other fields to update here
    
            return userRepository.save(user);
        }
    
        // Method to delete a user
        public void deleteUser(Long id) {
            Optional<User> optionalUser = userRepository.findById(id);
    
            if (!optionalUser.isPresent()) {
                throw new ResourceNotFoundException("User not found with id: " + id);
            }
    
            userRepository.deleteById(id);
        }

}

