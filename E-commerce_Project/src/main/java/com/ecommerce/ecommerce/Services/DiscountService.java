package com.ecommerce.ecommerce.Services;

import com.ecommerce.ecommerce.Entities.Discount;
import com.ecommerce.ecommerce.Repositories.DiscountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiscountService implements BaseService<Discount>{

    @Autowired
    private DiscountRepository discountRepository;

    @Override
    public List<Discount> findAll() throws Exception {
        return List.of();
    }

    @Override
    public Discount finById(Long id) throws Exception {
        return null;
    }

    @Override
    public Discount save(Discount entity) throws Exception {
        return null;
    }

    @Override
    public Discount update(Long id, Discount newEntity) throws Exception {
        return null;
    }

    @Override
    public boolean delete(Long id) throws Exception {
        return false;
    }
}
