package com.willbsoon.gc_team1_gathering.service;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.GatherItem;

import java.util.List;
import java.util.Optional;

public class GatherItemServiceImpl implements GatherItemService {

    public List<GatherItem> findAll(){
        return null;
    }
    public GatherItem create(CreateAuthorityCommand command){
        return null;
    }
    public Optional<GatherItem> findById(Long id){
        return null;
    }
    public GatherItem modify(GatherItem gatherItem, ModifyAuthorityCommand command){
        return null;
    }
    public void delete(GatherItem gatherItem){

    }
}
