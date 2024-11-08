import { ChangeEvent, FC, useState } from "react";
import styles from "./ModalAddCategory.module.css";
import { Button } from "react-bootstrap";
import { ICreateCategoria } from "../../../../../types/dtos/categorias/ICreateCategoria";
import Swal from "sweetalert2";
import { categoryService } from "../../../../../Services/categoryServices";

interface IModalAddCategory{
  closeModalAdd : () => void //Funcion para cerrar el modal
  idEmpresa: number; //id de la company
}

const ModalAddCategory : FC<IModalAddCategory>  = ({idEmpresa, closeModalAdd}) => { 
const [newCategory, setNewCategory] = useState<ICreateCategoria>({//Estado para crear categoria
    denominacion: "",
    idEmpresa: idEmpresa, //id de la empresa 
    idCategoriaPadre: null
  })

  //Funcion para manejar el cambio de los inputs
  const handleCahge = (e : ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target;
    setNewCategory((prev) => ({...prev,
      [name] : value,
    }))
  }

  //Funcion para controlar el envio de la nueva categoria
  const handleSubmit = async(e : React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();

    if(!newCategory.denominacion){
      alert("No puede dejar en blanco el campo");
      return;
    }

    try{
      // Verificamos los datos que vamos a enviar
    console.log("Enviando datos:", JSON.stringify(newCategory));

    await categoryService.createCategory(newCategory)

    Swal.fire({
      icon: "success",
      title: "Categoría creada",
      text: "La categoría se ha creado exitosamente.",
    });

    closeModalAdd();
    }catch(error){
      console.error("El problema es: ", error);
      Swal.fire({
        icon: "success",
        title: "Categoria agregada",
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
        <h1>Agregar Categoria</h1>
      </div>
      <div className={styles.containerBody}>
        <label htmlFor="">Ingrese Denominacion</label>
        <input type="text" placeholder="Denominacion" value={newCategory.denominacion} name="denominacion" onChange={handleCahge}/>
      </div>
      <div className={styles.containerButtons}>
          <Button onClick={handleSubmit}>Aceptar</Button>
          <Button onClick={closeModalAdd}>Cancelar</Button>
      </div>
    </div>
  )
}

export default ModalAddCategory;
