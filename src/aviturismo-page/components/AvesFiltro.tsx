interface Props {
  filtros: string[];

  onFiltroClick: (filtro: string) => void;
}

export const AvesFiltro = ({ filtros, onFiltroClick }: Props) => {
  return (
    <div className="flex  flex-wrap justify-center gap-3.5 p-4 border-2 border-amber-300 w-screen mb-3">
      {filtros.map((filtro, index) => (
        <button
          key={index + 1}
          className="border-2 border-black p-2 rounded-2xl active:scale-97 transition-transform"
          onClick={() => onFiltroClick(filtro)}
        >
          {filtro}
        </button>
      ))}
    </div>
  );
};
