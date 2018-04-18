package com.siwoo.sprigular.web.support;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

public interface CookieResolver {
    Cookie createCookieOrReplace(
            String cookieName,
            String cookieValue,
            HttpServletRequest request, HttpServletResponse response);

    List<Cookie> getCookies(HttpServletRequest request);

    boolean hasCookie(HttpServletRequest request);

    Optional<Cookie> byName(List<Cookie> cookies, String cookieName);

    void setWeekMaxAge(Cookie cookie);

    void setValue(Cookie cookie, String value);
}
