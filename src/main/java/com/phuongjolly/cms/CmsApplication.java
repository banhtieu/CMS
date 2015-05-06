package com.phuongjolly.cms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
public class CmsApplication {


    /**
     * The main entry
     * @param args arguments of the application
     */
    public static void main(String[] args) {
        SpringApplication.run(CmsApplication.class, args);
    }
}
