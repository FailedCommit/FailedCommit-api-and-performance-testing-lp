package com.twa.flights.api.provider.alpha;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@ComponentScan(basePackages = { "com.twa.flights.api" })
public class AlphaProviderApp implements WebMvcConfigurer {

    public static void main(String[] args) {
        SpringApplication.run(AlphaProviderApp.class, args);
    }
}
