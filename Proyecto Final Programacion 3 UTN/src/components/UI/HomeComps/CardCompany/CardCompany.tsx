import { FC, useState } from "react"
import { Button, Card } from "react-bootstrap"
import styles from "./CardCompany.module.css"
import ModalViewCompany from "../ModalViewCompany/ModalViewCompany"
import { ICompany } from "../../../../Types/ICompany"

interface ICardCompany{
  company: ICompany
}

export const CardCompany : FC<ICardCompany>= ({company}) => {
  const [showModal, setShowModal] = useState(false); //Estado que se va a usar para mostrar el popup
  
  const handleButtonShow = () =>{ //Muestra el modal
    setShowModal(true)
  }

  const handleCloseModal = () =>{ //Deja de mostrar el modal
    setShowModal(false)
  }

  return (
    <>
      <Card className={styles.cardContainer} style={{ width: '18rem' }}>
        <Card.Body>
          <img 
            src={
              company.logo instanceof File 
                ? URL.createObjectURL(company.logo)  // Si es un archivo File
                : company.logo 
                  ? company.logo  // Si es una cadena de texto
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppJKxBxJI-9UWLe2VVmzuBd24zsq4_ihxZw&s"  // Si es null o undefined
            }  
            alt="" />
          <Card.Title>{company.name}</Card.Title>
          <Card.Subtitle>Razon social: {company.social_razon}</Card.Subtitle>
          <div className={styles.buttonContainer}>
            <Button onClick={handleButtonShow}>Ver</Button>
            <Button>Editar</Button>
          </div>
        </Card.Body>
      </Card>
      {showModal && (
    <ModalViewCompany company={company} modalClose={handleCloseModal} /> //Si showModal es verdadero muestra el componente
      )}

    </>
  )
}
