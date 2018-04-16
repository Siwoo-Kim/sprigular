package com.siwoo.sprigular.repository;

import com.siwoo.sprigular.domain.Section;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface SectionRepository extends JpaRepository<Section, Long> {

    @Query("select s from Section s where upper(s.name) = upper(:name)")
    Section findByName(@Param("name") String name);

    @Query("select s.name from Section s")
    List<String> findAllNames();
}
