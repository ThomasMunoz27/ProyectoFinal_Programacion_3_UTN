import { Button } from "react-bootstrap";
import styles from "./ModalEditSucursal.module.css";
import { ChangeEvent, FC, useState } from "react";
import Swal from "sweetalert2";
import { IUpdateSucursal } from "../../../../types/dtos/sucursal/IUpdateSucursal";
import { ISucursal } from "../../../../types/dtos/sucursal/ISucursal";

interface IModalEditSucursal {
    modalCloseEdit : () => void; //Funcion que recibe desde CardCompany para cerrar el modal
    sucursal : ISucursal
}

const ModalEditSucursal : FC<IModalEditSucursal> = ({modalCloseEdit, sucursal}) => {

    const [formValues, setFormValues] = useState<IUpdateSucursal>({
        nombre: sucursal.nombre || "", 
        idEmpresa: sucursal.empresa?.id || 0, 
        id: sucursal.id || 0,
        eliminado: sucursal.eliminado || false,
        latitud: sucursal.latitud || 0,
        longitud: sucursal.longitud || 0,
        domicilio: {
            id: sucursal.domicilio?.id || 0,
            calle: sucursal.domicilio?.calle || "",
            numero: sucursal.domicilio?.numero || 0,
            cp: sucursal.domicilio?.cp || 0,
            piso: sucursal.domicilio?.piso || 0,
            nroDpto: sucursal.domicilio?.nroDpto || 0,
            idLocalidad: sucursal.domicilio?.localidad.id || 0
        },
        logo: sucursal.logo || null,
        categorias: sucursal.categorias || [],
        esCasaMatriz: sucursal.esCasaMatriz || false,
        horarioApertura: sucursal.horarioApertura || "",
        horarioCierre: sucursal.horarioCierre || "",
    })

    //Funcion que maneja el cambio de los inputs
    const handleChange = (e : ChangeEvent<HTMLInputElement>) => { 
        const {name, value } = e.target;
         //Evito que se ingresen espacios en blanco
            setFormValues({
                ...formValues, //Copio el estado anterior para que solo se actualice los inputs que estan llenos
                [name] : value
            });
        
    };

    //Funcion que maneja el envio de los campos del form a la api
    const handleSubmit = async (e :  React.MouseEvent<HTMLButtonElement> ) => {
        e.preventDefault();
        const sendData = JSON.stringify(formValues) //Convierto a json el objeto
        try{
            const response = await fetch(`http://190.221.207.224:8090/empresas/${sucursal.id}`, {
                method : 'PUT', //Metodo para actualizar
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: sendData
            });

            if(response.ok){
                Swal.fire({
                    icon: "success",
                    title: "Empresa actualizada",
                    showConfirmButton: false,
                    timer: 1500
                    });
                modalCloseEdit();
                window.location.reload() 
            }else{
                alert("Error al actualizar la empresa")
            }
        }catch(error){
            console.error("El problema es: ", error)
            alert("Hubo un problema")
        }
    }
    

    return(
        <div className={styles.containerPrincipal}>
            <div className={styles.containerTitle}>
                <h2>Editar Sucursal</h2>
            </div>

            <div>
                <form action="" className={styles.containerForm} >
                    <label htmlFor="">Nombre</label>
                    <input type="text" placeholder="Nombre de la empresa" name="nombre" value={formValues.nombre} onChange={handleChange}/>
                    <label htmlFor="">Razon Social</label>
                    <input type="text" placeholder="Razon Social de la empresa" name="razonSocial" value={formValues.nombre} onChange={handleChange}/>
                    <label htmlFor="">Cuit</label>
                    <input type="text" placeholder="Cuit de la empresa" name="cuit" value={formValues.idEmpresa} onChange={handleChange}/>
                    <label htmlFor="">Imagen</label>                    
                    <input type="text" placeholder="Link de imagen" name="logo" value={formValues.logo || ""} onChange={handleChange}/>
                    
                </form>
                <div className={styles.containerButtons}>
                    <Button onClick={handleSubmit}>Aceptar</Button>
                    <Button onClick={modalCloseEdit}>Cancelar</Button>
                </div>
                

            </div>
        </div>
    )
}

export default ModalEditSucursal;