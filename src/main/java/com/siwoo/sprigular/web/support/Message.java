package com.siwoo.sprigular.web.support;

import org.springframework.context.MessageSource;
import org.springframework.context.MessageSourceResolvable;
import org.springframework.context.i18n.LocaleContextHolder;

import java.util.Locale;

public class Message implements MessageSourceResolvable {
    private static final long serialVersionUID = 1l;
    private static final Locale DEFAULT_LOCALE = Locale.US;

    private final String code;
    private final String defaultMessage;
    private final String[] codes;
    private final Object[] arguments;

    public Message(String code, Object... arguments) {
        this(code,null,arguments);
    }

    public Message(String code,String defaultMessage, Object... arguments) {
        this.code = code;
        this.defaultMessage = defaultMessage;
        this.codes = new String[]{ code };
        this.arguments = arguments;
    }

    private Locale getLocale() {
        Locale locale = LocaleContextHolder.getLocale();
        System.out.println("Current Locale: " + LocaleContextHolder.getLocale() );
        return locale == null ? DEFAULT_LOCALE : locale;
    }


    @Override
    public String[] getCodes() {
        return this.codes;
    }

    @Override
    public Object[] getArguments() {
        return this.arguments;
    }

    @Override
    public String getDefaultMessage() {
        return this.defaultMessage;
    }
}
