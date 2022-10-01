package com.willbsoon.gc_team1_gathering.controller;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.Member;
import com.willbsoon.gc_team1_gathering.service.MemberService;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class MemberController  {
    public List<Member> findAll(){
        return null;
    }
    public Member create(CreateAuthorityCommand command){
        return null;
    }
    public Optional<Member> findById(Long id){
        return null;
    }
    public Member modify(Member member, ModifyAuthorityCommand command){
        return null;
    }
    public void delete(Member member){
    }
}
