package com.willbsoon.gc_team1_gathering.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HomeController {
    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }
}
