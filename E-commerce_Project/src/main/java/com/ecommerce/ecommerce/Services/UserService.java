package com.ecommerce.ecommerce.Services;

import com.ecommerce.ecommerce.Entities.User;
import com.ecommerce.ecommerce.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements BaseService<User>{
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> findAll() throws Exception {
        return List.of();
    }

    @Override
    public User finById(Long id) throws Exception {
        return null;
    }

    @Override
    public User save(User entity) throws Exception {
        return null;
    }

    @Override
    public User update(Long id, User newEntity) throws Exception {
        return null;
    }

    @Override
    public boolean delete(Long id) throws Exception {
        return false;
    }
}
