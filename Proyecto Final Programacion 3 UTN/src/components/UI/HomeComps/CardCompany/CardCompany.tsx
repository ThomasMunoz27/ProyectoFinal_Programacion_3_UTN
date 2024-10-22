import { FC, useState } from "react"
import { Button, Card } from "react-bootstrap"
import styles from "./CardCompany.module.css"
import ModalViewCompany from "../ModalViewCompany/ModalViewCompany"
import ModalEditCompany from "../ModalEditCompany/ModalEditCompany"
import { IEmpresa } from "../../../../types/dtos/empresa/IEmpresa"

interface ICardCompany{
  company: IEmpresa
}

export const CardCompany : FC<ICardCompany>= ({company}) => {
  const [showModal, setShowModal] = useState(false); //Estado que se va a usar para mostrar el popup
  const [showModalEdit, setShowModalEdit] = useState(false); //Estado que se va a usar para editar la empresa
  
  const handleButtonShow = () =>{ //Muestra el modal de View
      setShowModal(true);
  }

  const handleCloseModal = () =>{ //Deja de mostrar el modal de View
    setShowModal(false);
  }

  const handleButtonEdit = () =>{
    setShowModalEdit(true);
  }

  const handleCloseModalEdit = () =>{
    setShowModalEdit(false);
  }

  return (
    <>
      <Card className={styles.cardContainer} style={{ width: '18rem' }}>
        <Card.Body>
          <img 
            src={
              company.logo ? company.logo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppJKxBxJI-9UWLe2VVmzuBd24zsq4_ihxZw&s"  // Si es null o undefined
            }  
            alt="" />
          <Card.Title>{company.nombre}</Card.Title>
          <Card.Subtitle>Razon social: {company.razonSocial}</Card.Subtitle>
          <div className={styles.buttonContainer}>
            <Button onClick={handleButtonShow}>Ver</Button>
            <Button onClick={handleButtonEdit}>Editar</Button>
          </div>
        </Card.Body>
      </Card>

      {showModal && (
        <>
        {/* Meto un div abajo para que impida pulsar otro elemento */}
          <div style={{
            backgroundColor : 'rgba(0, 0, 0, 0.5)',
            position: 'fixed',            
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex :'2' 
          }}>
          </div>
          <ModalViewCompany company={company} modalClose={handleCloseModal} /> 
        </>
              )}
        
        {showModalEdit && (
          <>
            <div style={{
              backgroundColor : 'rgba(0, 0, 0, 0.5)',
              position: 'fixed',            
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex :'2' 
            }}>
            </div>
            <ModalEditCompany  modalCloseEdit={handleCloseModalEdit}/>  
          </>
          
        )}
    </>
  )
}

