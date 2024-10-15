import { Button } from "react-bootstrap";
import styles from "./ModalViewCompany.module.css";
import { FC } from "react";
import { ICompany } from "../../../Types/ICompany";

interface IModalViewCompany {
    company : ICompany;
    modalClose : () => void; //Funcion que recibe desde CardCompany para cerrar el modal
}

const ModalViewCompany : FC<IModalViewCompany>  = ({company, modalClose}) =>{

    return(
        <div className={styles.containerPrincipalOn}>
            <div className={styles.containerTitle}>
                <h2>Empresa</h2>
            </div>
            
            <div className={ styles.containerData }>
                <p>Nombre: {company.name} </p>
                <p>Razon Social: {company.social_razon} </p>
                <p>Cuit: {company.cuit}</p>
                <p>Logo: </p>
            </div>
            <div className={styles.containerButton}>
                <Button onClick={modalClose}>Cerrar</Button>
            </div>

        </div>
    )
}
export default ModalViewCompany