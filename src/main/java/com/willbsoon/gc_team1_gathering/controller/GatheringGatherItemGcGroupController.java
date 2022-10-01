package com.willbsoon.gc_team1_gathering.controller;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.GatheringGatherItemGcGroup;
import com.willbsoon.gc_team1_gathering.service.GatheringGatherItemGcGroupService;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class GatheringGatherItemGcGroupController  {
    public List<GatheringGatherItemGcGroup> findAll() {
        return null;
    }

    public GatheringGatherItemGcGroup create(CreateAuthorityCommand command) {
        return null;
    }

    public Optional<GatheringGatherItemGcGroup> findById(Long id) {
        return null;
    }

    public GatheringGatherItemGcGroup modify(GatheringGatherItemGcGroup gatheringGatherItemGcGroup, ModifyAuthorityCommand command) {
        return null;
    }

    public void delete(GatheringGatherItemGcGroup gatheringGatherItemGcGroup) {
    }
}
