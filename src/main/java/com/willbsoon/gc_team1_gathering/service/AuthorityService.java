package com.willbsoon.gc_team1_gathering.service;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.Authority;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface AuthorityService {

    List<Authority> findAll();
    Authority create(CreateAuthorityCommand command);
    Optional<Authority> findById(Long id);
    Authority modify(Authority authority, ModifyAuthorityCommand command);
    void delete(Authority authority);
}
