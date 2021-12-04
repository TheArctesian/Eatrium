package eatrium.eatrium;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

// init
@Repository
public interface UserRepository extends MongoRepository<User, String> {
}