
import { ChangeEvent, FC, useState } from 'react';
import styles from './ModalAddAlergen.module.css';
import { ICreateAlergeno } from '../../../../types/dtos/alergenos/ICreateAlergeno';
import { alergenoService } from '../../../../Services/alergenoServices';
import Swal from 'sweetalert2';

interface IModalAdd{
    closeModalAdd : () => void //Funcion que recibe desde CardCompany para cerrar el modal
}

const ModalAddAlergen : FC<IModalAdd> = ({closeModalAdd}) =>{
    const initialState = {
        id: 273,
        denominacion : '',
        eliminado: false,
        imagen: {
            id: 0,
            eliminado: false,
            name: 'name',
            url: 'imagen',
        },
    }
    const [newAlergen, setNewAlergen] = useState<ICreateAlergeno>(initialState)
    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        const {name, value } = e.target;
        setNewAlergen((prev) => ({...prev, 
            [name]: value,
        }));
    }
    const handleSubmit = async (e : React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();

        if(newAlergen.denominacion || !newAlergen.imagen){
            alert("Complete todos los campos");
            return;
        }
        
        try{
            console.log("Datos enviados:", newAlergen);
            await alergenoService.createAlergeno(newAlergen);
            
            
            Swal.fire({
                icon: "success",
                title: "Alergeno agregado",
                showConfirmButton: false,
                timer: 1500,
                willClose: ()=>{
                    closeModalAdd();
                    window.location.reload() 
                }
                });
        }catch(error){
            console.error("El problema es: ", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
    }




  return (
    <form className={styles.ModalAddAlergen}>
        <div className={styles.ModalAddAlergenTitle}>Crear un alergeno</div>
        <input type="text" placeholder="Ingresa una denominación" className={styles.ModalAddAlergenInputDen} onChange={handleChange}/>
        <div className={styles.ModalAddAlergenImageSelector}>
          Elija una imagen:
          <input type="file" onChange={handleChange} />
          <img className={styles.ModalAddAlergenImage} src="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=no_photography" />
        </div>
        <div className={styles.ModalAddAlergenButtons}>
          <button type="submit" className={styles.ModalConfirm} onClick={handleSubmit}>CONFIRMAR</button>
          <button className={styles.ModalCancel} onClick={closeModalAdd}>CANCELAR</button>
        </div>
      </form>
  )
}

export default ModalAddAlergen