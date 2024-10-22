import { IDomicilio } from "../types/IDomicilio";
import { localitiesData } from "./localitiesData";

export const adressData: IDomicilio[]=[
    {
        id: 1,
        calle:"Bernardo Ortiz",
        numero: 4450,
        cp: 5501,
        piso: 0,
        eliminado: false,
        nroDpto: 0,
        localidad : localitiesData[1]
        }
]