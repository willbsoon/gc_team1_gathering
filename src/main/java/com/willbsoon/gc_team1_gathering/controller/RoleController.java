package com.willbsoon.gc_team1_gathering.controller;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.Role;
import com.willbsoon.gc_team1_gathering.service.RoleService;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class RoleController  {
    public List<Role> findAll(){
        return null;
    }
    public Role create(CreateAuthorityCommand command){
        return null;
    }
    public Optional<Role> findById(Long id){
        return null;
    }
    public Role modify(Role role, ModifyAuthorityCommand command){
        return null;
    }
    public void delete(Role role){
    }
}
