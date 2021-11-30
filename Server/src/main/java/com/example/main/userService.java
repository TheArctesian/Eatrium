package com.example.main;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class userService {
    public List<user> getUser() {
        return List.of(
                new user(
                        1L,
                        "edwin lagos",
                        12,
                        "elag@gmail.com"
                )
        );
    }
}
