package repo;

import model.order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface orderRepo extends MongoRepository <order, Long> {
}
