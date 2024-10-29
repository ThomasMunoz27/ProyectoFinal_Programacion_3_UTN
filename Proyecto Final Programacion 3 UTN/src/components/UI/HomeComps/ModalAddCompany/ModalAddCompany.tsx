import { Button } from "react-bootstrap";
import style from "./ModalAddCompany.module.css";
import { ChangeEvent, FC, useState } from "react";
import { ICreateEmpresaDto } from "../../../../types/dtos/empresa/ICreateEmpresaDto";
import Swal from "sweetalert2";
import { companyService } from "../../../../Services/CompanyServices/companyServices";

interface IModalAdd{
    closeModalAdd : () => void //Funcion que recibe desde CardCompany para cerrar el modal
}


const ModalAddCompany : FC<IModalAdd> = ({closeModalAdd}) =>{

    const [newCompany, setNewCompany] = useState<ICreateEmpresaDto>({
        nombre : '',
        razonSocial: '',
        cuit: 0,
        logo : '',
    })

    //Funcion que maneja el cambio de los inputs
    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        const {name, value } = e.target;
        setNewCompany((prev) => ({...prev, 
            [name]: name === 'cuit' ? Number(value) : value,
        }));
    }

    //Funcion que majea el envio de los campos del form a la api
    const handleSubmit = async (e : React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();

        if(!newCompany.nombre || !newCompany.razonSocial || (!newCompany.cuit || newCompany.cuit <= 0) /* || !newCompany.logo */){
            alert("Complete todos los campos");
            return;
        }
        
        try{
            console.log("Datos enviados:", newCompany);
            await companyService.createCompany(newCompany);
            
            
                Swal.fire({
                    icon: "success",
                    title: "Empresa añadida",
                    showConfirmButton: false,
                    timer: 1500
                    });
                closeModalAdd();
                window.location.reload();
        }catch(error){
            console.error("El problema es: ", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
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
                    <input type="text" placeholder="Nombre de la empresa" name="nombre" value={newCompany.nombre} onChange={handleChange}/>
                    <label htmlFor="">Razon Social</label>
                    <input type="text" placeholder="Razon Social de la empresa" name="razonSocial" value={newCompany.razonSocial} onChange={handleChange}/>
                    <label htmlFor="">Cuit</label>
                    <input type="text" placeholder="Cuit de la empresa" name="cuit" value={newCompany.cuit} onChange={handleChange}/>
                    <label htmlFor="">Imagen</label>                    
                    <input type="text"  placeholder="Link de imagen" name="logo" value={newCompany.logo || ""} onChange={handleChange}/>
                    
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