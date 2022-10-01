package com.willbsoon.gc_team1_gathering.service;

import com.willbsoon.gc_team1_gathering.command.CreateAuthorityCommand;
import com.willbsoon.gc_team1_gathering.command.ModifyAuthorityCommand;
import com.willbsoon.gc_team1_gathering.model.MemberRole;

import java.util.List;
import java.util.Optional;

public class MemberRoleServiceImpl implements MemberRoleService {
    public List<MemberRole> findAll(){
        return null;
    }
    public MemberRole create(CreateAuthorityCommand command){
        return null;
    }
    public Optional<MemberRole> findById(Long id){
        return null;
    }
    public MemberRole modify(MemberRole memberRole, ModifyAuthorityCommand command){
        return null;
    }
    public void delete(MemberRole memberRole){

    }
}
