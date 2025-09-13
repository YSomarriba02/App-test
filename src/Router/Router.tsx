import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderHome } from "../home/components/HeaderHome";
import Home from "../home/components/Home";
import InicioSesion from "../Auth/InicioSesion";
import Registro from "../Auth/Registro";
import { AviturismoPage } from "../aviturismo-page/components/AviturismoPage";

export default function Router() {
  return (
    <BrowserRouter>
      <HeaderHome />
      <Routes>
        <Route path="/Inicio" element={<Home />}></Route>
        <Route path="/Inicio sesion" element={<InicioSesion />}></Route>
        <Route path="/Registro" element={<Registro />}></Route>
        <Route path="/Aviturismo" element={<AviturismoPage />}></Route>
        <Route path="*" element={<h1>Not Found 404</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
