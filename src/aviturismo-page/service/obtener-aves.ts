import { turismoApi } from "../../apis/turismo.api";
import type { Ave } from "../interface/Ave";

export const obtenerAve = async (): Promise<Ave[]> => {
  const response = await turismoApi.get<Ave[]>("/aves");

  return response.data;
};
