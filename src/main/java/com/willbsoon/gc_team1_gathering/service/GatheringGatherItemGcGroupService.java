package com.willbsoon.gc_team1_gathering.service;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.Authority;
import com.willbsoon.gc_team1_gathering.model.GatheringGatherItemGcGroup;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface GatheringGatherItemGcGroupService {

    List<GatheringGatherItemGcGroup> findAll();
    GatheringGatherItemGcGroup create(CreateAuthorityCommand command);
    Optional<GatheringGatherItemGcGroup> findById(Long id);
    GatheringGatherItemGcGroup modify(GatheringGatherItemGcGroup gatheringGatherItemGcGroup, ModifyAuthorityCommand command);
    void delete(GatheringGatherItemGcGroup gatheringGatherItemGcGroup);
}
