import { Button } from "react-bootstrap"
import { ListCompanies } from "../ListCompanies/ListCompanies"
import styles from "./Aside.module.css"
import { companiesData } from "../../../../data/companiesData"

export const Aside = () => {
  return (
    <div className={styles.asideContainer}>
      <div style={{marginTop:"10px"}}>
        <h2>Empresas</h2>
        
        <Button variant="primary"> Agregar una Empresa</Button>
      </div>

      <div>
        <ListCompanies companies={companiesData}/>
      </div>
    
    </div>
  )
}
