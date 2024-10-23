import { FC } from "react"
import { ISucursal } from "../../../../types/dtos/sucursal/ISucursal"
import { Button, Card } from "react-bootstrap"


interface ICardSucursal {
    sucursal: ISucursal
}

export const CardSucursal: FC<ICardSucursal> = ({sucursal}) => {
  return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <img 
                    src={
                    sucursal.logo ? sucursal.logo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppJKxBxJI-9UWLe2VVmzuBd24zsq4_ihxZw&s"  // Si es null o undefined
                    }  
                    alt="" />
                <Card.Title>{sucursal.nombre}</Card.Title>
                <Card.Subtitle>{sucursal.horarioApertura} - {sucursal.horarioCierre}</Card.Subtitle>
                <div >
                    <Button >Ver</Button>
                    <Button >Editar</Button>
                </div>
            </Card.Body>
        </Card>
    
    </>
  )
}
