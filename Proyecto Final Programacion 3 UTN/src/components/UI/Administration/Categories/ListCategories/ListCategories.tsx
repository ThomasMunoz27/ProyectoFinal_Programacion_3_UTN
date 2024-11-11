import { useEffect, useState } from "react";
import { ICategorias } from "../../../../../types/dtos/categorias/ICategorias";
import CategoryCard from "../CategoryCard/CategoryCard";
import styles from "./ListCategories.module.css";
import { RootState } from "../../../../../redux/store/store";
import { useSelector } from "react-redux";
import { categoryService } from "../../../../../Services/categoryServices";
import { Button } from "react-bootstrap";
import ModalAddCategory from "../ModalAddCategory/ModalAddCategory";

const ListCategories = () => {
    

    //Selecciono sucursal
    const storedSucursal = localStorage.getItem('sucursal');
    const selectedSucursal = storedSucursal ? JSON.parse(storedSucursal) : useSelector(
        (state: RootState) => state.sucursal.selectedSucursal
    )

    //Selecciono empresa
    const storedEmpresa = localStorage.getItem('empresa');
    const selectedEmpresa = storedEmpresa ? JSON.parse(storedEmpresa) : useSelector(
        (state : RootState) => state.company.selectedCompany
    )
    
    const [showModalAddCategory, setShowModalAddCategory] = useState<boolean>(false); //Estado para controlar el modal

    const [categories , setCategories] = useState<ICategorias[]>([]); //Inicializo el estado con una lista vacia

    useEffect(() => {
        const fetchCategories = async () =>{
            const data = await categoryService.getCategoriesBySucursal(selectedSucursal?.id);
            setCategories(data);
        }

        fetchCategories();
    },[]);

    const handleModal = () =>{
        setShowModalAddCategory(true);
    }

    const closeModal = () =>{
        setShowModalAddCategory(false);
    }

    return(
        <div className={styles.contentHero}>
            <div className={styles.categoryHeader}>
                <h1>Categorias</h1>
                <Button onClick={handleModal}>Agregar Categoria</Button>
            </div>
            <ul className={styles.containerList}>
                {categories.map(categories => (
                    <li key={categories.id} className={styles.containerPrincipal} typeof="inherit">
                        <CategoryCard category={categories}/>
                    </li>
                ))}
            </ul>

            {showModalAddCategory && (
                <>
                {/* Meto un div abajo para que impida pulsar otro elemento */}
                    <div className={styles.backgroundDisabled}></div>
                    <ModalAddCategory closeModalAdd={closeModal} idEmpresa={selectedEmpresa?.id} />
                </>
            )}
        </div>

        
    )
}

export default ListCategories;