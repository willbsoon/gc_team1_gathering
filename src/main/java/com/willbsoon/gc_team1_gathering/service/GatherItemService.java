package com.willbsoon.gc_team1_gathering.service;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.GatherItem;
import com.willbsoon.gc_team1_gathering.model.Gathering;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface GatherItemService {

    List<GatherItem> findAll();
    GatherItem create(CreateAuthorityCommand command);
    Optional<GatherItem> findById(Long id);
    GatherItem modify(GatherItem gatherItem, ModifyAuthorityCommand command);
    void delete(GatherItem gatherItem);
}
