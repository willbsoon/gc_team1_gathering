package com.willbsoon.gc_team1_gathering.controller;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.Authority;
import com.willbsoon.gc_team1_gathering.service.AuthorityService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
@Tag(name = "authority", description = "권한 API")
@RestController
public class AuthorityController {


    public List<Authority> findAll() {
        return null;
    }

    public Authority create(CreateAuthorityCommand command) {
        return null;
    }

    public Optional<Authority> findById(Long id) {
        return null;
    }

    public Authority modify(Authority authority, ModifyAuthorityCommand command) {
        return null;
    }

    public void delete(Authority authority) {

    }

}
