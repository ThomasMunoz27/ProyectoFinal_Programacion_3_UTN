import { FC, useState } from "react"
import { ICompany } from "../../../Types/ICompany"
import { Button, Card } from "react-bootstrap"
import styles from "./CardCompany.module.css"
import ModalViewCompany from "../ModalViewCompany/ModalViewCompany"

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
      <Card className={styles.card} style={{ width: '18rem' }}>
        <Card.Body>
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
