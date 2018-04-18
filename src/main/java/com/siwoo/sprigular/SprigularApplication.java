package com.siwoo.sprigular;

import org.omg.CORBA.Environment;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import java.time.LocalDateTime;

@SpringBootApplication
public class SprigularApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext c = SpringApplication.run(SprigularApplication.class, args);
        System.setProperty("app.server-run",LocalDateTime.now().toString());
    }
}
