package com.siwoo.sprigular.domain;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.util.StringUtils;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@ToString(exclude = {"children","topic"})
@Entity @Table(name="tbl_paragraph")
@EqualsAndHashCode(of={"id","title"})
public class Paragraph {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="paragraph_id")
    private Long id;

    @Column(name="paragraph_title")
    private String title;
    @Column(name="paragraph_description",length = 2000)
    private String description;
    @Column(name="paragraph_code",length = 1000)
    private String code;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="parent_id")
    private Paragraph parent;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="topic_id")
    private Topic topic;

    @OneToMany(mappedBy = "parent",
            orphanRemoval = true,
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER)
    private List<Paragraph> children = new ArrayList<>();
//
//    public void setCode(String code) {
//        if(StringUtils.hasText(code)) {
//            this.code = code.replaceAll("\n","\\\\r\\\\n");
//            System.out.println(this.code);
//        }
//    }
    public void addChild(Paragraph child) {
        children.add(child);
        if(child.getParent()!=this){
            child.setParent(this);
            if(child.getTopic() == null && this.getTopic() != null){
                child.setTopic(this.topic);
            }
        }
    }

    public void setParent(Paragraph parent) {
        this.parent = parent;
        if(!parent.getChildren().contains(this)) {
            this.parent.addChild(this);
        }
    }
}
