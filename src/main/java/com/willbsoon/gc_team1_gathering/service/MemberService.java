package com.willbsoon.gc_team1_gathering.service;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.Member;
import com.willbsoon.gc_team1_gathering.model.MemberRole;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface MemberService {
    List<Member> findAll();
    Member create(CreateAuthorityCommand command);
    Optional<Member> findById(Long id);
    Member modify(Member member, ModifyAuthorityCommand command);
    void delete(Member member);
}
