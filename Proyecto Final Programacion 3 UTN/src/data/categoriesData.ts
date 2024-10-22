import { ICategorias } from "../types/dtos/categorias/ICategorias";
import { productsData } from "./productsData";
import { sucursalsData } from "./sucursalsData";


export const categoriesData: ICategorias[]=[
    {
        id: 1,
        denominacion: "Farináceos",
        eliminado: false,
        sucursales: [sucursalsData[1]],
        subCategorias: [],
        categoriaPadre: null,
        articulos: productsData[1]
    }
]