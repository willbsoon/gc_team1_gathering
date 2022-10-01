package com.willbsoon.gc_team1_gathering.controller;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.GatherValueSample;
import com.willbsoon.gc_team1_gathering.service.GatherValueSampleService;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class GatherValueSampleController  {
    public List<GatherValueSample> findAll(){
        return null;
    }
    public GatherValueSample create(CreateAuthorityCommand command){
        return null;
    }
    public Optional<GatherValueSample> findById(Long id){
        return null;
    }
    public GatherValueSample modify(GatherValueSample gatherValueSample, ModifyAuthorityCommand command){
        return null;
    }
    public void delete(GatherValueSample gatherValueSample){
    }
}
