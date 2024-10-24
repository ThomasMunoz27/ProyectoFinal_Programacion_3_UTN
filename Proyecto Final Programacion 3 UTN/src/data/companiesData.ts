import { IEmpresa } from "../types/dtos/empresa/IEmpresa";
import { countriesData } from "./countriesData";


export const companiesData: IEmpresa[]=[
    {
        nombre: "Jebbs",
        razonSocial: "Vender pan",
        cuit: 28942196679,
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQJ5OTgl81AyQhX4yjtfC-DXgAzXUOUAi_w&s",
        id:1,
        sucursales:[],
        pais: countriesData[0]
    },
    {
        nombre: "Vea",
        razonSocial: "Supermercado",
        cuit: 28942196679,
        logo: "",
        id:2,
        sucursales:[],
        pais: countriesData[0]
    }
]