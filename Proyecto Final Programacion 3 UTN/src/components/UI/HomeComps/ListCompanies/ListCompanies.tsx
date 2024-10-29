import { FC, useEffect, useState } from "react";
import { CardCompany } from "../CardCompany/CardCompany";
import { IEmpresa } from "../../../../types/dtos/empresa/IEmpresa";

interface IListCompanies {
  companies: IEmpresa[]; // Recibimos una promesa
}



export const ListCompanies: FC<IListCompanies> = ({ companies }) => {
  const [companyList, setCompanyList] = useState<IEmpresa[]>([]);

  useEffect(() => {
    setCompanyList(companies);
    
  }, [companies]);


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
