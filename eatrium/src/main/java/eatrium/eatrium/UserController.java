package eatrium.eatrium;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserRepository userRepository; //init user repository

    @GetMapping("/")
    public List<User> getAllUser() { //get all users
        return userRepository.findAll();
    }

    @GetMapping("/{UserId}")
    public User getUserByUserId(@PathVariable String UserId) { //get user by user id
        return userRepository.findById(UserId).orElse(null);
    }

    @PostMapping(value="/addUserItem")
    public User postUser(@RequestBody User User) { //add user
        
        return userRepository.save(User);
    }

    @PutMapping(value="/{UserId}")
    public User putUser(@RequestBody User User) { //update user
        User oldUser = userRepository.findById(User.getUserId()).orElse(null);
        oldUser.setAddress(User.getAddress());
        userRepository.save(oldUser);
        return oldUser;
    }

    @DeleteMapping(value="/{UserId}") //delete user
    public String deleteUser(@PathVariable String UserId) {
        userRepository.deleteById(UserId);
        return "Deleted" + UserId;
    }
}
