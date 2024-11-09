import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { RootState } from "../../../../../redux/store/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { IProductos } from "../../../../../types/dtos/productos/IProductos";
import { articleService } from "../../../../../Services/articleServices";
import { ProductRow } from "../ProductRow/ProductRow";
import { Button } from "react-bootstrap";
import styles from "./ListProducts.module.css";
import { ModalAddProduct } from "../ModalAddProduct/ModalAddProduct";

export const ListProducts = () => {



    const storedSucursal = localStorage.getItem('sucursal');

    const selectedSucursal = storedSucursal ? JSON.parse(storedSucursal) : useSelector(
        (state: RootState) => state.sucursal.selectedSucursal
    )

    const [products, setProducts] = useState<IProductos[]>([]);

    const [showModalAddProduct, setShowModalAddProduct] = useState<boolean>(false);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await articleService.getArticlesBySucursalId(selectedSucursal?.id);
            setProducts(data);
        }

        fetchProducts();
    },[selectedSucursal])


    const handleShowModalAddProduct = () => {
        setShowModalAddProduct(true);
    }
    const handleCloseModalAddProduct = () => {
            setShowModalAddProduct(false);
    }

  return (
    <div>
        
        <Button
        onClick={handleShowModalAddProduct}>Agregar Producto</Button>

        <TableContainer component={Paper} style={{ marginTop: '20px', height: '82vh'}}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Precio</TableCell>
                    <TableCell>Descripción</TableCell>
                    <TableCell>Categoría</TableCell>
                    <TableCell>Habilitado</TableCell>
                    <TableCell>Acciones</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {products.map(product => (
                    <ProductRow product={product}/>

                ))}
            </TableBody>

            </Table>
        </TableContainer>
        
        {showModalAddProduct && (
            <div className={styles.backgroundDisabled}>

                <ModalAddProduct closeModal={handleCloseModalAddProduct} sucursal ={selectedSucursal}/>

            </div>
        )}
         
    </div>
  )
}

export default ListProducts;