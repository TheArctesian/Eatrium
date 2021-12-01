package repo;

import model.user;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface userRepo extends MongoRepository<user, Long> {
    @Query("{id: 1L")
    user findItemByName(Long id);
    @Query("feild{")
    public long count();
}
