package com.ecommerce.ecommerce.Entities;

import jakarta.persistence.*;


@Entity
@Table(name = "Pais")

public class Country extends Base {

    @Column(name = "nombre")
    private String name;
}
