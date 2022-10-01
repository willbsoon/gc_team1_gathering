package com.willbsoon.gc_team1_gathering.service;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.GatheringGatherItemGcGroup;
import com.willbsoon.gc_team1_gathering.model.GatheringGatherItemMember;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface GatheringGatherItemMemberService {

    List<GatheringGatherItemMember> findAll();
    GatheringGatherItemMember create(CreateAuthorityCommand command);
    Optional<GatheringGatherItemMember> findById(Long id);
    GatheringGatherItemMember modify(GatheringGatherItemMember gatheringGatherItemMember, ModifyAuthorityCommand command);
    void delete(GatheringGatherItemMember gatheringGatherItemMember);
}
