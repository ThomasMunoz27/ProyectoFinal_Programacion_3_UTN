import { Button } from "react-bootstrap";
import styles from "./ModalAddSubCategory.module.css";
import { ChangeEvent, FC, useState } from "react";
import { ICreateCategoria } from "../../../../../types/dtos/categorias/ICreateCategoria";
import { categoryService } from "../../../../../Services/categoryServices";
import Swal from "sweetalert2";
import { ICategorias } from "../../../../../types/dtos/categorias/ICategorias";



interface IModalAddSubCategory {
    closeModalAdd : () => void,
    categoriaPadre: ICategorias 
    idCompany : number
}

const ModalAddSubCategory : FC<IModalAddSubCategory> = ({idCompany,categoriaPadre,closeModalAdd}) => {

    const [newSubCategory, setNewCategory] = useState<ICreateCategoria>({
        denominacion: "",
        idEmpresa : idCompany, //id de empresa
        idCategoriaPadre: categoriaPadre.id //id de la categoria padre
    })

        //Funcion para manejar el cambio de los inputs
    const handleCahnge = (e : ChangeEvent<HTMLInputElement>) => {
        const {name , value} = e.target;
        setNewCategory((prev) => ({...prev,
            [name] : value,
        }))
    }

    //Funcion para controlar el envio de la nueva categoria
    const handleSubmit = async(e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!newSubCategory.denominacion || !newSubCategory.idCategoriaPadre) {
            alert("No puede dejar en blanco el campo");
            return;
        }

        try{
            // Verificamos los datos que vamos a enviar
            console.log("Enviando datos:", JSON.stringify(newSubCategory));
            console.log(newSubCategory) 

            await categoryService.createCategory(newSubCategory)

            Swal.fire({
                icon: "success",
                title: "Subategoría creada",
                text: "La subcategoría se ha creado exitosamente.",
                timer : 1500,
                willClose: () => {
                    closeModalAdd();
                    window.location.reload();
                }
            });
            closeModalAdd();
            
            }catch(error){
            console.error("El problema es: ", error);
            Swal.fire({
                icon: "success",
                title: "Categoria no agregada",
                showConfirmButton: false,
                timer: 1500,
                willClose: ()=>{
                    closeModalAdd();
                    window.location.reload() 
                }
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