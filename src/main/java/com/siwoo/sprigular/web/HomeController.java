package com.siwoo.sprigular.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.LocaleResolver;
import java.util.Locale;

@Controller
@RequestMapping("/")
public class HomeController {

    @Autowired LocaleResolver localeResolver;
    @GetMapping
    public String home(Locale locale) {
        System.out.println(locale);
        return "index";
    }

    @ResponseBody
    @GetMapping("/rest/locale")
    public String locale(Locale locale) {
        return locale.getLanguage();
    }


}
