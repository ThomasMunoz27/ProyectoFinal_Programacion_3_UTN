package com.ecommerce.ecommerce.Services;

import com.ecommerce.ecommerce.Repositories.LocalityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocalityService implements BaseService<LocalityService>{

    @Autowired
    private LocalityRepository localityRepository;


    @Override
    public List<LocalityService> findAll() throws Exception {
        return List.of();
    }

    @Override
    public LocalityService finById(Long id) throws Exception {
        return null;
    }

    @Override
    public LocalityService save(LocalityService entity) throws Exception {
        return null;
    }

    @Override
    public LocalityService update(Long id, LocalityService newEntity) throws Exception {
        return null;
    }

    @Override
    public boolean delete(Long id) throws Exception {
        return false;
    }
}
