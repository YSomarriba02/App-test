import { useEffect, useState } from "react";
import { useAve } from "../hooks/useAve";
import { AvesFiltro } from "./AvesFiltro";
import { AvesGrid } from "./AvesGrid";

const filtros = [
  { id: 0, nombre: "Todas" },
  { id: 1, nombre: "Pacífico" },
  { id: 2, nombre: "Centro" },
  { id: 3, nombre: "Caribe Norte" },
  { id: 4, nombre: "Caribe Sur" },
  { id: 5, nombre: "Lagos y lagunas" },
];

export const AviturismoPage = () => {
  const { aves, obtenerAves, filtrarAvesPorZona } = useAve();
  const [zona, setZona] = useState<number>(0);

  useEffect(() => {
    obtenerAves();
  }, []);

  const handleFiltroClick = (zonaId: number) => {
    if (zonaId === zona) return;

    setZona(zonaId);

    if (zonaId === 0) {
      obtenerAves();
    } else {
      filtrarAvesPorZona(zonaId);
    }
  };

  return (
    <div className="flex  flex-col justify-center items-center mb-6">
      <AvesFiltro filtros={filtros} onFiltroClick={handleFiltroClick}></AvesFiltro>
      <AvesGrid aves={aves}></AvesGrid>
    </div>
  );
};
