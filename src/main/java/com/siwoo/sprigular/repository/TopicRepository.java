package com.siwoo.sprigular.repository;

import com.siwoo.sprigular.domain.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TopicRepository extends JpaRepository<Topic, Long> {

    @Query("select distinct t.name from Topic t where upper(t.section.name) = upper(:name)")
    List<String> findNamesBySectionName(@Param("name") String name);

    @Query("select t from Topic t where upper(t.name) = upper(:name)")
    Topic findByName(@Param("name") String name);

}
