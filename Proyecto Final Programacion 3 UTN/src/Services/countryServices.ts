import axios from "axios";
import { IPais } from "../types/IPais"


const BASE_URL = `http://190.221.207.224:8090/paises`

export const countryService = {

    async getAllCountries(): Promise<IPais> {
        const response = await axios.get<IPais>(`${BASE_URL}`);
        return response.data;
    }
}