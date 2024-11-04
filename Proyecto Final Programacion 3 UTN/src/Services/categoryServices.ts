import axios from "axios";
import { ICategorias } from "../types/dtos/categorias/ICategorias";



const BASE_URL = 'http://190.221.207.224:8090/categorias';

export const categoryService = {

    async getCategoriesByCompany(companyId: number): Promise<ICategorias[]> {
        const response = await axios.get<ICategorias[]>(`${BASE_URL}/allCategoriasPorEmpresa/${companyId}`);
        return response.data;
    },

    async getOneCategory(categoryId: number): Promise<ICategorias> {
        const response = await axios.get<ICategorias>(`${BASE_URL}/${categoryId}`);
        return response.data;
    },

    async getCategoriesBySucursal(sucursalId: number|undefined): Promise<ICategorias[]> {
        const response = await axios.get<ICategorias[]>(`${BASE_URL}/allCategoriasPorSucursal/${sucursalId}`);
        return response.data;
    },

    async updateCategory(categoryId: number, categoryActualizada: ICategorias): Promise<ICategorias> {
        const response = await axios.put<ICategorias>(`${BASE_URL}/update/${categoryId}`, categoryActualizada);
        return response.data;
    },

    async createCategory(newCategory: ICategorias): Promise<ICategorias> {
        const response = await axios.post<ICategorias>(`${BASE_URL}/create`, newCategory)
        return response.data;
    },

    async getAllSubCategoriesByCategoryId(categoryId: number, page: number = 1): Promise<ICategorias[]> {
        const response = await axios.get<ICategorias[]>(`${BASE_URL}/allSubCategoriasPorCategoriaPadre/${categoryId}/${page}`);
        return response.data;
    }
}