package com.siwoo.sprigular.web;

import com.siwoo.sprigular.domain.Paragraph;
import com.siwoo.sprigular.repository.ParagraphRepository;
import com.siwoo.sprigular.service.ParagraphService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest/paragraph")
public class ParagraphController {

    @Autowired
    ParagraphService paragraphService;
    @Autowired
    ParagraphRepository paragraphRepository;

    @GetMapping
    public List<Paragraph> all() {
        return paragraphRepository.findAll();
    }

    @GetMapping(value="/{topicId:\\d+}",params = "by=id")
    public List<Paragraph> byTopicId(@PathVariable long topicId) {
        return paragraphService.byTopicId(topicId);
    }
}
