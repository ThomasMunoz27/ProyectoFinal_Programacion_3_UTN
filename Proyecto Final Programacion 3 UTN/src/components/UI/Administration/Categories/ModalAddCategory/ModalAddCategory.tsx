//import { useState } from "react";
import { ChangeEvent, FC, useState } from "react";
import styles from "./ModalAddCategory.module.css";
import { Button } from "react-bootstrap";
import { ICreateCategoria } from "../../../../../types/dtos/categorias/ICreateCategoria";
import Swal from "sweetalert2";
import { categoryService } from "../../../../../Services/categoryServices";



interface IModalAddCategory{
  closeModalAdd : () => void //Funcion para cerrar el modal
  idCompany: number; //id de la company
}

const ModalAddCategory : FC<IModalAddCategory>  = ({idCompany, closeModalAdd}) => { //Estado para crear la categoria
  const [newCategory, setNewCategory] = useState<ICreateCategoria>({
    denominacion: "",
    idEmpresa: idCompany, //id de la empresa
    idCategoriaPadre: null
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

    if(!newCategory.denominacion){
      alert("No puede dejar en blanco el campo");
    }

    try{
      console.log("Datos enviados", newCategory);
      //categoryService.createCategory()
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
        <h1>Agregar Categoria</h1>
      </div>
      <div className={styles.containerBody}>
        <label htmlFor="">Ingrese Denominacion</label>
        <input type="text" placeholder="Denominacion" value={newCategory.denominacion} name="denominacion" onChange={handleCahnge}/>
      </div>
      <div className={styles.containerButtons}>
          <Button onClick={handleSubmit}>Aceptar</Button>
          <Button onClick={closeModalAdd}>Cancelar</Button>
      </div>
    </div>
  )
}

export default ModalAddCategory;
