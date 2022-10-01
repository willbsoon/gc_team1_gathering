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
public class GatheringGatherItemMember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(targetEntity = GatheringGatherItem.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "gathering_gather_item_id")
    private GatheringGatherItem gatheringGatherItem;

    @ManyToOne(targetEntity = Member.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Column(name = "value")
    private String value;
}
