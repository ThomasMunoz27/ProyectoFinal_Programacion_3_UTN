import axios from "axios";
import { IProductos } from "../types/dtos/productos/IProductos";


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

    async createArticle(newArticle: IProductos) : Promise<void> {
        const response = await axios.post(`${BASE_URL}/create`, newArticle)
        return response.data
    },

    async updateArticle(articleId: number, articleActualizado: IProductos) : Promise<IProductos> {
        const response = await axios.put(`${BASE_URL}/${articleId}`, articleActualizado)
        return response.data
    },
}
