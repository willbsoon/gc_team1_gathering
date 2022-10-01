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
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(targetEntity = GcGroup.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "gc_group_id")
    private GcGroup gcGroup;

    @Column(name = "name")
    private String name;

    @JoinColumn(name = "member_status")
    private String memberStatus;

}
