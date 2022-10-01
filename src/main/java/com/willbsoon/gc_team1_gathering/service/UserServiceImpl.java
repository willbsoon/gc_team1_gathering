package com.willbsoon.gc_team1_gathering.service;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.User;

import java.util.List;
import java.util.Optional;

public class UserServiceImpl implements UserService {
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
