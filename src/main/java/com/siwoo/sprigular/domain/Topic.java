package com.siwoo.sprigular.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.util.StringUtils;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter @ToString(exclude = {"section","paragraphs"})
@EqualsAndHashCode(of={"name"})
@Entity @Table(name="tbl_topic")
public class Topic {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="topic_id")
    private Long id;

    @Column(name="topic_name")
    private String name;

    @Column(name="topic_description",length = 2000)
    private String description;

    @Max(5) @Min(0)
    @Column(name="topic_rating")
    private Integer rating = 0;

    @Max(5) @Min(0)
    @Column(name="topic_difficulty")
    private Integer difficulty = 0;

    private BasicTime basicTime;

    @JsonIgnore
    @OneToMany(mappedBy = "topic",orphanRemoval = true, cascade = CascadeType.ALL)
    List<Paragraph> paragraphs = new ArrayList<>();

    @Transient
    private Long sectionId;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="section_id")
    private Section section;


    public void addParagraph(Paragraph paragraph) {
        paragraphs.add(paragraph);
        if(paragraph.getTopic()!=this) {
            paragraph.setTopic(this);
        }
    }

    public void setSection(Section section) {
        this.section = section;
        if(!this.section.getTopics().contains(this)) {
            this.section.addTopic(this);
        }
    }
}
