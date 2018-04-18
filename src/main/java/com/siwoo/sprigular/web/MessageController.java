package com.siwoo.sprigular.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.LocaleResolver;

import java.util.Locale;

@RestController
@RequestMapping("/rest/message")
public class MessageController {

    @Autowired
    MessageSource messageSource;
    @Autowired
    LocaleResolver localeResolver;

    @GetMapping(params = "by=code")
    public String message(@RequestParam String code,
                          @RequestParam Locale locale) {
        return messageSource.getMessage(code,null,locale);
    }
}
