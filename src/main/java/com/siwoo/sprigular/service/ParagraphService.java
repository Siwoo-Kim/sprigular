package com.siwoo.sprigular.service;

import com.siwoo.sprigular.domain.Paragraph;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface ParagraphService {

    @Transactional(readOnly = true)
    List<Paragraph> byTopicId(Long topicId);
}
