package com.willbsoon.gc_team1_gathering.service;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.GatherValueSample;
import com.willbsoon.gc_team1_gathering.model.GcGroup;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface GcGroupService {
    List<GcGroup> findAll();
    GcGroup create(CreateAuthorityCommand command);
    Optional<GcGroup> findById(Long id);
    GcGroup modify(GcGroup gcGroup, ModifyAuthorityCommand command);
    void delete(GcGroup gcGroup);
}
