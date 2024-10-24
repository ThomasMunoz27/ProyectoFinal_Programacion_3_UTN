import { Button } from "react-bootstrap"
import { ListCompanies } from "../ListCompanies/ListCompanies"
import styles from "./Aside.module.css"



/*

interface IEmpresas {
  id: number;
  nombre: string;
  // otros campos que definen la interfaz
}

async function getEmpresas(): Promise<IEmpresas[]> {
  const response = await fetch('http://190.221.207.224:8090/empresas');
  const empresas: IEmpresas[] = await response.json();
  console.log(empresas);
  return empresas;
}

// Llamada a la función
getEmpresas().then((empresas) => {
  // Aquí puedes usar las empresas obtenidas
  console.log(empresas);
});


*/

export const Aside = () => {
  interface IEmpresas {
    id: number;
    eliminado: boolean;
    nombre: string;
    razonSocial: string;
    cuit: number;
    logo: string;
  }
   
  
  
  async function getEmpresas(): Promise<IEmpresas[]> {
    const response = await fetch('http://190.221.207.224:8090/empresas');
    const empresas: IEmpresas[] = await response.json();
    console.log(empresas);
    return empresas;
  }
  
  // Llamada a la función
  const e = getEmpresas().then((empresas) => {
   return empresas;
  });
  
 
  
  
  
 
  return (
    <div className={styles.asideContainer}>
      <div style={{marginTop:"10px"}}>
        <h2>Empresas</h2>
        
        <Button variant="primary"> Agregar una Empresa</Button>
      </div>

      <div>
        <ListCompanies companies={e}/>
      </div>
    
    </div>
  )
}
