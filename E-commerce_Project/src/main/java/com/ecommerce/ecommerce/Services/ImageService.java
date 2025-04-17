package com.ecommerce.ecommerce.Services;

import com.ecommerce.ecommerce.Entities.Image;
import com.ecommerce.ecommerce.Repositories.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageService implements BaseService<Image>{

    @Autowired
    private ImageRepository imageRepository;

    @Override
    public List<Image> findAll() throws Exception {
        return List.of();
    }

    @Override
    public Image finById(Long id) throws Exception {
        return null;
    }

    @Override
    public Image save(Image entity) throws Exception {
        return null;
    }

    @Override
    public Image update(Long id, Image newEntity) throws Exception {
        return null;
    }

    @Override
    public boolean delete(Long id) throws Exception {
        return false;
    }
}
