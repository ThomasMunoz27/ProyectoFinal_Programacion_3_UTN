import { FC } from "react"
import { CardCompany } from "../CardCompany/CardCompany"
import { IEmpresa } from "../../../../types/dtos/empresa/IEmpresa"


interface IListCompanies{
  companies: IEmpresa[]
}

export const ListCompanies : FC<IListCompanies> = ({companies}) => {
  return (

    <>
    <div>
        <div>
          {companies.map((company)=>(
            <CardCompany company={company} key={company.id}/>
          ))}
        </div>
    </div>
    </>
  )
}
