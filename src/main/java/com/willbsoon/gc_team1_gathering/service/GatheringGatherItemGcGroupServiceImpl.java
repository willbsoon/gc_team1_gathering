package com.willbsoon.gc_team1_gathering.service;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.GatheringGatherItemGcGroup;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public class GatheringGatherItemGcGroupServiceImpl implements GatheringGatherItemGcGroupService {
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
