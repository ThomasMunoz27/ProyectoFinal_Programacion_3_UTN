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
                <div>
                <img 
            src={
                company.logo instanceof File 
                ? URL.createObjectURL(company.logo)  // Si es un archivo File
                : company.logo 
                  ? company.logo  // Si es una cadena de texto
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppJKxBxJI-9UWLe2VVmzuBd24zsq4_ihxZw&s"  // Si es null o undefined
            }  
            alt="" />
                </div>
            </div>
            <div className={styles.containerButton}>
                <Button onClick={modalClose}>Cerrar</Button>
            </div>

        </div>
    )
}
export default ModalViewCompany