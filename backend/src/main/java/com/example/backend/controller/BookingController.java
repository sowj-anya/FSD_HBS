package com.example.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.backend.model.Booking;
import com.example.backend.service.BookingService;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;
    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        booking.setStatus("PAID");
        return bookingService.saveBooking(booking);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id) {
        Optional<Booking> booking = bookingService.getBookingById(id);
        return booking.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Booking>> getBookingsByUser(@PathVariable Long userId) {
    List<Booking> bookings = bookingService.getBookingsByUser(userId);
    if (bookings.isEmpty()) {
        return ResponseEntity.noContent().build(); // Respond with 204 No Content if no bookings
    }
    return ResponseEntity.ok(bookings); // Respond with 200 OK and JSON data
   }   
}
