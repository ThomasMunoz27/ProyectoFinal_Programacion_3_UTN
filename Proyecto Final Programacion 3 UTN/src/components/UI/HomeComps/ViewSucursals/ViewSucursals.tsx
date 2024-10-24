import { FC } from "react"
import { useSelector } from "react-redux"
import styles from "./ViewSucursals.module.css"
import { CardSucursal } from "../CardSucursals/CardSucursal"
import { RootState } from "../../../../redux/store/store"

export const ViewSucursals: FC = () => {

  const selectedCompany = useSelector(
    (state: RootState) => state.company.selectedCompany)



    
    if(!selectedCompany){
      return(
        <div>
          <h2>Seleccione una empresa para ver sus sucursales</h2>
        </div>
      )
    }


 console.log(selectedCompany)
   return (
    <div className={styles.sucursalsContainer}>
      <div>
        {}
      </div>
      <h2>Sucursales de: {selectedCompany.nombre}</h2>
      <div>
          {selectedCompany.sucursales.length === 0 ?
            <h3>No hay sucursales</h3> :
            selectedCompany.sucursales.map((sucursal)=>(
              <CardSucursal sucursal={sucursal} key={sucursal.id}/>
            ))}
      </div>
    </div>
  )
}
