import { turismoApi } from "../../apis/turismo.api";
import type { Ave } from "../interface/Ave";

export const obtenerAve = async (): Promise<Ave[]> => {
  const response = await turismoApi.get<Ave[]>("/aves");

  console.log(response.data);

  response.data.forEach((ave) => {
    console.log(ave.url_img);
  });

  return response.data;
};
