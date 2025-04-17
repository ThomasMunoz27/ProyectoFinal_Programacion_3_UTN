package com.ecommerce.ecommerce.Entities;

import jakarta.persistence.*;


@Entity
@Table(name = "Provincia")


public class Province extends Base {

    @Column(name = "nombre")
    private String name ;

}
