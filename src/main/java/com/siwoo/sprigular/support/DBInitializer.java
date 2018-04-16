package com.siwoo.sprigular.support;

import com.siwoo.sprigular.repository.SectionRepository;
import com.siwoo.sprigular.repository.TopicRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import javax.validation.constraints.AssertTrue;

@Slf4j
@Transactional
@Service
public class DBInitializer implements CommandLineRunner {

    @Autowired
    SectionRepository sectionRepository;
    @Autowired
    TopicRepository topicRepository;

    @Override
    public void run(String... args) throws Exception {
        sectionRepository.saveAll(FixtureFactory.sections());
        topicRepository.saveAll(FixtureFactory.angularTopics(sectionRepository.findByName("Angular")));
        log.warn(topicRepository.findAll() + "");
    }
}
