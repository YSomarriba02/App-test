import { useEffect } from "react";
import { useAve } from "../hooks/useAve";
import { AvesFiltro } from "./AvesFiltro";
import { AvesGrid } from "./AvesGrid";

const filtros = ["Pacífico", "Centro", "Caribe Norte", "Caribe Sur", "Lagos y lagunas"];

export const AviturismoPage = () => {
  const { aves, obtenerAves, filtrarAvesPorZona } = useAve();

  useEffect(() => {
    obtenerAves();
  }, [obtenerAves]);

  const handleFiltroClick = (filtro: string) => {
    const mapaZona: Record<string, number> = {
      Pacífico: 1,
      Centro: 2,
      "Caribe Norte": 3,
      "Caribe Sur": 4,
      "Lagos y Lagunas": 5,
    };
    const zonaId = mapaZona[filtro];
    if (zonaId) filtrarAvesPorZona(zonaId);
  };

  return (
    <div className="flex  flex-col justify-center items-center mb-6">
      <AvesFiltro filtros={filtros} onFiltroClick={handleFiltroClick}></AvesFiltro>
      <AvesGrid aves={aves}></AvesGrid>
    </div>
  );
};
