package com.example.main;

import com.model.menuItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SpringBootApplication
@RestController
public class Api {
    private final userService userService;

    @Autowired
    public Api(com.example.main.userService userService) {
        this.userService = userService;
    }

    public static void main(String[] args) {
        SpringApplication.run(Api.class, args);
    }

    @GetMapping("/")
    public String ping() {
        return "Server is working";
    }

    @GetMapping("/user")
    public List<user> getUser() {
        return userService.getUser();
    }

    @GetMapping("/menuItem")
    public List<menuItem> getemenuItem() {
        return List.of(
                new menuItem(
                        1L,
                        "Bacon and Eggs",
                        "a slice of bacon over bread and eggs",
                        12.9,
                        "breakfast"
                )
        );
    }

    @GetMapping("/order")
    public List<order> getorder() {
        return List.of(
                new order(
                        1L,
                        1L,
                        1L
                )
        );
    }
}
