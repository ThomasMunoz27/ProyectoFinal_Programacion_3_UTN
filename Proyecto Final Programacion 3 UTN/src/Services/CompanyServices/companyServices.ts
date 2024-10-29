import axios from 'axios';
import { IEmpresa } from '../../types/dtos/empresa/IEmpresa';
import { ICreateEmpresaDto } from '../../types/dtos/empresa/ICreateEmpresaDto';

const BASE_URL = 'http://190.221.207.224:8090/empresas';

export const companyService = {
    // Obtener una empresa por ID (GET)
    async getEmpresa(id: number): Promise<IEmpresa> {
        const response = await axios.get<IEmpresa>(`${BASE_URL}/${id}`);
        return response.data;
    },
  
    // Obtener todas las empresas (GET)
    async getEmpresas(): Promise<IEmpresa[]> {
        const response = await axios.get<IEmpresa[]>(BASE_URL);
        return response.data;
    },
  
    // Crear una nueva empresa (POST)
    async createCompany(nuevaEmpresa: ICreateEmpresaDto): Promise<IEmpresa> {
      const response = await axios.post<IEmpresa>(BASE_URL, nuevaEmpresa);
      return response.data;
    },
  
    // Actualizar una empresa existente (PUT)
    async updateEmpresa(id: number, empresaActualizada: IEmpresa): Promise<IEmpresa> {
      const response = await axios.put<IEmpresa>(`${BASE_URL}/${id}`, empresaActualizada);
      return response.data;
    }
  };