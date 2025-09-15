interface Filtro {
  id: number;
  nombre: string;
}

interface Props {
  filtros: Filtro[];

  onFiltroClick: (filtro: number) => void;
}

export const AvesFiltro = ({ filtros, onFiltroClick }: Props) => {
  return (
    <div className="flex  flex-wrap justify-center gap-3.5 p-4 border-2 border-amber-300 w-screen mb-3">
      {filtros.map((filtro) => (
        <button
          key={filtro.id}
          className="border-2 border-black p-2 rounded-2xl active:scale-97 transition-transform"
          onClick={() => onFiltroClick(filtro.id)}
        >
          {filtro.nombre}
        </button>
      ))}
    </div>
  );
};
