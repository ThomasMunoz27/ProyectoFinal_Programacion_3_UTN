import { ISucursal } from "../types/dtos/sucursal/ISucursal";
import { adressData } from "./adressData";
import { categoriesData } from "./categoriesData";
import { companiesData } from "./companiesData";


export const sucursalsData: ISucursal[]=[
    {
        id: 1,
        nombre: "Sucursal 1 Jebbs",
        empresa: companiesData[0],
        domicilio: adressData[0],
        calle: "Bernardo Ortiz",
        latitud: 2,
        longitud: 3,
        categorias: [categoriesData[0]],
        esCasaMatriz: true,
        horarioApertura: "08:00",
        eliminado: false,
        horarioCierre: "21:00",
        logo: "Logo jebbs"
    }
]