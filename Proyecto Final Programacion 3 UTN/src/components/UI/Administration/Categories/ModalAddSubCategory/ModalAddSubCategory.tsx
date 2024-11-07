import { Button } from "react-bootstrap";
import styles from "./ModalAddSubCategory.module.css";
import { ChangeEvent, FC, useState } from "react";
import { ICreateCategoria } from "../../../../../types/dtos/categorias/ICreateCategoria";
import { categoryService } from "../../../../../Services/categoryServices";
import Swal from "sweetalert2";

interface IModalAddSubCategory {
    closeModalAdd : () => void,
    idSucursal : number,
    idCategoriaPadre : number
}

const ModalAddSubCategory : FC<IModalAddSubCategory> = ({idSucursal,closeModalAdd}) => {

    const [newSubCategory, setNewCategory] = useState<ICreateCategoria>({
        denominacion: "",
        idSucursal : idSucursal, //id de la sucursal
        idCategoriaPadre: 1 //id de la categoria padre
        })

        //Funcion para manejar el cambio de los inputs
    const handleCahnge = (e : ChangeEvent<HTMLInputElement>) => {
        const {name , value} = e.target;
        setNewCategory((prev) => ({...prev,
            [name] : value,
        }))
    }

    //Funcion para controlar el envio de la nueva categoria
    const handleSubmit = (e : React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();

    if(!newSubCategory.denominacion){
        alert("No puede dejar en blanco el campo");
    }

    try{
        console.log("Datos enviados", newSubCategory);
        categoryService.createCategory(newSubCategory)
    }catch(error){
        console.error("El problema es: ", error);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        });
      }
    }

    return (
        <div className={styles.containerPrincipal}>
            <div className={styles.containerTitle}>
                <h1>Agregar Subcategoria</h1>
            </div>
                <div className={styles.containerBody}>
                    <label htmlFor="">Ingrese Denominacion</label>
                    <input type="text" placeholder="Denominacion" name="denominacion" value={newSubCategory.denominacion} onChange={handleCahnge}/>
                </div>
            <div className={styles.containerButtons}>
                <Button onClick={handleSubmit}>Aceptar</Button>
                <Button onClick={closeModalAdd}>Cancelar</Button>
            </div>
        </div>
    )
}

export default ModalAddSubCategory;