import axios, { AxiosResponse } from "axios"
import { IImagen } from "../types/IImagen";


const BASE_URL = `http://190.221.207.224:8090/images`

export const imageService = {

    async uploadImage(newImage: IImagen): Promise<IImagen> {
        const response = await axios.post<IImagen>(`${BASE_URL}/uploads`, newImage);
        return response.data;
    },

    async deleteImage(publicId: string): Promise<AxiosResponse<any>> {
        try {
          const url = `${BASE_URL}/deleteImg?publicId=${publicId}`;
          const response = await axios.post(url);
          return response;
        } catch (error) {
          console.error('Error al eliminar la imagen:', error);
          throw error;
        }
      }
}