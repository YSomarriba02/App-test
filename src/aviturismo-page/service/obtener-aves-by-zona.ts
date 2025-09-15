import { turismoApi } from "../../apis/turismo.api";
import type { Ave } from "../interface/Ave";

export const obtenerAvesPorZona = async (zonaId: number): Promise<Ave[]> => {
  const response = await turismoApi.get<Ave[]>(`/aves/zona/${zonaId}`);

  console.log("ZonaId recibido:", zonaId);

  return response.data;
};
