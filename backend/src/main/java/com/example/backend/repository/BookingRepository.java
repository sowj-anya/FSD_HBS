package com.example.backend.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {    
    List<Booking> findByUserId(Long userId);
}
