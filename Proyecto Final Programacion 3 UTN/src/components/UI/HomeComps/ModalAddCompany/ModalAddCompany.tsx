import { Button } from "react-bootstrap";
import style from "./ModalAddCompany.module.css";
import { ChangeEvent, FC, useState } from "react";
import { ICreateEmpresaDto } from "../../../../types/dtos/empresa/ICreateEmpresaDto";
import Swal from "sweetalert2";

interface IModalAdd{
    closeModalAdd : () => void //Funcion que recibe desde CardCompany para cerrar el modal
}


const ModalAddCompany : FC<IModalAdd> = ({closeModalAdd}) =>{

    const [values, setValues] = useState<ICreateEmpresaDto>({
        nombre : '',
        razonSocial: '',
        cuit: 0,
        logo : '',
    })

    //Funcion que maneja el cambio de los inputs
    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        const {name, value } = e.target;
        setValues({
            ...values, 
            [name] : value
        });
    }

    //Funcion que majea el envio de los campos del form a la api
    const handleSubmit = async (e : React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();

        if(!values.nombre || !values.razonSocial || (!values.cuit || values.cuit <= 0) || !values.logo){
            alert("Complete todos los campos");
            return;
        }

        //Convierto los datos a JSON
        const sendData = JSON.stringify(values);

        try{
            const response = await fetch('http://190.221.207.224:8090/empresas',{
                method : 'POST', //Metodo para crear
                headers : {
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
                closeModalAdd();
                window.location.reload()
            }else{
                alert("Error al crear la empresa");
            }

        }catch(error){
            console.error("El problema es: ", error);
            alert("Hubo un problema");
        }
    }

    return(
        <div className={style.containerPrincipal}>
        <div className={style.containerTitle}>
                <h2>Agregar Empresa</h2>
            </div>

            <div>
                <form action=""  className={style.containerForm}>
                    <label htmlFor="">Nombre</label>
                    <input type="text" placeholder="Nombre de la empresa" name="nombre" value={values.nombre} onChange={handleChange}/>
                    <label htmlFor="">Razon Social</label>
                    <input type="text" placeholder="Razon Social de la empresa" name="razonSocial" value={values.razonSocial} onChange={handleChange}/>
                    <label htmlFor="">Cuit</label>
                    <input type="text" placeholder="Cuit de la empresa" name="cuit" value={values.cuit} onChange={handleChange}/>
                    <label htmlFor="">Imagen</label>                    
                    <input type="text"  placeholder="Link de imagen" name="logo" value={values.logo || ""} onChange={handleChange}/>
                    
                </form>
                <div className={style.containerButtons}>
                    <Button onClick={handleSubmit}>Aceptar</Button>
                    <Button onClick={closeModalAdd}>Cancelar</Button>
                </div>
                

            </div>
        </div>
    )
}

export default ModalAddCompany;