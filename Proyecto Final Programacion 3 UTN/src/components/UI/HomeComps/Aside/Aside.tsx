import { Button } from "react-bootstrap"
import { ListCompanies } from "../ListCompanies/ListCompanies"
import styles from "./Aside.module.css"
import { IEmpresas } from "../../../../types/dtos/empresa/IEmpresas";


export const Aside = () => {

  
  
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
        
        <Button variant="primary"> Agregar una Empresa</Button>
      </div>

      <div>
        <ListCompanies companies={companies}/>
      </div>
    
    </div>
  )
}
