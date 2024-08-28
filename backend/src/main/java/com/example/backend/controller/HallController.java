package com.example.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.backend.model.Hall;
import com.example.backend.service.HallService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/halls")
public class HallController {

    @Autowired
    private HallService hallService;

    @GetMapping
    public List<Hall> getAllHalls() {
        return hallService.getAllHalls();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Hall> getHallById(@PathVariable Long id) {
        Optional<Hall> hall = hallService.getHallById(id);
        return hall.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Hall> addHall(@RequestBody Hall hall) {
        Hall newHall = hallService.addHall(hall);
        // return ResponseEntity.status(HttpStatus.CREATED).body(newHall);
        return new ResponseEntity<>(newHall, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Hall> updateHall(@PathVariable Long id, @RequestBody Hall hall) {
        if (!hallService.getHallById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        hall.setId(id);
        Hall updatedHall = hallService.updateHall(hall);
        return ResponseEntity.ok(updatedHall);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHall(@PathVariable Long id) {
        if (!hallService.getHallById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        hallService.deleteHall(id);
        return ResponseEntity.noContent().build();
    }
}
