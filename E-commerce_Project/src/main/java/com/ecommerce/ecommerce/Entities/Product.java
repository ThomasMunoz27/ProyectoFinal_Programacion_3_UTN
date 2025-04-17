package com.ecommerce.ecommerce.Entities;

import com.ecommerce.ecommerce.Entities.enums.ProductType;
import jakarta.persistence.*;


@Entity
@Table(name = "Productos")


public class Product extends Base {

    @Column(name = "nombre")
    private String name;
    @Column(name = "categoria")
    private Category Category;
    @Column(name = "tipo_producto")
    private ProductType productType;
    @Column(name = "sexo")
    private String sex;
}
