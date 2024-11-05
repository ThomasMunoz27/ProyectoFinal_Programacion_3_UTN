import { AdministrationAside } from "../../../UI/Administration/Aside/AdministrationAside";
import { AdministrationHeader } from "../../../UI/Administration/Header/AdministrationHeader";
import styles from "./Alergenos.module.css";
import { FC, MouseEventHandler, useState } from "react";

// Función para mostrar alérgenos (no está implementada)
function showAlergens(alergen: HTMLCollection) {
  const alergens = document.getElementsByClassName("Alergen");
}

const Alergen = () => {
  return (
    <div className={styles.Alergen}>
      {/* Aquí puedes añadir contenido para cada alergeno */}
    </div>
  );
};

const BodyDeploy = () => {
  return (
    <div className={styles.BodyDeploy}>
      {/* Aquí puedes añadir contenido para el cuerpo */}
    </div>
  );
};

const AddAlergen = () => {
  return (
    <div className={styles.AddAlergen}>
      {/* Aquí puedes añadir contenido para agregar alérgenos */}
    </div>
  );
};

type AddAlergenButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  closeModal: () => void; // Aquí
};

type ModalAddAlergenProps = {
  closeModal: () => void;
  isVisible: boolean;
};

const ModalAddAlergen: FC<ModalAddAlergenProps> = ({ isVisible, closeModal }) => {
  if (!isVisible) return null;

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Evita la recarga de la página
    closeModal(); // Cierra el modal
  };

  return (
    <form className={`${styles.ModalAddAlergen} ${isVisible ? styles.ModalAddAlergenActive : ''}`}>
      <div className={styles.ModalAddAlergenTitle}>Crear un alergeno</div>
      <input type="text" placeholder="Ingresa una denominación" className={styles.ModalAddAlergenInputDen} />
      <div className={styles.ModalAddAlergenImageSelector}>
        Eliga una imagen:
        <input type="file" />
        <img className={styles.ModalAddAlergenImage} src="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=no_photography" />
      </div>
      <div className={styles.ModalAddAlergenButtons}>
        <button className={styles.ModalCancel} onClick={handleCancel}>CANCELAR</button>
        <button type="submit" className={styles.ModalConfirm}>CONFIRMAR</button>
      </div>
    </form>
  );
};

const AddAlergenButton: FC<AddAlergenButtonProps> = ({ onClick, closeModal }) => {
  return (
    <button className={styles.AddAlergen} onClick={onClick}>Agregar un alergeno</button>
  );
};

export const Alergenos = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const MainDiv: FC = () => {
    return (
      <div className={styles.MainDiv}>
        <h1 className={styles.MainDivTitle}>Alergenos</h1>
        <AddAlergenButton onClick={openModal} closeModal={closeModal} /> {/* Aquí se pasa closeModal */}
        <BodyDeploy />
      </div>
    );
  };

  return (
    <>
      <AdministrationHeader />
      <div className={styles.mainContent}>
        <AdministrationAside />

        <div className={styles.contentHero}>
          Alergenos
        </div>

        <MainDiv />
        <ModalAddAlergen isVisible={isModalVisible} closeModal={closeModal} />

      </div>
    </>
  );
};
