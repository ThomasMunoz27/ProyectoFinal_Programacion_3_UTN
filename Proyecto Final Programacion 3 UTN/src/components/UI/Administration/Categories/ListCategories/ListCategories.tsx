import { useEffect, useState } from "react";
import { ICategorias } from "../../../../../types/dtos/categorias/ICategorias";
import CategoryCard from "../CategoryCard/CategoryCard";
import styles from "./ListCategories.module.css";
import { RootState } from "../../../../../redux/store/store";
import { useSelector } from "react-redux";
import { categoryService } from "../../../../../Services/categoryServices";



const ListCategories = () => {

    const selectedSucursal = useSelector(
        (state: RootState) => state.sucursal.selectedSucursal
    );

    const [categories , setCategories] = useState<ICategorias[]>([]); //Inicializo el estado con una lista vacia
    // const [showModalAddCategory, setShowModalAddCategory] = useState<boolean>(false); //Estado para controlar el modal

    useEffect(() => {
        const fetchCategories = async () =>{
            const data = await categoryService.getCategoriesBySucursal(selectedSucursal?.id);
            setCategories(data);
        }

        fetchCategories();
    },[])

    return(
        <div className={styles.contentHero}>
            <ul className={styles.containerList}>
                {categories.map(categories => (
                    <li key={categories.id} className={styles.containerPrincipal} typeof="inherit">
                        <CategoryCard category={categories}/>
                    </li>
                ))}
            </ul>
        </div>

        
    )
}

export default ListCategories;