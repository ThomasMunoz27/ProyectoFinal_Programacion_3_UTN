package com.ecommerce.ecommerce.Repositories;

import com.ecommerce.ecommerce.Entities.Product;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends BaseRepository<Product, Long>{
}
