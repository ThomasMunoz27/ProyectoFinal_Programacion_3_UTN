import axios from "axios";
import { IProvincia } from "../types/IProvincia";


const BASE_URL = `${import.meta.env.VITE_BASE_URL_API}/provincias`

export const provinceService = {

    async getAllProvincesByCountryId(countryId: number): Promise<IProvincia[]> {
        const response = await axios.get<IProvincia[]>(`${BASE_URL}/findByPais/${countryId}`);
        return response.data;
    }
}