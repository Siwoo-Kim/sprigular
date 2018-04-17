package com.siwoo.sprigular.repository;

import com.siwoo.sprigular.domain.Paragraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ParagraphRepository extends JpaRepository<Paragraph,Long> {

    @Query("select distinct p from Paragraph p where p.topic.id = :topicId and p.parent is null")
    List<Paragraph> findByTopicId(@Param("topicId") long topicId);
}
