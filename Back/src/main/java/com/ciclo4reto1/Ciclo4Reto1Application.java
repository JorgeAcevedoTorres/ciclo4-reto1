package com.ciclo4reto1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@EntityScan(basePackages = "com.ciclo4reto1")
@SpringBootApplication
public class Ciclo4Reto1Application {
	public static void main(String[] args) {
		SpringApplication.run(Ciclo4Reto1Application.class, args);
        }
}
