import { AvesCard } from "./AvesCard";
import { obtenerAve } from "../service/obtener-aves";

const aves = await obtenerAve();

export const AvesGrid = () => {
  return (
    <div className="w-screen grid  [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-4 border-4 border-blue-500 p-4">
      {aves.map((ave) => (
        <AvesCard ave={ave}></AvesCard>
      ))}
    </div>
  );
};
