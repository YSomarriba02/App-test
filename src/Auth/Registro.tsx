import Auth from "./Auth";

export default function Registro() {
  return (
    <Auth
      endpoint="http://localhost:3000/auth/registrar"
      title="Crea una cuenta"
      textBtn="Continuar con correo electronico"
      inputNombre={true}
    ></Auth>
  );
}
