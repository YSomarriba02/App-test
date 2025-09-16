import Auth from "./Auth";

export default function Registro() {
  return (
    <Auth
      endpoint="https://prueba-server-b762.onrender.com/auth/registrar"
      title="Crea una cuenta"
      textBtn="Continuar con correo electronico"
      inputNombre={true}
      accionquery="registro"
    ></Auth>
  );
}
