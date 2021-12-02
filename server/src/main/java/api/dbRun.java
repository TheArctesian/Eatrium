package api;

import api.model.menuItem;
import api.model.user;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import api.repo.menuRepo;
import api.repo.orderRepo;
import api.repo.userRepo;

@ComponentScan("model")
@EnableMongoRepositories
public class dbRun implements CommandLineRunner {
    private userRepo userRepository;
    private orderRepo orderRepository;
    private menuRepo menuRepository;

    public dbRun(userRepo userRepository, orderRepo orderRepository, menuRepo menuRepository) {
        this.userRepository = userRepository;
        this.orderRepository = orderRepository;
        this.menuRepository = menuRepository;
    }
    @Override
    public void run(String... args) throws Exception {
        user edwin = new user(
                "edwin lagos",
                "edwinIsABeast@bing.com"
        );

        user joshua = new user(
                "joshua chadnov",
                "chadnov@thechad.com"
        );

        menuItem cheese = new menuItem(
                "cheese",
                "it tastes fine",
                9
        );
        menuItem almond = new menuItem(
                "almond",
                "it tastes crunch",
                9
        );

        //clear repos
        this.menuRepository.deleteAll();
        this.orderRepository.deleteAll();
        this.userRepository.deleteAll();

        //save repos
        this.userRepository.save(edwin);
        this.userRepository.save(joshua);
        this.menuRepository.save(cheese);
        this.menuRepository.save(almond);
        System.out.println("Saved to db");
//        List<user> userList = Arrays.asList(edwin, joshua);
//        this.userRepository.save(userList);
//        List<menuItem> menuItemList = Arrays.asList(cheese, almond);
//        this.menuRepository.save(menuItemList);
    }
}
