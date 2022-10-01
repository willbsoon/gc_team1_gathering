package com.willbsoon.gc_team1_gathering.service;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.GatherItem;
import com.willbsoon.gc_team1_gathering.model.GatherValueSample;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface GatherValueSampleService {
    List<GatherValueSample> findAll();
    GatherValueSample create(CreateAuthorityCommand command);
    Optional<GatherValueSample> findById(Long id);
    GatherValueSample modify(GatherValueSample gatherValueSample, ModifyAuthorityCommand command);
    void delete(GatherValueSample gatherValueSample);
}
