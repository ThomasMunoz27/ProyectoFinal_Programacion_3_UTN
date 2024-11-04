import { FC } from "react"
import { ICategorias } from "../../../../../types/dtos/categorias/ICategorias"
import styles from "./CardCategory.module.css";

interface ICategoryCard {
    category : ICategorias;
}

const CategoryCard : FC<ICategoryCard> = ({category}) => {

    return(
        <div className={styles.containerPrincipal}>
            <div>
                <h4>{category.denominacion}</h4>
            </div>
            <div>
                <h5>Subcategorias</h5>
                <div>
                    Articulos
                </div>
            </div>

        </div>
    )
}
export default CategoryCard