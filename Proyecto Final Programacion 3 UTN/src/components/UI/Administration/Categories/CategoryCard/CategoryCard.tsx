import { FC } from "react"
import { ICategorias } from "../../../../../types/dtos/categorias/ICategorias"
interface ICategoryCard {
    category : ICategorias;
}

const CategoryCard : FC<ICategoryCard> = ({category}) => {

    return(
        <div>
            <div>
                <h1>{category.denominacion}</h1>
            </div>
            <div>
                <h2>Subcategorias</h2>
                <div>
                    Articulos
                </div>
            </div>

        </div>
    )

}

export default CategoryCard