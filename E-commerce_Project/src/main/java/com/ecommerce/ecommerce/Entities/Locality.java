package com.ecommerce.ecommerce.Entities;

import jakarta.persistence.*;


@Entity
@Table(name = "Localidad")

public class Locality extends Base {

    @Column(name = "nombre")
    private String name;
}
