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
            <Button>👁</Button><Button>✏</Button><Button>🗑</Button>
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
