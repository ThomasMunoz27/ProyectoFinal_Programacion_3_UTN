import { useEffect, useState } from "react";
import { ICategorias } from "../../../../../types/dtos/categorias/ICategorias";
import axios from "axios";
import CategoryCard from "../CategoryCard/CategoryCard";
import styles from "./ListCategories.module.css";
import { Button } from "react-bootstrap";

const ListCategories = () => {
    const [categories , setCatecories] = useState<ICategorias[]>([]); //Inicializo el estado con una lista vacia

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
            <Button className={styles.butttonAddCategory}>Agregar Categoria</Button>
            <ol className={styles.categoriesContainer}>
                {categories.map(categories => (
                    <li key={categories.id}>
                        <CategoryCard category={categories}/>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default ListCategories;