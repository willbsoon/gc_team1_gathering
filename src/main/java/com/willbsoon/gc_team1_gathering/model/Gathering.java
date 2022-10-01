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
public class Gathering {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "title")
    private String title;
    @Column(name = "title_date")
    private ZonedDateTime titleDate;
    @Column(name = "view_due_date")
    private ZonedDateTime viewDueDate;

    @ManyToOne(targetEntity = User.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne(targetEntity = GcGroup.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "gc_group_id")
    private GcGroup gcGroup;
    @Column(name = "type")
    private String type; //     예배, 모임 ...
    @Column(name = "created_at")
    private ZonedDateTime createdAt;
    @Column(name = "updated_at")
    private ZonedDateTime updatedAt;
}
