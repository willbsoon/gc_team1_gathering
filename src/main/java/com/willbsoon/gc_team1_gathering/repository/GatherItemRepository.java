package com.willbsoon.gc_team1_gathering.repository;

import com.willbsoon.gc_team1_gathering.model.GatherItem;
import com.willbsoon.gc_team1_gathering.model.Gathering;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GatherItemRepository extends JpaRepository<GatherItem, Long> {
}
