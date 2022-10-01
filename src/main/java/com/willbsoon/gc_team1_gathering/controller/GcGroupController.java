package com.willbsoon.gc_team1_gathering.controller;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.GcGroup;
import com.willbsoon.gc_team1_gathering.service.GcGroupService;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class GcGroupController  {
    public List<GcGroup> findAll(){
        return null;
    }
    public GcGroup create(CreateAuthorityCommand command){
        return null;
    }
    public Optional<GcGroup> findById(Long id){
        return null;
    }
    public GcGroup modify(GcGroup gcGroup, ModifyAuthorityCommand command){
        return null;
    }
    public void delete(GcGroup gcGroup){
    }
}
