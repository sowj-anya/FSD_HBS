package com.example.backend.model;

public class LoginResponse {
    private String message;
    private User user;

    // Default constructor
    public LoginResponse() {}

    // Parameterized constructor
    public LoginResponse(String message, User user) {
        this.message = message;
        this.user = user;
    }

    // Getter and setter for message
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    // Getter and setter for user
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
