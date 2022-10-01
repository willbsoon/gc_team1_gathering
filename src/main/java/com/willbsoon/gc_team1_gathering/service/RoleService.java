package com.willbsoon.gc_team1_gathering.service;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.Member;
import com.willbsoon.gc_team1_gathering.model.Role;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface RoleService {
    List<Role> findAll();
    Role create(CreateAuthorityCommand command);
    Optional<Role> findById(Long id);
    Role modify(Role role, ModifyAuthorityCommand command);
    void delete(Role role);
}
