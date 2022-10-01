package com.willbsoon.gc_team1_gathering.service;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.Role;
import com.willbsoon.gc_team1_gathering.model.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {
    List<User> findAll();
    User create(CreateAuthorityCommand command);
    Optional<User> findById(Long id);
    User modify(User user, ModifyAuthorityCommand command);
    void delete(User user);
}
