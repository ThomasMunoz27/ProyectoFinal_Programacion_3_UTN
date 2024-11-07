import axios from "axios";
import { IPais } from "../types/IPais"


const BASE_URL = `${import.meta.env.VITE_BASE_URL_API}/paises`

export const countryService = {

    async getAllCountries(): Promise<IPais[]> {
        const response = await axios.get<IPais[]>(`${BASE_URL}`);
        return response.data;
    }
}