package com.willbsoon.gc_team1_gathering.service;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.GcGroup;

import java.util.List;
import java.util.Optional;

public class GcGroupServiceImpl implements GcGroupService{
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
