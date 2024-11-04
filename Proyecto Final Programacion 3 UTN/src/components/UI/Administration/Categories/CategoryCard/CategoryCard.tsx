import { FC } from "react"
import { ICategorias } from "../../../../../types/dtos/categorias/ICategorias"
import styles from "./CardCategory.module.css";

interface ICategoryCard {
    category : ICategorias;
}

const CategoryCard : FC<ICategoryCard> = ({category}) => {

    return(
        <div className={styles.containerPrincipal}>
            <div className={styles.containerTitle}>
                <h1>{category.denominacion}</h1>
            </div>
            <div className={styles.containerBody}>
                <h2>Subcategorias</h2>
                {category.subCategorias && category.subCategorias.length > 0 ? (
                    <ul className={styles.subcategoryList}>
                    {category.subCategorias.map((subCategory) => (
                        <li key={subCategory.id} className={styles.subcategoryItem}>
                            {subCategory.denominacion}
                        </li>
                    ))}
                </ul>
                ) : (
                    <ul>
                        <li>No hay subcategorias</li>
                    </ul>
                    
                )}
            </div>

        </div>
    )
}
export default CategoryCard