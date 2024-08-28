package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.backend.model.LoginResponse;
import com.example.backend.model.User;
import com.example.backend.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000") 
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }

    @GetMapping("/login-success")
public ResponseEntity<LoginResponse> loginSuccess(@RequestParam("email") String email, @RequestParam("password") String password) {
    User user = userService.loginUser(email, password);
    if (user != null) {
        LoginResponse response = new LoginResponse("Login successful!", user);
        return ResponseEntity.ok(response);
    } else {
        LoginResponse response = new LoginResponse("Invalid email or password", null);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
    }
   }

    
    // http://localhost:8080/api/users/all
    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }



    // after usermanage changes
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        return userService.updateUser(id, userDetails);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }

}
