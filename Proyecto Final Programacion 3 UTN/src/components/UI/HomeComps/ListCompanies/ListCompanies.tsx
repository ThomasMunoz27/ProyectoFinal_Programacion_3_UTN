import { FC } from "react"
import { CardCompany } from "../CardCompany/CardCompany"
import { ICompany } from "../../../../Types/ICompany"

interface IListCompanies{
  companies: ICompany[]
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
