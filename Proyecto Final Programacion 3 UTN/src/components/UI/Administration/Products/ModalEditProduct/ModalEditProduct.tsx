import { FC } from "react";
import { IProductos } from "../../../../../types/dtos/productos/IProductos";

interface IModalViewProduct {
    product: IProductos;
    modalClose: () => void
}

export const ModalEditProduct : FC<IModalViewProduct> = ({product, modalClose}) => {
    modalClose();
  return (
    <div>
        {product? "a" : "b"}
        
    </div>
  )
}
