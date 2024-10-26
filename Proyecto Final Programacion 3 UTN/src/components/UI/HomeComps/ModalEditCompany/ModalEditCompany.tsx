import { Button } from "react-bootstrap";
import styles from "./ModalEditCompany.module.css";
import { ChangeEvent, FC, useState } from "react";
import { IEmpresa } from "../../../../types/dtos/empresa/IEmpresa";
import Swal from "sweetalert2";

interface IModalEditCompany {
    modalCloseEdit : () => void; //Funcion que recibe desde CardCompany para cerrar el modal
    company : IEmpresa
}

interface formValues{ // Interfaz para tipear los campos de los inputs
    id: number,
    eliminado: boolean,
    nombre : string,
    razonSocial : string,
    cuit : number,
    logo : string
}

const ModalEditCompany : FC<IModalEditCompany> = ({modalCloseEdit, company}) => {

    const[formValues, setFormValues] = useState<formValues>({ // Estado para manejar los valores de los inputs
        //Inicializo con los valores de la compania
        id : company.id,
        eliminado: company.eliminado,
        nombre : company.nombre,
        razonSocial: company.razonSocial,
        cuit: company.cuit,
        logo: company.logo || ""
    })

    //Funcion que maneja el cambio de los inputs
    const handleChange = (e : ChangeEvent<HTMLInputElement>) => { 
        const {name, value } = e.target;
        if(value.trim() !== ''){ //Evito que se ingresen espacios en blanco
            setFormValues({
                ...formValues, //Copio el estado anterior para que solo se actualice los inputs que estan llenos
                [name] : value
            });
        }
    };

    //Fucnion que maneja el envio de los campos del form a la api
    const handleSubmit = async (e : any ) => {
        e.preventDefault();
        const sendData = JSON.stringify(formValues) //Convierto a json el objeto
        try{
            const response = await fetch(`http://190.221.207.224:8090/empresas/${company.id}`, {
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
                // Aqui deberiamos re-renderizar.
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
                <h2>Editar Empresa</h2>
            </div>

            <div>
                <form action="" className={styles.containerForm} >
                    <label htmlFor="">Nombre</label>
                    <input type="text" placeholder="Nombre de la empresa" name="nombre" value={formValues.nombre} onChange={handleChange}/>
                    <label htmlFor="">Razon Social</label>
                    <input type="text" placeholder="Razon Social de la empresa" name="razonSocial" value={formValues.razonSocial} onChange={handleChange}/>
                    <label htmlFor="">Cuit</label>
                    <input type="text" placeholder="Cuit de la empresa" name="cuit" value={formValues.cuit} onChange={handleChange}/>
                    <label htmlFor="">Imagen</label>                    
                    <input type="text" placeholder="Link de imagen" name="imagen" value={formValues.logo} onChange={handleChange}/>
                    
                </form>
                <div className={styles.containerButtons}>
                    <Button onClick={handleSubmit}>Aceptar</Button>
                    <Button onClick={modalCloseEdit}>Cancelar</Button>
                </div>
                

            </div>
        </div>
    )
}

export default ModalEditCompany;