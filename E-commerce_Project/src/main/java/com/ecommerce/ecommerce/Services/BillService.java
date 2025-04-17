package com.ecommerce.ecommerce.Services;

import com.ecommerce.ecommerce.Entities.Bill;
import com.ecommerce.ecommerce.Repositories.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BillService implements BaseService<Bill>{
    @Autowired
    private BillRepository billRepository;

    @Override
    public List<Bill> findAll() throws Exception {
        return List.of();
    }

    @Override
    public Bill finById(Long id) throws Exception {
        return null;
    }

    @Override
    public Bill save(Bill entity) throws Exception {
        return null;
    }

    @Override
    public Bill update(Long id, Bill newEntity) throws Exception {
        return null;
    }

    @Override
    public boolean delete(Long id) throws Exception {
        return false;
    }
}
