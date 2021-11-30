package com.repo;

import com.model.menuItem;
import org.springframework.stereotype.Repository;
//need to import JPaRepo as well

@Repository
public interface menuRepo extends JpaRepository<menuItem, Integer> {

}