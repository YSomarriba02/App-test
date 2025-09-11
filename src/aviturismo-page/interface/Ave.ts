export interface Ave {
  ave_id: number;
  nombre_comun: string;
  nombre_cientifico: string;
  descripcion: string;
  tamano: string;
  dieta: string;
  habitat: string[];
  url_img: string;
  familias: Familia;
  estados_conservacion: EstadosConservacion;
}

//Nota: los campos de la interface deben coincidir con los campos del Json

interface Familia {
  nombre: string;
}
interface EstadosConservacion {
  nombre: string;
}
