import { Button } from "react-bootstrap";
import style from "./ModalAddCompany.module.css";
import { FC } from "react";

interface IModalAdd{
    closeModalAdd : () => void
}

const ModalAddCompany : FC<IModalAdd> = ({closeModalAdd}) =>{
    return(
        <div className={style.containerPrincipal}>
        <div className={style.containerTitle}>
                <h2>Agregar Empresa</h2>
            </div>

            <div>
                <form action=""  className={style.containerForm}>
                    <label htmlFor="">Nombre</label>
                    <input type="text" placeholder="Nombre de la empresa"/>
                    <label htmlFor="">Razon Social</label>
                    <input type="text" placeholder="Razon Social de la empresa" />
                    <label htmlFor="">Cuit</label>
                    <input type="text" placeholder="Cuit de la empresa" />
                    <label htmlFor="">Imagen</label>                    
                    <input type="text" name="" placeholder="Link de imagen" />
                    
                </form>
                <div className={style.containerButtons}>
                    <Button>Aceptar</Button>
                    <Button onClick={closeModalAdd}>Cancelar</Button>
                </div>
                

            </div>
        </div>
    )
}

export default ModalAddCompany;