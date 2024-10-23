import { FC } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store/store"
import styles from "./ViewSucursals.module.css"

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
  return (
    <div className={styles.sucursalsContainer}>
      <h2>Sucursales de: {selectedCompany.nombre}</h2>
    </div>
  )
}
