import { Link } from "react-router-dom";
import Auth from "./Auth";

export default function InicioSesion() {
  return (
    <Auth
      endpoint="http://localhost:3000/auth/iniciarsesion"
      title="Inciar sesion"
      textBtn="Siguiente"
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
