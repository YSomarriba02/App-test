import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HeaderHome } from "../home/components/HeaderHome";
import Home from "../home/components/Home";
import InicioSesion from "../Auth/InicioSesion";
import Registro from "../Auth/Registro";
import { AviturismoPage } from "../aviturismo-page/components/AviturismoPage";
import { AvesDetalles } from "../aviturismo-page/components/AvesDetalles";

export default function Router() {
  return (
    <BrowserRouter>
      <HeaderHome />
      <Routes>
        <Route path="/Inicio" element={<Home />}></Route>
        <Route path="/Inicio sesion" element={<InicioSesion />}></Route>
        <Route path="/Registro" element={<Registro />}></Route>
        <Route path="/Aviturismo" element={<AviturismoPage />}></Route>
        <Route path="/Aves Detalles" element={<AvesDetalles></AvesDetalles>}></Route>
        <Route index element={<Navigate to="/Inicio"></Navigate>}></Route> //fixed el not found
        <Route path="*" element={<h1>Not Found 404</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
