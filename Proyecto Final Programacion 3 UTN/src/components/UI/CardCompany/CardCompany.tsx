import { FC } from "react"
import { ICompany } from "../../../Types/ICompany"
import { Button, Card } from "react-bootstrap"
import styles from "./CardCompany.module.css"

interface ICardCompany{
  company: ICompany
}

export const CardCompany : FC<ICardCompany>= ({company}) => {
  return (
    <Card className={styles.card} style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{company.name}</Card.Title>
      <Card.Subtitle>Razon social: {company.social_razon}</Card.Subtitle>
      
      <div className={styles.buttonContainer}>
            <Button>Ver</Button>
            <Button>Editar</Button>
      </div>
    </Card.Body>
  </Card>
  )
}
