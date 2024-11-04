import axios from "axios";
import { IPais } from "../types/IPais"
import { IProvincia } from "../types/IProvincia";


const BASE_URL = `http://190.221.207.224:8090/provincias`

export const provinceService = {

    async getAllProvincesByCountryId(countryId: number): Promise<IProvincia[]> {
        const response = await axios.get<IProvincia[]>(`${BASE_URL}/findByPais/${countryId}`);
        return response.data;
    }
}