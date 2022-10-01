package com.willbsoon.gc_team1_gathering.model;

import lombok.*;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @ManyToOne(targetEntity = Member.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;
    @Column(name = "mobile_phone")
    private String mobilePhone;
    @Column(name = "kakao_token")
    private String kakaoToken;
    @Column(name = "registered_at")
    private ZonedDateTime registeredAt;
}
