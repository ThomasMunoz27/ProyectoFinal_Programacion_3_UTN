import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store/store";
import styles from "./ViewSucursals.module.css";
import { CardSucursal } from "../CardSucursals/CardSucursal";
import { ISucursal } from "../../../../types/dtos/sucursal/ISucursal";



export const ViewSucursals: FC = () => {
  const selectedCompany = useSelector(
    (state: RootState) => state.company.selectedCompany
  );

  const selectedCompanyId = selectedCompany?.id

  const [sucursals, setSucursals] = useState<ISucursal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Función para cargar las sucursales de la empresa seleccionada
  useEffect(() => {
    if (selectedCompanyId) {
      fetch(`http://190.221.207.224:8090/sucursales/porEmpresa/${selectedCompanyId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar sucursales");
          }
          return response.json();
        })
        .then((data: ISucursal[]) => {
          setSucursals(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [selectedCompanyId]);

  if (loading) {
    return <div>
                <h3>Seleccione una empresa para ver sus sucursales</h3>
            </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
