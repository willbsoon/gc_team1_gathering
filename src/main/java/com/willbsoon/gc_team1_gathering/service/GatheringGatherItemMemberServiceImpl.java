package com.willbsoon.gc_team1_gathering.service;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.GatheringGatherItemMember;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public class GatheringGatherItemMemberServiceImpl implements GatheringGatherItemMemberService{

   public  List<GatheringGatherItemMember> findAll(){
       return null;
   }
   public  GatheringGatherItemMember create(CreateAuthorityCommand command){
       return null;
   }
    public Optional<GatheringGatherItemMember> findById(Long id){
       return null;
    }
   public  GatheringGatherItemMember modify(GatheringGatherItemMember gatheringGatherItemMember, ModifyAuthorityCommand command){
       return null;
   }
    public void delete(GatheringGatherItemMember gatheringGatherItemMember){
    }
}
