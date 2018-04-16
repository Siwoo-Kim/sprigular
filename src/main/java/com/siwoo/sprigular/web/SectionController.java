package com.siwoo.sprigular.web;

import com.siwoo.sprigular.domain.Section;
import com.siwoo.sprigular.repository.SectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest/section")
public class SectionController {

    @Autowired
    SectionRepository sectionRepository;

    @GetMapping(params = "request=name")
    public List<String> allNames() {
        return sectionRepository.findAllNames();
    }


    @GetMapping(value = "/{name}",params = "by=name")
    public Section byName(@PathVariable String name) {
        return sectionRepository.findByName(name);
    }
}
