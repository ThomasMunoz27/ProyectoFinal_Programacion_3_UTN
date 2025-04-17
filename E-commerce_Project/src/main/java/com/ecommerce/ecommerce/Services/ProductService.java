package com.ecommerce.ecommerce.Services;

import com.ecommerce.ecommerce.Entities.Product;
import com.ecommerce.ecommerce.Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements BaseService<Product>{

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> findAll() throws Exception {
        return List.of();
    }

    @Override
    public Product finById(Long id) throws Exception {
        return null;
    }

    @Override
    public Product save(Product entity) throws Exception {
        return null;
    }

    @Override
    public Product update(Long id, Product newEntity) throws Exception {
        return null;
    }

    @Override
    public boolean delete(Long id) throws Exception {
        return false;
    }
}
