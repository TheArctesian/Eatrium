package com.controller;

import com.model.menuItem;
import com.repo.menuRepo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;

@RestController
@RequestMapping("/api/v1")
public class menuController {
    @autowired
    private menuRepo menuRepo;

    @GetMapping("/menu")
    public Iterable<menuItem> getMenu() {
        return menuRepo.findAll();
    }
}
