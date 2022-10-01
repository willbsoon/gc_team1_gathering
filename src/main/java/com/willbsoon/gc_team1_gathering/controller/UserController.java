package com.willbsoon.gc_team1_gathering.controller;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.User;
import com.willbsoon.gc_team1_gathering.service.UserService;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    public List<User> findAll(){
        return null;
    }
    public User create(CreateAuthorityCommand command){
        return null;
    }
    public Optional<User> findById(Long id){
        return null;
    }
    public User modify(User user, ModifyAuthorityCommand command){
        return null;
    }
    public void delete(User user){
    }
}
