import { FC, useEffect, useState } from "react"
import { ICategorias } from "../../../../../types/dtos/categorias/ICategorias"
import styles from "./CardCategory.module.css";
import { categoryService } from "../../../../../Services/categoryServices";

interface ICategoryCard {
    category : ICategorias;
}

const CategoryCard : FC<ICategoryCard> = ({category}) => {

    const [subCategories, setSubCategories] = useState<ICategorias[]>([]);
    const [showSubCategory, setShowSubCategory] = useState(false);
    
    useEffect(() => {
        const fetchSubCategories = async () => {
            
            const subCategoriesfetched = await categoryService.getAllSubCategoriesByCategoryId(category.id);
            setSubCategories(subCategoriesfetched);
        }
        fetchSubCategories();
    }, [category])

    //Funcion que maneja el renderizado de las subcategorias
    const handleShowSubCategory = () =>{
        setShowSubCategory(!showSubCategory);
    }


    return(
        <div className={styles.containerPrincipal}>
            <div className={styles.containerTitle}>
                <h1>{category.denominacion}</h1>
            </div>
            <div className={styles.containerBody} onClick={handleShowSubCategory}>
                <div className={styles.containerSubTitle}>
                    <span className={`material-icons ${styles.arrowIcon} ${showSubCategory ? styles.rotated : ""}`}>
                        arrow_right
                    </span>
                    <h2>Subcategorias</h2>
                </div>
                
                
                {/* Lista que renderiza  las subcategorias*/}
                {subCategories.length > 0 ? (
                    <div className={showSubCategory ? styles.containerSubcategoryTrue : styles.containerSubcategoryFalse}>
                        <ul>
                        {subCategories.map((subCategory) => (
                            <li key={subCategory.id} className={styles.subcategoryItem}>
                            {subCategory.denominacion}
                            </li>
                        ))}
                        </ul>
                    </div>
                ) : (
                    <div className={showSubCategory ? styles.containerSubcategoryTrue : styles.containerSubcategoryFalse}><p>No hay subcategorías</p></div>
                )}
            </div>

        </div>
    )
}
export default CategoryCard