import { Button } from "react-bootstrap";
import styles from "./ModalEditCategory.module.css";
import { ChangeEvent, FC, useState } from "react";
import { ICategorias } from "../../../../../types/dtos/categorias/ICategorias";
import { RootState } from "../../../../../redux/store/store";
import { useSelector } from "react-redux";
import { categoryService } from "../../../../../Services/categoryServices";
import Swal from "sweetalert2";

interface IModalEditCategory{
    closeModalEdit : () => void
    category: ICategorias;
}

const ModalEditCategory : FC<IModalEditCategory> = ({closeModalEdit, category}) =>{

    //Selecciono empresa
    const storedEmpresa = localStorage.getItem('empresa');
    const selectedEmpresa = storedEmpresa ? JSON.parse(storedEmpresa) : useSelector(
        (state : RootState) => state.company.selectedCompany
    )

    const [categoryEdit, setCategoryEdit] = useState<ICategorias>({
        id: category.id,
        denominacion: category.denominacion,
        sucursales: category.sucursales.map((el) => el),
        subCategorias : category.subCategorias,
        eliminado: category.eliminado,
        categoriaPadre : null,
        articulos: []
    })

    //Funcion para manejar el cambio de los inputs
    const handleChage = (e : ChangeEvent<HTMLInputElement>) => {
        const {name , value} = e.target;
        setCategoryEdit((prev) => ({...prev,
            [name] : value,
        }))
    }

    //Funcion que edita la categoria
    const handleSubmit = async (e : React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();

        if (!categoryEdit.denominacion) {
            alert("No pudo editarse");
            return;
        }

        try{
            // Verificamos los datos que vamos a enviar
            console.log("Enviando datos:", JSON.stringify(categoryEdit));

            await categoryService.updateCategory(category.id, categoryEdit)

            Swal.fire({
                icon: "success",
                title: "Categoría creada",
                text: "La categoría se ha creado exitosamente.",
            });
        }catch(error){

        }


    }

    return(
        <div className={styles.containerPrincipal}>
            <div className={styles.containerTitle}>
                <h1>Editar Categoria</h1>
            </div>
            <div className={styles.containerBody}>
                <label htmlFor="">Ingrese Denominacion</label>
                <input type="text" placeholder="Denominacion" name="denominacion" onChange={handleChage}/>
            </div>
            <div className={styles.containerButtons}>
                <Button onClick={handleSubmit}>Aceptar</Button>
                <Button onClick={closeModalEdit}>Cancelar</Button>
            </div>
        </div>
    )

}

export default ModalEditCategory;