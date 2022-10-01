package com.willbsoon.gc_team1_gathering.service;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.Gathering;
import com.willbsoon.gc_team1_gathering.model.GatheringGatherItemMember;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface GatheringService {

    List<Gathering> findAll();
    Gathering create(CreateAuthorityCommand command);
    Optional<Gathering> findById(Long id);
    Gathering modify(Gathering gathering, ModifyAuthorityCommand command);
    void delete(Gathering gathering);
}
