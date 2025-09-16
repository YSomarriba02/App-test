import { useLocation } from "react-router-dom";
import type { Ave } from "../interface/Ave";

export const AvesDetalles = () => {
  const location = useLocation();
  const ave = location.state as Ave;
  return (
    <div>
      <div className="border-4 border-black w-screen  flex justify-around items-center bg-gray-200 ">
        <div className="border-4 border-amber-200 w-[60%] h-[300px]">
          <h1 className="font-thin text-3xl p-2">{ave.nombre_comun}</h1>
          <h2 className="font-thin text-3xl p-2">{ave.nombre_cientifico}</h2>
        </div>

        <div className="w-[30%]  border-4 border-blue-200 ">
          <img className="w-full  object-contain" src={ave.url_img} alt={ave.nombre_comun} />
        </div>
      </div>

      <div className="flex justify-between items-center gap-5 w-screen  p-4 ">
        <p className="w-[20%] text-3xl p-2 border-4 border-black">Descripcion:</p>
        <p className="w-[80%] border-4 p-2 border-black">{ave.descripcion}</p>
      </div>
    </div>
  );
};
