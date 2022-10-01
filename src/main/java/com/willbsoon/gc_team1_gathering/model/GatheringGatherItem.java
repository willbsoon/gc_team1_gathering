package com.willbsoon.gc_team1_gathering.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class GatheringGatherItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(targetEntity = Gathering.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "gathering_id")
    private Gathering gathering;

    @ManyToOne(targetEntity = GatherItem.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "gathering_item_io")
    private GatherItem gatherItem;

    @Column(name = "type")
    private String type;
}
