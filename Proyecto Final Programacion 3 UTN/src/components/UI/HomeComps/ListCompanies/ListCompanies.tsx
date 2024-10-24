import { FC, useEffect, useState } from "react";
import { CardCompany } from "../CardCompany/CardCompany";
import { IEmpresa } from "../../../../types/dtos/empresa/IEmpresa";

interface IListCompanies {
  companies: Promise<IEmpresa[]>; // Recibimos una promesa
}



export const ListCompanies: FC<IListCompanies> = ({ companies }) => {
  const [companyList, setCompanyList] = useState<IEmpresa[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Cuando se monte el componente, resolvemos la promesa
    companies
      .then((data) => {
        setCompanyList(data); // Guardamos los datos resueltos
        setLoading(false); // Cambiamos el estado de cargando
      })
      .catch((error) => {
        console.error("Error al obtener empresas:", error);
        setLoading(false); // En caso de error, también cambiamos el estado de cargando
      });
  }, [companies]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      {companyList.length === 0 ? (
        <div>No se encontraron empresas</div>
      ) : (
        <div>
          {companyList.map((company) => (
            <CardCompany company={company} key={company.id} />
          ))}
        </div>
      )}
    </div>
  );
};
