import { Link } from "react-router-dom";
import Auth from "./Auth";

export default function InicioSesion() {
  return (
    <Auth
      endpoint="https://prueba-server-b762.onrender.com/auth/iniciarsesion"
      title="Inciar sesion"
      textBtn="Siguiente"
      accionquery="iniciosesion"
    >
      <div className="p-4 [font-size:16px] mb:p-6 mb:[font-size:20px]">
        No tienes cuenta?
        <Link to={"/Registro"} className="text-blue-400">
          Crea una
        </Link>
      </div>
    </Auth>
  );
}
