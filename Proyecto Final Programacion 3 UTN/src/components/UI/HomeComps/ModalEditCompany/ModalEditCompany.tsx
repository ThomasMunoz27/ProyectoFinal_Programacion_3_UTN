import { Button } from "react-bootstrap";
import styles from "./ModalEditCompany.module.css";
import { FC } from "react";

interface IModalEditCompany {
    
    modalCloseEdit : () => void; //Funcion que recibe desde CardCompany para cerrar el modal
}

const ModalEditCompany : FC<IModalEditCompany> = ({modalCloseEdit}) => {

    return(
        <div className={styles.containerPrincipal}>
            <div className={styles.containerTitle}>
                <h2>Editar Empresa</h2>
            </div>

            <div>
                <form action="" className={styles.containerForm}>
                    <label htmlFor="">Nombre</label>
                    <input type="text" />
                    <label htmlFor="">Razon Social</label>
                    <input type="text" />
                    <label htmlFor="">Cuit</label>
                    <input type="text" />
                    <label htmlFor="">Imagen</label>                    
                    <input type="text" name="" placeholder="link de imagen" />
                    <input type="file" />
                </form>
                <div className={styles.containerButtons}>
                    <Button>Aceptar</Button>
                    <Button onClick={modalCloseEdit}>Cancelar</Button>
                </div>
                

            </div>
        </div>
    )


}

export default ModalEditCompany;