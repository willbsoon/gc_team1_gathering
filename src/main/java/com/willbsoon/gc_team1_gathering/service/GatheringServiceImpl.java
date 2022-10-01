package com.willbsoon.gc_team1_gathering.service;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.Gathering;

import java.util.List;
import java.util.Optional;

public class GatheringServiceImpl implements GatheringService{
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
