import { FC, useEffect, useState } from "react"
import { ICategorias } from "../../../../../types/dtos/categorias/ICategorias"
import styles from "./CardCategory.module.css";
import { categoryService } from "../../../../../Services/categoryServices";

interface ICategoryCard {
    category : ICategorias;
}

const CategoryCard : FC<ICategoryCard> = ({category}) => {

    const [subCategories, setSubCategories] = useState<ICategorias[]>([]);
    
    useEffect(() => {
        const fetchSubCategories = async () => {
            
            const subCategoriesfetched = await categoryService.getAllSubCategoriesByCategoryId(category.id);
            setSubCategories(subCategoriesfetched);
        }
        fetchSubCategories();
    }, [category])

    


    return(
        <div className={styles.containerPrincipal}>
            <div className={styles.containerTitle}>
                <h1>{category.denominacion}</h1>
            </div>
            <div className={styles.containerBody}>
                <h2>Subcategorias</h2>
                
                {/* Lista que renderiza  las subcategorias*/}
                {subCategories.length > 0 ? (

                    <ul className={styles.subcategoryList}>
                    {subCategories.map((subCategory) => (
                        <li key={subCategory.id} className={styles.subcategoryItem}>
                        {subCategory.denominacion}
                        </li>
                    ))}
                    </ul>

                ) : (
                    <div><p>No hay subcategorías</p></div>
                )}
            </div>

        </div>
    )
}
export default CategoryCard