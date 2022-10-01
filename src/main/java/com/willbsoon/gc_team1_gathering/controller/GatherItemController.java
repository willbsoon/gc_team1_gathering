package com.willbsoon.gc_team1_gathering.controller;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.GatherItem;
import com.willbsoon.gc_team1_gathering.service.GatherItemService;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class GatherItemController  {

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
