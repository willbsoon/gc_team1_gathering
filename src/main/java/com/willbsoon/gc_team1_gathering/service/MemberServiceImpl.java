package com.willbsoon.gc_team1_gathering.service;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.Member;

import java.util.List;
import java.util.Optional;

public class MemberServiceImpl implements MemberService{
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
