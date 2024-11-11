import { ChangeEvent, FC, useState } from 'react';
import styles from './ModalAddAlergen.module.css';
import { ICreateAlergeno } from '../../../../types/dtos/alergenos/ICreateAlergeno';
import { alergenoService } from '../../../../Services/alergenoServices';
import Swal from 'sweetalert2';
import { IImagen } from '../../../../types/IImagen';
import { UploadImage } from '../../../UploadImage';

interface IModalAdd {
  closeModalAdd: () => void;
}

const ModalAddAlergen: FC<IModalAdd> = ({ closeModalAdd }) => {
  const [imageAlergeno, setImageAlergeno] = useState<IImagen | null>(null);

  const initialState = {
    denominacion: '',
    imagen: imageAlergeno ? imageAlergeno : null
  };
  const [newAlergen, setNewAlergen] = useState<ICreateAlergeno>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAlergen((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!newAlergen.denominacion) {
      alert("No pudo crearse");
      return;
    }

    try {
      // Crea el objeto del alérgeno incluyendo la imagen cargada (si existe)
      const alergenoToCreate = {
        ...newAlergen,
        imagen: imageAlergeno || null, // Utiliza directamente la imagen subida
      };

      // Crear el alérgeno en el servidor
      await alergenoService.createAlergeno(alergenoToCreate);

      Swal.fire({
        icon: "success",
        title: "Alergeno agregado",
        showConfirmButton: false,
        timer: 1500,
        willClose: () => {
          closeModalAdd();
          window.location.reload();
        }
      });
    } catch (error) {
      console.error("El problema es: ", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <>
      <form className={styles.ModalAddAlergen}>
        <div className={styles.ModalAddAlergenTitle}>Crear un alergeno</div>

        <input
          type="text"
          name="denominacion"
          placeholder="Ingresa una denominación"
          className={styles.ModalAddAlergenInputDen}
          onChange={handleChange}
        />

        <UploadImage
          imageObjeto={imageAlergeno}
          setImageObjeto={setImageAlergeno}
          typeElement="alergenos"
        />

        <img
          className={styles.ModalAddAlergenImage}
          src="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=no_photography"
        />

        <div className={styles.ModalAddAlergenButtons}>
          <button className={styles.ModalConfirm} onClick={handleSubmit}>
            CONFIRMAR
          </button>
          <button className={styles.ModalCancel} onClick={closeModalAdd}>
            CANCELAR
          </button>
        </div>
      </form>
    </>
  );
};

export default ModalAddAlergen;
