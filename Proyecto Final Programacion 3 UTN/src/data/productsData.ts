import { IProductos } from "../types/dtos/productos/IProductos";
import { alergenosData } from "./alergenosData";
import { categoriesData } from "./categoriesData";
import { imageData } from "./imageData";

export const productsData: IProductos[]=[
    {
        id: 1,
        denominacion: "Trigo",
        precioVenta: 50,
        descripcion: "Producto rural",
        categoria: categoriesData[1],
        eliminado: false,
        habilitado: true,
        codigo: "trigo",
        alergenos: [alergenosData[1]],
        imagenes: [imageData[1]]
    }
]