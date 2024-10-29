import axios from 'axios';
import { ISucursal } from '../../types/dtos/sucursal/ISucursal';
import { ICreateSucursal } from '../../types/dtos/sucursal/ICreateSucursal';

const BASE_URL = 'http://190.221.207.224:8090';  // URL base de tu API

export const sucursalService = {
    async getSucursales(companyId: number): Promise<ISucursal[]> {
        try {
            const response = await axios.get<ISucursal[]>(`${BASE_URL}/sucursales/porEmpresa/${companyId}`);
            return response.data;
        } catch (error) {
            console.error('Error al obtener las sucursales:', error);
            throw new Error('No se pudieron obtener las sucursales');
        }
    },
    // Puedes agregar más métodos para otras peticiones (POST, PUT, DELETE)
    async createSucursal(nuevaEmpresa: ICreateSucursal): Promise<ISucursal> {
        const response = await axios.post<ISucursal>(BASE_URL, nuevaEmpresa);
        return response.data;
      },
    
};