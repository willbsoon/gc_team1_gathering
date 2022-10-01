package com.willbsoon.gc_team1_gathering.controller;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.Gathering;
import com.willbsoon.gc_team1_gathering.service.GatheringService;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class GatheringController {
   public  List<Gathering> findAll(){
       return null;
   }
   public  Gathering create(CreateAuthorityCommand command){
       return null;
   }
   public  Optional<Gathering> findById(Long id){
       return null;
   }
   public  Gathering modify(Gathering gathering, ModifyAuthorityCommand command){
       return null;
   }
    public void delete(Gathering gathering){

    }
}
