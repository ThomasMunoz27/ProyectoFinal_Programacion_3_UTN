import { TableCell, TableRow } from "@mui/material"
import { FC, useState } from "react";
import { Button } from "react-bootstrap"
import { ModalViewProduct } from "../ModalViewProduct/ModalViewProduct";
import { IProductos } from "../../../../../types/dtos/productos/IProductos";
import styles from "./ProductRow.module.css"
import { ModalEditProduct } from "../ModalEditProduct/ModalEditProduct";
import Swal from "sweetalert2";
import { articleService } from "../../../../../Services/articleServices";

interface IProductRow {
  product: IProductos
}

export const ProductRow : FC<IProductRow> = ({ product }) => {
  const [showModalViewProduct, setShowModalViewProduct] = useState<boolean>(false);
  const [showModalEditProduct, setShowModalEditProduct] = useState<boolean>(false);


  const handleShowModalViewProduct = () => {
      setShowModalViewProduct(true);
  }
  const handleCloseModalViewProduct = ()=> {
      setShowModalViewProduct(false);
  }


  const handleShowModalEditProduct = () => {
    setShowModalEditProduct(true);
  }
  const handleCloseModalEditProduct = () => {
      setShowModalEditProduct(false);
  }

  const handleDeleteProduct = async () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
  
    const result = await swalWithBootstrapButtons.fire({
      title: "¿Estás seguro?",
      text: "¡No se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "No, cancelar",
      reverseButtons: true,
    });
  
    if (result.isConfirmed) {
      try {
        // Llamada a la API para eliminar el producto
        await articleService.deleteArticle(product.id);
  
        // Mostrar mensaje de éxito
        await swalWithBootstrapButtons.fire({
          title: "¡Eliminado!",
          text: "El producto ha sido eliminado.",
          icon: "success",
        });
  
        // Aquí puedes llamar a una función para actualizar la lista de productos o cerrar el modal
      } catch (error) {
        console.error("Error al eliminar el producto:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se pudo eliminar el producto. Inténtalo nuevamente.",
        });
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire({
        title: "Cancelado",
        text: "El producto no fue eliminado :)",
        icon: "error",
      });
    }
  };
  

  return (
    <>
    <TableRow key={product.id}>
                        <TableCell>{product.denominacion}</TableCell>
                        <TableCell>{product.precioVenta}</TableCell>
                        <TableCell>{product.descripcion}</TableCell>
                        <TableCell>{product.categoria.denominacion}</TableCell>
                        <TableCell>{product.habilitado ? 'Si' : 'No'}</TableCell>
                        <TableCell>


                            <Button onClick={handleShowModalViewProduct}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
                            </Button>

                            <Button onClick={handleShowModalEditProduct}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></Button>

                            <Button onClick={handleDeleteProduct}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
                            </Button>

                        </TableCell>


                        

                    </TableRow>
                    {showModalViewProduct && (
                            <>
                                <div className={styles.backgroundDisabled}>

                                    <ModalViewProduct product ={product} modalClose={handleCloseModalViewProduct} />

                                </div>
                            </>

                        )}

                        {showModalEditProduct && ( 
                            <>
                                <div className={styles.backgroundDisabled}>

                                    <ModalEditProduct product ={product} modalClose={handleCloseModalEditProduct} />

                                </div>
                            </>

                        )}
    </>
  )
}
