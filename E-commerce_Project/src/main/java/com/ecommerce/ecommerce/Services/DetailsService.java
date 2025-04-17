package com.ecommerce.ecommerce.Services;

import com.ecommerce.ecommerce.Entities.Details;
import com.ecommerce.ecommerce.Repositories.DetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DetailsService implements BaseService<Details>{

    @Autowired
    private DetailsRepository detailsRepository;

    @Override
    public List<Details> findAll() throws Exception {
        return List.of();
    }

    @Override
    public Details finById(Long id) throws Exception {
        return null;
    }

    @Override
    public Details save(Details entity) throws Exception {
        return null;
    }

    @Override
    public Details update(Long id, Details newEntity) throws Exception {
        return null;
    }

    @Override
    public boolean delete(Long id) throws Exception {
        return false;
    }
}
