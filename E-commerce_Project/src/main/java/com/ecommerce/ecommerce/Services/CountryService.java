package com.ecommerce.ecommerce.Services;

import com.ecommerce.ecommerce.Entities.Country;
import com.ecommerce.ecommerce.Repositories.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService implements BaseService<Country>{
    @Autowired
    private CountryRepository countryRepository;

    @Override
    public List<Country> findAll() throws Exception {
        return List.of();
    }

    @Override
    public Country finById(Long id) throws Exception {
        return null;
    }

    @Override
    public Country save(Country entity) throws Exception {
        return null;
    }

    @Override
    public Country update(Long id, Country newEntity) throws Exception {
        return null;
    }

    @Override
    public boolean delete(Long id) throws Exception {
        return false;
    }
}
