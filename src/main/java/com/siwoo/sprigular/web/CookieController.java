package com.siwoo.sprigular.web;

import com.siwoo.sprigular.web.support.CookieResolver;
import com.siwoo.sprigular.web.support.CookieResolverImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rest/cookie")
public class CookieController {

    @Autowired
    CookieResolver cookieResolver;

    @GetMapping(value = "/{name}") // 패스 변수가 쿠키의 이름이 된다.
    public Cookie get(@PathVariable String name,
                      @RequestParam(required = false) String value, // 요청된 값이 없다면 기존 쿠키 값을 보내고, 있다면 값을 덮어쓴다
                      HttpServletRequest request,
                      HttpServletResponse response){
        System.out.println("Cookie name: " + name);
        System.out.println("Cookie name: " + value);
      return cookieResolver.createCookieOrReplace(name,value,request,response);
    }
}
