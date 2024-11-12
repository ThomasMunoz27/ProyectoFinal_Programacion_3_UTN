import axios from "axios";
import { IProductos } from "../types/dtos/productos/IProductos";
import { ICreateProducto } from "../types/dtos/productos/ICreateProducto";
import { IUpdateProducto } from "../types/dtos/productos/IUpdateProducto";



const BASE_URL = `${import.meta.env.VITE_BASE_URL_API}/articulos`


export const articleService = {
    async getArticleById() : Promise<IProductos> {
        const response = await axios.get(BASE_URL)
        return response.data;
    },

    async getArticlesBySucursalId(sucursalId: number) : Promise<IProductos[]> {
        const response = await axios.get<IProductos[]>(`${BASE_URL}/porSucursal/${sucursalId}`)
        return response.data
    },

    async createArticle(newArticle: ICreateProducto) : Promise<void> {
        const response = await axios.post(`${BASE_URL}/create`, newArticle)
        return response.data
    },

    async updateArticle(articleId: number, articleActualizado: IUpdateProducto) : Promise<IProductos> {
        const response = await axios.put(`${BASE_URL}/update/${articleId}`, articleActualizado)
        return response.data
    },

    async deleteArticle(articleId: number) : Promise<void> {
        const response = await axios.delete(`${BASE_URL}/${articleId}`)
        return response.data
    }
}
