import axios from 'axios';
import { ISucursal } from '../types/dtos/sucursal/ISucursal';
import { ICreateSucursal } from '../types/dtos/sucursal/ICreateSucursal';
import { IUpdateSucursal } from '../types/dtos/sucursal/IUpdateSucursal';


const BASE_URL = `${import.meta.env.VITE_BASE_URL_API}/sucursales`;  // URL base de tu API

export const sucursalService = {
    async getSucursalesByCompany(companyId: number): Promise<ISucursal[]> {
        try {
            const response = await axios.get<ISucursal[]>(`${BASE_URL}/porEmpresa/${companyId}`);
            return response.data;
        } catch (error) {
            console.error('Error al obtener las sucursales:', error);
            throw new Error('No se pudieron obtener las sucursales');
        }
    },

    async getCasaMatriz(companyId: number): Promise<boolean> {
        try {
            const response = await axios.get<boolean>(`${BASE_URL}/existCasaMatriz/${companyId}`);
            return response.data;
        } catch (error) {
            console.error('Error al obtener la sucursal:', error);
            throw new Error('No se pudo obtener la sucursal');
        }
    },

    async createSucursal(nuevaSucursal: ICreateSucursal): Promise<ISucursal> {
        const response = await axios.post<ISucursal>(`${BASE_URL}/create`, nuevaSucursal);
        return response.data;
    },

    async updateSucursal(sucursalId: number, sucursalActualizada: IUpdateSucursal): Promise<ISucursal> {
        const response = await axios.put<ISucursal>(`${BASE_URL}/update/${sucursalId}`, sucursalActualizada);
        return response.data;
    }
};