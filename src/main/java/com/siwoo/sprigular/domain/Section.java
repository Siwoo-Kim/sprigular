package com.siwoo.sprigular.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter @ToString(exclude = "topics")
@Entity @Table(name="tbl_section")
@EqualsAndHashCode(of={"name"})
public class Section {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "section_id")
    private Long id;

    @Column(name =" section_name")
    private String name;

    @Column(name =" section_description", length = 500)
    private String description;

    @Transient
    private double rating;

    @Column(name =" section_basic_time")
    private BasicTime basicTime;

    @JsonIgnore
    @OneToMany(orphanRemoval = true, cascade = CascadeType.ALL)
    List<Topic> topics = new ArrayList<>();

    public void addTopic(Topic topic) {
        if(!this.topics.contains(topic)) {
            this.topics.add(topic);
        }
        if(topic.getSection() != this) {
            topic.setSection(this);
        }
    }
}
