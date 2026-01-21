package com.yearbook.controller;

import com.yearbook.entity.StudentEntry;
import com.yearbook.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class YearbookController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/health")
    public String health() {
        return "OK";
    }

    @GetMapping("/students")
    public List<StudentEntry> getAllStudents() {
        return studentRepository.findAll();
    }

    @PostMapping("/students")
    public ResponseEntity<StudentEntry> addStudent(@RequestBody StudentEntry student) {
        StudentEntry saved = studentRepository.save(student);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }
}
