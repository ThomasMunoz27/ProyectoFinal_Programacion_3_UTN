import { FC } from "react"
import { ISucursal } from "../../../../types/dtos/sucursal/ISucursal"
import { Button, Card } from "react-bootstrap"
import styles from '../CardSucursals/CardSucursal.module.css'

interface ICardSucursal {
    sucursal: ISucursal
}

export const CardSucursal: FC<ICardSucursal> = ({sucursal}) => {
  return (
    <>
        <Card className={styles.card}>
            <Card.Body>
                <img className={styles.cardImg} 
                    src={
                    sucursal.logo ? sucursal.logo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppJKxBxJI-9UWLe2VVmzuBd24zsq4_ihxZw&s"  // Si es null o undefined
                    }  
                    alt="" />
                <Card.Title>{sucursal.nombre}</Card.Title>
                <Card.Subtitle>{sucursal.horarioApertura} - {sucursal.horarioCierre}</Card.Subtitle>
                <div className={styles.containerButtons}>
                    <Button >Ver</Button>
                    <Button >Editar</Button>
                </div>
            </Card.Body>
        </Card>
    
    </>
  )
}
