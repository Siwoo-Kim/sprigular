package com.siwoo.sprigular.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

import javax.persistence.Embeddable;
import java.time.LocalDateTime;

@Getter @ToString
@EqualsAndHashCode(of={"updated","created"})
@Embeddable
public class BasicTime {

    private LocalDateTime updated;
    private LocalDateTime created;

    public BasicTime(LocalDateTime updated, LocalDateTime created) {
        this.updated = updated;
        this.created = created;
    }

    protected BasicTime(){}

}
