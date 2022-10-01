package com.willbsoon.gc_team1_gathering.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {
    @GetMapping("/")
    public String index(){
        return "index.html";
    }
}
