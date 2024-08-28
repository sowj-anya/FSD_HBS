package com.example.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Hall;

public interface HallRepository extends JpaRepository<Hall, Long> {
}
