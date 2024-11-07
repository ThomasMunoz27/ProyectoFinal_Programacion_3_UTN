import { Button } from "react-bootstrap";
import { RootState } from "../../../../redux/store/store";
import { alergenoService } from "../../../../Services/alergenoServices";
import { IAlergenos } from "../../../../types/dtos/alergenos/IAlergenos";
import { AdministrationAside } from "../../../UI/Administration/Aside/AdministrationAside";
import { AdministrationHeader } from "../../../UI/Administration/Header/AdministrationHeader";
import styles from "./Alergenos.module.css";
import { FC, MouseEventHandler, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Alergenos: FC = () => {
  const [alergenos, setAlergenos] = useState<IAlergenos[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const storedSucursal = localStorage.getItem('sucursal');
  const selectedSucursal = storedSucursal
    ? JSON.parse(storedSucursal)
    : useSelector((state: RootState) => state.sucursal.selectedSucursal);

  useEffect(() => {
    const fetchAlergenos = async () => {
      const data = await alergenoService.getAllAlergenos();
      setAlergenos(data);
    };

    fetchAlergenos();
  }, []);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const BodyDeploy = () => (
    <div className={styles.BodyDeploy}>
      <ul className={styles.containerList}>
        {alergenos.map((alergeno) => (
          <li key={alergeno.id} className={styles.containerItem}>
            {alergeno.denominacion} 
            <div className={styles.containerButtons}>
            <Button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>

              </Button>
              <Button>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>

              </Button>
              <Button>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  const AddAlergenButton: FC<{ onClick: MouseEventHandler<HTMLButtonElement> }> = ({ onClick }) => (
    <button className={styles.AddAlergen} onClick={onClick}>
      Agregar un alergeno
    </button>
  );

  const ModalAddAlergen: FC<{ isVisible: boolean; closeModal: () => void }> = ({ isVisible, closeModal }) => {
    if (!isVisible) return null;

    const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      closeModal();
    };

    return (
      <form className={`${styles.ModalAddAlergen} ${isVisible ? styles.ModalAddAlergen : styles.hidden}`}>
        <div className={styles.ModalAddAlergenTitle}>Crear un alergeno</div>
        <input type="text" placeholder="Ingresa una denominación" className={styles.ModalAddAlergenInputDen} />
        <div className={styles.ModalAddAlergenImageSelector}>
          Elija una imagen:
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

  return (
    <>
      <AdministrationHeader />
      <div className={styles.mainContent}>
        <AdministrationAside />
        <div className={styles.MainDiv}>
          <div className={styles.titleContainer}>
            <h1>Alergenos</h1>
            <AddAlergenButton onClick={openModal} />
          </div>
          <BodyDeploy />
        </div>
        <ModalAddAlergen isVisible={isModalVisible} closeModal={closeModal} />
      </div>
    </>
  );
};

export default Alergenos;
