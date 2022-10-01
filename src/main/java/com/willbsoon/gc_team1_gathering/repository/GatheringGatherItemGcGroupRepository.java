package com.willbsoon.gc_team1_gathering.repository;

import com.willbsoon.gc_team1_gathering.model.GatheringGatherItemGcGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GatheringGatherItemGcGroupRepository extends JpaRepository<GatheringGatherItemGcGroup, Long> {
}
