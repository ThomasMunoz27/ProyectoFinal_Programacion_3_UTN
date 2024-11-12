import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { RootState } from "../../../../../redux/store/store";
import { useSelector } from "react-redux";
import { ChangeEvent, useEffect, useState } from "react";

import { IProductos } from "../../../../../types/dtos/productos/IProductos";
import { articleService } from "../../../../../Services/articleServices";
import { ProductRow } from "../ProductRow/ProductRow";
import { Button } from "react-bootstrap";
import styles from "./ListProducts.module.css";
import { ModalAddProduct } from "../ModalAddProduct/ModalAddProduct";
import { ICategorias } from "../../../../../types/dtos/categorias/ICategorias";
import { categoryService } from "../../../../../Services/categoryServices";

export const ListProducts = () => {



    const storedSucursal = localStorage.getItem('sucursal');

    const selectedSucursal = storedSucursal ? JSON.parse(storedSucursal) : useSelector(
        (state: RootState) => state.sucursal.selectedSucursal
    )

    const [products, setProducts] = useState<IProductos[]>([]);
    const [categories, setCategories] = useState<ICategorias[]>([]);
    const [showModalAddProduct, setShowModalAddProduct] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<ICategorias | undefined>(undefined);

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

    const handleCategoryChange = (e : ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(categories.find(category => category.denominacion === e.target.value));
        console.log(selectedCategory);
        
    }

  return (
    <div>
        
        <Button
        onClick={handleShowModalAddProduct}>Agregar Producto</Button>

        <select onChange={handleCategoryChange}>
            <option value="">Filtrar por categoría</option>
            {categories.map(category =>(
                <option key={category.id} >{category.denominacion}</option>
            ))}
        </select>

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
                    <ProductRow key={product.id} product={product} />

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