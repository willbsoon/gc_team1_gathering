package com.willbsoon.gc_team1_gathering.repository;

import com.willbsoon.gc_team1_gathering.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
}
