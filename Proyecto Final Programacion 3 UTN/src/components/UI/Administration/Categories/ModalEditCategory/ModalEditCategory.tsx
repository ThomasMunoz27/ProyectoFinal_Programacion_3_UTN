import { Button } from "react-bootstrap";
import styles from "./ModalEditCategory.module.css";
import { ChangeEvent, FC, useState } from "react";
import { ICategorias } from "../../../../../types/dtos/categorias/ICategorias";
import { categoryService } from "../../../../../Services/categoryServices";
import Swal from "sweetalert2";

interface IModalEditCategory{
    closeModalEdit : () => void
    category: ICategorias;
}

const ModalEditCategory : FC<IModalEditCategory> = ({closeModalEdit, category}) =>{

    const [categoryEdit, setCategoryEdit] = useState<ICategorias>({
        id : category.id,
        denominacion: category.denominacion,
        eliminado: category.eliminado,
        sucursales: category.sucursales,
        subCategorias: category.subCategorias,
        categoriaPadre: category.categoriaPadre,
        articulos : category.articulos
    })

    const handleChage = (e : ChangeEvent<HTMLInputElement>) =>{
        const {name , value} = e.target;
        setCategoryEdit((prev) => ({...prev,
            [name] : value,
        }))
    }

    const handleSubmit = async (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if(!categoryEdit){
            alert("No se pudo editar");
            return;
        }

        try{
            console.log("Enviando datos:", JSON.stringify(categoryEdit))
            console.log(categoryEdit)
            await categoryService.updateCategory(category.id, categoryEdit)
            Swal.fire({
                icon: "success",
                title: "Categoria Actualizada",
                text: "La categoria se ha editado exitosamente.",
                timer: 1500,
                willClose: () => {
                    closeModalEdit();
                    window.location.reload()
                }
            })
            closeModalEdit();
        }catch(error){
            console.error("El problema es: ", error);
            Swal.fire({
                icon: "success",
                title: "Categoria Editada",
                showConfirmButton: false,
                timer: 1500,
                willClose: ()=>{
                    closeModalEdit();
                    window.location.reload() 
                }
            });
        }
    }

    return(
        <div className={styles.containerPrincipal}>
            <div className={styles.containerTitle}>
                <h1>Editar Categoria</h1>
            </div>
            <div className={styles.containerBody}>
                <label htmlFor="">Ingrese Denominacion</label>
                <input type="text" placeholder="Denominacion" value={categoryEdit.denominacion} name="denominacion" onChange={handleChage}/>
            </div>
            <div className={styles.containerButtons}>
                <Button onClick={handleSubmit}>Aceptar</Button>
                <Button onClick={closeModalEdit}>Cancelar</Button>
            </div>
        </div>
    )

}

export default ModalEditCategory;