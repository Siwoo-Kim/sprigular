package com.siwoo.sprigular.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/property")
public class PropertySourceController{

    @Autowired
    Environment environment;

    @GetMapping
    public String property(@RequestParam String key) {
        return environment.getProperty(key);
    }
}
