import { Button } from "react-bootstrap";
import style from "./ModalAddSucursal.module.css";
import { ChangeEvent, FC, useState } from "react";
import { ICreateSucursal } from "../../../../types/dtos/sucursal/ICreateSucursal";
import Swal from "sweetalert2";
import { sucursalService } from "../../../../Services/SucursalServices/sucursalService";

interface IModalAdd {
    closeModalAdd: () => void; //Funcion que recibe desde CardCompany para cerrar el modal
}

const ModalAddSucursal: FC<IModalAdd> = ({ closeModalAdd }) => {
    const [newSucursal, setNewSucursal] = useState<ICreateSucursal>({
        nombre: '',
        horarioApertura: '',
        horarioCierre: '',
        esCasaMatriz: false,
        latitud: 0,
        longitud: 0,
        domicilio: {
            calle: '',
            numero: 0,
            cp: 0,
            piso: 0,
            nroDpto: 0,
            idLocalidad: 0
        },
        idEmpresa: 0,
        logo: null,
    });

    //Funcion que maneja el cambio de los inputs
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewSucursal((prev) => ({
            ...prev,
            [name]: name === 'cuit' ? Number(value) : value,
        }));
    };

    //Funcion que maneja el envio de los campos del form a la api
    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!newSucursal.nombre || !newSucursal.esCasaMatriz || (!newSucursal.horarioCierre || newSucursal.latitud <= 0)) {
            alert("Complete todos los campos");
            return;
        }

        try {
            console.log("Datos enviados:", newSucursal);
            await sucursalService.createSucursal(newSucursal);

            Swal.fire({
                icon: "success",
                title: "Empresa añadida",
                showConfirmButton: false,
                timer: 1500,
            });
            closeModalAdd();
            window.location.reload();
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
        <div className={style.containerPrincipal}>
            <div className={style.containerTitle}>
                <h2>Agregar Sucursal</h2>
            </div>

            <div>
                <form action="" className={style.containerForm}>
                    <label htmlFor="">Horario de apertura</label>
                    <input type="text" placeholder="Horario Apertura" name="nombre" value={newSucursal.horarioApertura} onChange={handleChange} />
                    <label htmlFor="">Horario de cierre</label>
                    <input type="text" placeholder="Horario Cierre" name="razonSocial" value={newSucursal.horarioCierre} onChange={handleChange} />
                    <label htmlFor="">Calle</label>
                    <input type="text" placeholder="Calle de la sucursal" name="calle" value={newSucursal.domicilio.calle} onChange={handleChange} />
                    <label htmlFor="">Imagen</label>
                    <input type="text" placeholder="Link de imagen" name="logo" value={newSucursal.logo || ""} onChange={handleChange} />
                </form>
                <div className={style.containerButtons}>
                    <Button onClick={handleSubmit}>Aceptar</Button>
                    <Button onClick={closeModalAdd}>Cancelar</Button>
                </div>
            </div>
        </div>
    );
};

export default ModalAddSucursal;
