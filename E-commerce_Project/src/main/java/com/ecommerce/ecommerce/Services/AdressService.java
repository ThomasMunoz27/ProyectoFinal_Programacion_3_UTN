package com.ecommerce.ecommerce.Services;

import com.ecommerce.ecommerce.Entities.Adress;
import com.ecommerce.ecommerce.Repositories.AdressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdressService implements BaseService<Adress>{

    @Autowired
    private AdressRepository adressRepository;

    @Override
    public List<Adress> findAll() throws Exception {
        return List.of();
    }

    @Override
    public Adress finById(Long id) throws Exception {
        return null;
    }

    @Override
    public Adress save(Adress entity) throws Exception {
        return null;
    }

    @Override
    public Adress update(Long id, Adress newEntity) throws Exception {
        return null;
    }

    @Override
    public boolean delete(Long id) throws Exception {
        return false;
    }
}
