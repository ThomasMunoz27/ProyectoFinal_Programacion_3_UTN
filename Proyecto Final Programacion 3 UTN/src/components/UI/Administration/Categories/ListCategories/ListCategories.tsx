import { useEffect, useState } from "react";
import { ICategorias } from "../../../../../types/dtos/categorias/ICategorias";
import axios from "axios";
import CategoryCard from "../CategoryCard/CategoryCard";
import styles from "./ListCategories.module.css";



const ListCategories = () => {
    const [categories , setCatecories] = useState<ICategorias[]>([]); //Inicializo el estado con una lista vacia
    // const [showModalAddCategory, setShowModalAddCategory] = useState<boolean>(false); //Estado para controlar el modal

    useEffect(() => {
        const fetchCategories = async () =>{
            try{
                const response = await axios.get('http://190.221.207.224:8090/categorias/allCategoriasPorSucursal/1') //Llamo a la api para ver las categorias por sucursal
                setCatecories(response.data); // Actualizo el estado
            }catch(error){
                console.error("Error al obtener las categorias");
                alert("Hubo un error");
            }
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