import axios from "axios"
import { ILocalidad } from "../types/ILocalidad"


const BASE_URL = `${import.meta.env.VITE_BASE_URL_API}/localidades`

export const localityService = {

    async getAllLocalitiesByProvinceId(provinceId: number): Promise<ILocalidad[]> {
        const response = await axios.get<ILocalidad[]>(`${BASE_URL}/findByProvincia/${provinceId}`);
        return response.data;
    }
}