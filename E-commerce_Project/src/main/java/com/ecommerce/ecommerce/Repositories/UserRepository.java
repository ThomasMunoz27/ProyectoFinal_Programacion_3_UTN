package com.ecommerce.ecommerce.Repositories;

import com.ecommerce.ecommerce.Entities.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends BaseRepository<User, Long> {
}
