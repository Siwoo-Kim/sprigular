package com.siwoo.sprigular.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Getter @Setter @ToString(exclude = "section")
@Entity @Table(name="tbl_topic")
public class Topic {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="topic_id")
    private Long id;

    @Column(name="topic_name")
    private String name;

    private BasicTime basicTime;

    @Column(name="topic_description",length = 2000)
    private String description;

    @Transient
    private Long sectionId;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="section_id")
    private Section section;

    public void setSection(Section section) {
        this.section = section;
        if(!this.section.getTopics().contains(this)) {
            this.section.addTopic(this);
        }
    }
}
