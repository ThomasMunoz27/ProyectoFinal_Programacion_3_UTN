package com.ecommerce.ecommerce.Services;

import com.ecommerce.ecommerce.Entities.Prices;
import com.ecommerce.ecommerce.Repositories.PricesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PricesService implements BaseService<Prices>{

    @Autowired
    private PricesRepository pricesRepository;

    @Override
    public List<Prices> findAll() throws Exception {
        return List.of();
    }

    @Override
    public Prices finById(Long id) throws Exception {
        return null;
    }

    @Override
    public Prices save(Prices entity) throws Exception {
        return null;
    }

    @Override
    public Prices update(Long id, Prices newEntity) throws Exception {
        return null;
    }

    @Override
    public boolean delete(Long id) throws Exception {
        return false;
    }
}
