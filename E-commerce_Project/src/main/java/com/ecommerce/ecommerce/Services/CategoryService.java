package com.ecommerce.ecommerce.Services;

import com.ecommerce.ecommerce.Entities.Category;
import com.ecommerce.ecommerce.Repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements BaseService<Category>{
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> findAll() throws Exception {
        return List.of();
    }

    @Override
    public Category finById(Long id) throws Exception {
        return null;
    }

    @Override
    public Category save(Category entity) throws Exception {
        return null;
    }

    @Override
    public Category update(Long id, Category newEntity) throws Exception {
        return null;
    }

    @Override
    public boolean delete(Long id) throws Exception {
        return false;
    }
}
