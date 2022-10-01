package com.willbsoon.gc_team1_gathering.service;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.GcGroup;
import com.willbsoon.gc_team1_gathering.model.MemberRole;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface MemberRoleService {
    List<MemberRole> findAll();
    MemberRole create(CreateAuthorityCommand command);
    Optional<MemberRole> findById(Long id);
    MemberRole modify(MemberRole memberRole, ModifyAuthorityCommand command);
    void delete(MemberRole memberRole);
}
