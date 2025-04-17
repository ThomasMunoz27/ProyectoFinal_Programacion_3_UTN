package com.ecommerce.ecommerce.Services;

import com.ecommerce.ecommerce.Entities.Province;
import com.ecommerce.ecommerce.Repositories.ProvinceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProvinceService implements BaseService<Province>{

    @Autowired
    private ProvinceRepository provinceRepository;

    @Override
    public List<Province> findAll() throws Exception {
        return List.of();
    }

    @Override
    public Province finById(Long id) throws Exception {
        return null;
    }

    @Override
    public Province save(Province entity) throws Exception {
        return null;
    }

    @Override
    public Province update(Long id, Province newEntity) throws Exception {
        return null;
    }

    @Override
    public boolean delete(Long id) throws Exception {
        return false;
    }
}
