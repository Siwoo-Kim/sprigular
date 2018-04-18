package com.siwoo.sprigular.web.support;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class CookieResolverImpl implements CookieResolver{


    @Override
    public Cookie createCookieOrReplace(
            String cookieName,
            String cookieValue,
            HttpServletRequest request, HttpServletResponse response) {
        Cookie cookie = new Cookie(cookieName, null);
        if(hasCookie(request)) {
            List<Cookie> cookies = getCookies(request);
            System.out.println(cookies);
            Optional<Cookie> optional = byName(cookies, cookieName);
            if(optional.isPresent()) {
                cookie = optional.get();
                log.warn("Cookie value :" +cookieValue);
                if (StringUtils.hasText(cookieValue) && !cookieValue.equals("undefined") && !cookieValue.equals("null")) {
                    setValue(cookie, cookieValue);
                    log.warn(cookie + " is created");
                }
            }
        } else {
            log.warn("No cookies at all");
        }
        setWeekMaxAge(cookie);
        response.addCookie(cookie);
        return cookie;
    }

    @Override
    public List<Cookie> getCookies(HttpServletRequest request) {
        if(hasCookie(request)) {
            return Arrays.asList(request.getCookies());
        } else {
            return null;
        }
    }

    @Override
    public boolean hasCookie(HttpServletRequest request) {
        return request.getCookies() != null;
    }

    @Override
    public Optional<Cookie> byName(List<Cookie> cookies, String cookieName) {
        return cookies.stream()
                .filter(_cookie -> _cookie.getName().equals(cookieName))
                .findAny();
    }

    @Override
    public void setWeekMaxAge(Cookie cookie) {
        cookie.setMaxAge(60 * 60 * 24 * 7);
    }

    @Override
    public void setValue(Cookie cookie, String value){
        try {
            cookie.setValue(URLEncoder.encode( value, "UTF-8" ));
        }catch (UnsupportedEncodingException e) {
            log.error(e.getMessage());
        }
    }

}
