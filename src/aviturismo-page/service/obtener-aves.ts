import { turismoApi } from "../../apis/turismo.api";
import type { Ave } from "../interface/Ave";

export const obtenerAve = async (): Promise<Ave[]> => {
  const response = await turismoApi<Ave[]>("/aves");

  response.data.forEach((ave) => {
    console.log(ave.nombre_comun);
  });

  return response.data;
};
