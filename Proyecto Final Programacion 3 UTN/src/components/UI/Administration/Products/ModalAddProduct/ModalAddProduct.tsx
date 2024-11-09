import { ChangeEvent, FC, useEffect, useState } from "react"
import styles from "./ModalAddProduct.module.css"
import { Button } from "react-bootstrap"
import { ICreateProducto } from "../../../../../types/dtos/productos/ICreateProducto"
import { ICategorias } from "../../../../../types/dtos/categorias/ICategorias"
import { categoryService } from "../../../../../Services/categoryServices"
import { ISucursal } from "../../../../../types/dtos/sucursal/ISucursal"
import { IAlergenos } from "../../../../../types/dtos/alergenos/IAlergenos"
import { alergenoService } from "../../../../../Services/alergenoServices"

interface IModalAddProduct{
    closeModal : () => void //Funcion para cerrar el modal
    sucursal : ISucursal
  }


export const ModalAddProduct : FC<IModalAddProduct> = ({closeModal, sucursal}) => {
    const [categories, setCategories] = useState<ICategorias[]>([])
    const [alergenos, setAlergenos] = useState<IAlergenos[]>([])


    const [newProduct, setNewProduct] = useState<ICreateProducto>({
        denominacion: "",
        precioVenta: 0,
        descripcion: "",
        habilitado: true,
        codigo: "",
        idCategoria: 0,
        idAlergenos: [],
        imagenes: []
    })

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await categoryService.getCategoriesBySucursal(sucursal.id);
            setCategories(data);
        }
        fetchCategories();
    },[])

    useEffect(() => {
        const fetchAlergenos = async () => {
            const data = await alergenoService.getAllAlergenos();
            setAlergenos(data);
        }
        fetchAlergenos();
    },[])

    const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value } = e.target;
        setNewProduct((prev) => ({...prev, 
            [name]: value,
        }));
    }

    const handleCategoryChange = (e : ChangeEvent<HTMLSelectElement>) => {
        newProduct.idCategoria = parseInt(e.target.value);
    }

  return (
    <div className={styles.containerPrincipal}>
        <div className={styles.containerTitle}>
            <h1>Agregar Producto</h1>
        </div>
        <div className={styles.containerBody}>
            <form action="">

            <label htmlFor="denominacion">Denominacion: </label>
            <input type="text" placeholder="Denominacion" value={newProduct.denominacion} name="denominacion" onChange={handleChange}/>

            <label htmlFor="precioVenta">Precio de venta: </label>
            <input type="number" placeholder="Precio de venta" value={newProduct.precioVenta} name="precioVenta" onChange={handleChange}/>

            <label htmlFor="descripcion">Descripcion: </label>
            <textarea
                id="descripcion"
                placeholder="Descripción"
                value={newProduct.descripcion}
                name="descripcion"
                onChange ={handleChange}
            ></textarea>
            
            <label htmlFor="">Código: </label>
            <input type="text" placeholder="Código" value={newProduct.codigo} name="codigo" onChange={handleChange} />

            <label htmlFor="">Categoria: </label>
            <select name="" id="" onChange={handleCategoryChange}>
                <option value="">Seleccione una Categotía</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.denominacion}</option>
                ))}
            </select>
            </form>
        </div>


        <div className={styles.containerButtons}>
          <Button onClick={closeModal}>Aceptar</Button>
          <Button onClick={closeModal}>Cancelar</Button>
      </div>
    </div>
  )
}
