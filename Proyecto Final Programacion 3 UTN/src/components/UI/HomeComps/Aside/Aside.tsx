import { Button } from "react-bootstrap"
import { ListCompanies } from "../ListCompanies/ListCompanies"
import styles from "./Aside.module.css"
import { IEmpresas } from "../../../../types/dtos/empresa/IEmpresas";
import { useState } from "react";
import ModalAddCompany from "../ModalAddCompany/ModalAddCompany";


export const Aside = () => {

  const[showModalAddCompany, setShowModalAddCompany] = useState<boolean>(false); //Estado para controlar el modal


  const handleShowModal = () =>{
    setShowModalAddCompany(true); //Cambio el valor para que se muestre el Pop-up
  }

  const handleCloseModal = () =>{
    setShowModalAddCompany(false);
  }

  
  async function getEmpresas(): Promise<IEmpresas[]> {
    const response = await fetch('http://190.221.207.224:8090/empresas');
    const empresas: IEmpresas[] = await response.json();
    console.log(empresas);
    return empresas;
  }
  
  // Llamada a la función
  const companies = getEmpresas().then((empresas) => {
   return empresas;
  });
  
  return (
    <div className={styles.asideContainer}>
      <div style={{marginTop:"10px"}}>
        <h2>Empresas</h2>
        
        <Button variant="primary" onClick={handleShowModal}> Agregar una Empresa</Button>
      </div>

      <div>
        <ListCompanies companies={companies}/>
      </div>

      {showModalAddCompany && (

        <>
          <div className={styles.backgroundDisabled}>
          </div>
          <ModalAddCompany closeModalAdd={handleCloseModal}/>
        </>
      )}
    
    </div>
  )
}
