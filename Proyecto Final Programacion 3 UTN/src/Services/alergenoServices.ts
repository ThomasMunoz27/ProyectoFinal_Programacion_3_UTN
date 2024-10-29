import axios from "axios"


const BASE_URL = `http://190.221.207.224:8090/alergenos`

export const alergenoService = {
    async getAllAlergenos(){
        const response = await axios.get(BASE_URL)
        return response.data;
    }
}