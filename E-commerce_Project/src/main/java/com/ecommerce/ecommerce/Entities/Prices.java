package com.ecommerce.ecommerce.Entities;

import jakarta.persistence.*;


@Entity
@Table(name = "Precios")

public class Prices extends Base {

    @Column(name = "precio_compra")
    private Double pourchasePrice;
    @Column(name = "precio_venta")
    private Double salePrice;

}
