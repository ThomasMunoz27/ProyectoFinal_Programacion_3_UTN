import axios from "axios";
import { IPais } from "../types/IPais"


const BASE_URL = `http://190.221.207.224:8090/provincias`

export const provinceService = {

    async getAllProvincesByCountryId(countryId: number): Promise<IPais> {
        const response = await axios.get<IPais>(`${BASE_URL}/findByPais/${countryId}`);
        return response.data;
    }
}