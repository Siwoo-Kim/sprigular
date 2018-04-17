package com.siwoo.sprigular.service;

import com.siwoo.sprigular.domain.Paragraph;
import com.siwoo.sprigular.repository.ParagraphRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
public class ParagraphServiceImpl implements ParagraphService{

    @Autowired
    ParagraphRepository paragraphRepository;

    @Override
    public List<Paragraph> byTopicId(Long topicId) {
        List<Paragraph> paragraph = paragraphRepository.findByTopicId(topicId);
        paragraph.sort(Comparator.comparing(Paragraph::getId));
        return paragraph;
    }

}
