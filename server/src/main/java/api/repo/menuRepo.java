package api.repo;

import api.model.menuItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface menuRepo extends MongoRepository<menuItem, Long> {
}
