import { Button } from "react-bootstrap";
import styles from "./ModalEditCompany.module.css";
import { ChangeEvent, FC, useState } from "react";
import { IEmpresa } from "../../../../types/dtos/empresa/IEmpresa";
import { IUpdateEmpresaDto } from "../../../../types/dtos/empresa/IUpdateEmpresaDto";

interface IModalEditCompany {
    modalCloseEdit : () => void; //Funcion que recibe desde CardCompany para cerrar el modal
    company : IEmpresa
}

const ModalEditCompany : FC<IModalEditCompany> = ({modalCloseEdit, company}) => {

    const[formValues, setFormValues] = useState<IUpdateEmpresaDto>({ // Estado para manejar los valores de los inputs
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
    const handleSubmit = async (e :  React.MouseEvent<HTMLButtonElement> ) => {
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
                
                alert("Empresa actualizada");
                modalCloseEdit();
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
                    <input type="text" placeholder="Link de imagen" name="imagen" value={formValues.logo || ""} onChange={handleChange}/>
                    
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