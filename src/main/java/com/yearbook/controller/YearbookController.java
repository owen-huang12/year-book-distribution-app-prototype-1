package com.yearbook.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class YearbookController {

    @GetMapping("/health")
    public String health() {
        return "OK";
    }

}
