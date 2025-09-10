package com.JavaFullstack.Docker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DockerApplication {

    @RequestMapping("/")
    public String home(){
        return "hello docker world";
    }

	public static void main(String[] args) {
//		SpringApplication.run(DockerApplication.class, args);
        Environment env = SpringApplication.run(DockerApplication.class, args).getEnvironment();
        String appName = env.getProperty("spring.application.name");
        String port = env.getProperty("server.port");

        System.out.println("----------------------------------------");
        System.out.println("  Application: " + appName);
        System.out.println("  Running on port: " + port);
        System.out.println("  http://localhost:" + port);
        System.out.println("----------------------------------------");

	}

}
