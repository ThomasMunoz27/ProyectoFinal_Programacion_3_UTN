import { FC } from "react";
import { IProductos } from "../../../../../types/dtos/productos/IProductos";
import styles from "./ModalViewProduct.module.css";
import { Button } from "react-bootstrap";

interface IModalViewProduct {
    product: IProductos;
    modalClose: () => void
}

export const ModalViewProduct: FC<IModalViewProduct> = ({product, modalClose}) => {
  return (
    <div className={styles.containerPrincipalOn}>
        <div className={styles.containerTitle}>
            <h2>{product.denominacion}</h2>
        </div>
        
        <div className={ styles.containerData }>
            <p>{product.descripcion}</p>
            <p>Precio: ${product.precioVenta}</p>
            

            <div className={styles.containerLogo}>
                
                    <img 
                    src={
                        product.imagenes[0]? product.imagenes[0].url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppJKxBxJI-9UWLe2VVmzuBd24zsq4_ihxZw&s"  // Si es null o undefined
                        }     
                    alt="" />
            </div>

        </div>
        <div className={styles.containerButton}>
            <Button onClick={modalClose}>Cerrar</Button>
        </div>

</div>
  )
}
