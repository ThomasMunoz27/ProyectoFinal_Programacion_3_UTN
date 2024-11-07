import { FC, useEffect, useState } from "react"
import { ICategorias } from "../../../../../types/dtos/categorias/ICategorias"
import styles from "./CardCategory.module.css";
import { categoryService } from "../../../../../Services/categoryServices";
import { Button } from "react-bootstrap";
import ModalAddSubCategory from "../ModalAddSubCategory/ModalAddSubCategory";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store/store";


interface ICategoryCard {
    category : ICategorias;
}

const CategoryCard : FC<ICategoryCard> = ({category}) => {

    const [subCategories, setSubCategories] = useState<ICategorias[]>([]);
    const [showSubCategory, setShowSubCategory] = useState(false);
    const [showModalSubCategory , setShowModalSubCategory] = useState(false); //Estado para ver el modal de agregar subcategorias
    
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

    //Funcion que muestra el modal para agregar categoria
    const handleShowModalSubCategory = () =>{
        setShowModalSubCategory(true);
    }

    const closeModal = () =>{
        setShowModalSubCategory(false)
    }

     //Selecciono sucursal
    const storedSucursal = localStorage.getItem('sucursal');
    const selectedSucursal = storedSucursal ? JSON.parse(storedSucursal) : useSelector(
        (state: RootState) => state.sucursal.selectedSucursal
    )

    return(
        <div className={styles.containerPrincipal}>
            <div className={styles.containerTitle}>
                <h1>{category.denominacion}</h1>
                
                <div className={styles.buttonsEdit}> 
                    <Button onClick={handleShowModalSubCategory}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" fill="#e8eaed" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke="#e8eaed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </Button>
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                    </Button>
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
                    </Button>
                </div>
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

                {/* Muestra el modal para agregar sub categorias */}
                {showModalSubCategory && (
                        <>
                        {/* Meto un div abajo para que impida pulsar otro elemento */}
                            <div className={styles.backgroundDisabled}></div>
                            <ModalAddSubCategory closeModalAdd={closeModal} idSucursal={selectedSucursal.id} idCategoriaPadre={category.id}/>
                        </>
                )}
                
            </div>

        </div>
    )
}
export default CategoryCard