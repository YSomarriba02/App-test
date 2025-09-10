export interface Ave {
  ave_id: number;
  nombre_comun: string;
  nombre_cientifico: string;
  descripcion: string;
  tamano: string;
  dieta: string;
  habitat: string[];
  familias: Familia;
  estados_conservacion: EstadosConservacion;
}

interface Familia {
  nombre: string;
}
interface EstadosConservacion {
  nombre: string;
}
