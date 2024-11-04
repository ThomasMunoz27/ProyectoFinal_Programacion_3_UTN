import axios from "axios"
import { ILocalidad } from "../types/ILocalidad"


const BASE_URL = `http://190.221.207.224:8090/localidades`

export const localityService = {

    async getAllLocalitiesByProvinceId(provinceId: number): Promise<ILocalidad[]> {
        const response = await axios.get<ILocalidad[]>(`${BASE_URL}/findByProvincia/${provinceId}`);
        return response.data;
    }
}