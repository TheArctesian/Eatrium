package api.eatrium;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import repo.userRepo;

@SpringBootApplication
@EnableMongoRepositories
public class EatriumApplication implements CommandLineRunner {
	@Autowired
	userRepo usersRepository;


	public static void main(String[] args) {
		SpringApplication.run(EatriumApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		public void showAllUsers() {

			users.findAll().forEach(item -> System.out.println(getItemDetails(item)));
		}

		public void getUserbyName(String name,users) {
			System.out.println("Getting item by name: " + name);
			users item = users.findItemByName(name);
			System.out.println(users.getClass(item));
		}
	}

	public get


}
