package api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@EnableMongoRepositories
public class EatriumApplication {
	public static void main(String[] args) {
		SpringApplication.run(EatriumApplication.class, args);
	}

	@RequestMapping("/")
	public String home() {
		return "Welcome to Eatrium";
	}
}

	