import { Link } from "react-router-dom";
import ButtonGoogle from "../CustomsHooks/ButtonGoogle";
import type { ReactNode } from "react";

interface props {
  title: string;
  textBtn: string;
  children?: ReactNode;
}

export default function Auth({ title, textBtn, children }: props) {
  return (
    <div className="flex flex-col justify-center items-center h-screen relative">
      <div className="flex flex-col gap-2.5 bg-[#b5d7e7] w-[90%]  rounded-3xl p-10 [border:solid_black_1px] absolute top-[50%] [transform:translateY(-50%)] md:w-[60%] lg:w-[35%]">
        <h1 className=" [font-size:20px] font-bold">{title}</h1>
        <form action="" className="w-full flex flex-col gap-4">
          <input
            className="w-full h-9 p-6 bg-white [border:solid_black_1px]"
            type="email"
            id="nombre"
            placeholder="Email o nombre de usuario"
          />
          <input
            className="w-full h-9 p-6 bg-white [border:solid_black_1px]"
            type="password"
            id="nombre"
            placeholder="Contraseña"
          />
          <button className="h-12 bg-black text-white font-bold [border-radius:6px]">
            {textBtn}
          </button>
        </form>
        <ButtonGoogle />
        {children}
      </div>
    </div>
  );
}
