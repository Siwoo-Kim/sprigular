package com.siwoo.sprigular.web;

import com.siwoo.sprigular.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest/topic")
public class TopicController {

    @Autowired
    TopicRepository topicRepository;

    @GetMapping(params = "request=name",value = "/category/{sectionName}")
    public List<String> allNames(@PathVariable String sectionName) {
        return topicRepository.findNamesBySectionName(sectionName);
    }

}
