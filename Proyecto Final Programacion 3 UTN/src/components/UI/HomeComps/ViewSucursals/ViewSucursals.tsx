import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store/store";
import styles from "./ViewSucursals.module.css";
import { CardSucursal } from "../CardSucursals/CardSucursal";
import { ISucursal } from "../../../../types/dtos/sucursal/ISucursal";
import { sucursalService } from "../../../../Services/SucursalServices/sucursalService";



export const ViewSucursals: FC = () => {
  const selectedCompany = useSelector(
    (state: RootState) => state.company.selectedCompany
  );

  const selectedCompanyId = selectedCompany?.id

  const [sucursals, setSucursals] = useState<ISucursal[]>([]);


  // Función para cargar las sucursales de la empresa seleccionada
  useEffect(() => {
    if (selectedCompanyId) {
      const fetchSucursales = async () => {

          const data = await sucursalService.getSucursales(selectedCompanyId);
          setSucursals(data);
        }
        fetchSucursales();
      
      }}, [selectedCompanyId])


  return (
    <>
    
    <div className={styles.sucursalsMainContainer}>
      <h2>Sucursales de {selectedCompany?.nombre}</h2>
      <div>
        {sucursals.length === 0 ? (
          <h3>No hay sucursales</h3>
        ) : (
          <div className={styles.sucursalsCardContainer}>
            {
              sucursals.map((sucursal) => (
                <CardSucursal sucursal={sucursal} key={sucursal.id} />
              ))
            }
          </div>
        )}
      </div>
    </div>

    </>
  );
};
