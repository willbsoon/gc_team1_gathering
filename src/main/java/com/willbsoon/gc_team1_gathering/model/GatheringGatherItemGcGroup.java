package com.willbsoon.gc_team1_gathering.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class GatheringGatherItemGcGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(targetEntity = GatheringGatherItem.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "gathering_gather_item_id")
    private GatheringGatherItem gatheringGatherItem;

    @ManyToOne(targetEntity = GcGroup.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "gc_group_id")
    private GcGroup gcGroup;

    @Column(name = "value")
    private String value;
}
