import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderHome } from "../home/components/HeaderHome";
import Home from "../home/components/Home";
import InicioSesion from "../Auth/InicioSesion";
import Registro from "../Auth/Registro";

export default function Router() {
  return (
    <BrowserRouter>
      <HeaderHome />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="*" element={<h1>Not Found 404</h1>}></Route>
        <Route path="/Inicio sesion" element={<InicioSesion />}></Route>
        <Route path="/Registro" element={<Registro />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
