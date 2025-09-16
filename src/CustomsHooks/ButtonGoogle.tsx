import { useEffect } from "react";
import type { typeActionQuery } from "../Auth/Auth";

declare global {
  interface Window {
    google: any;
  }
}

type props = {
  accionquery: typeActionQuery;
};

export default function ButtonGoogle({ accionquery }: props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    console.log(accionquery);
  }, []);
  return (
    <>
      <div
        id="g_id_onload"
        data-client_id="604063939668-kju71nqdf99fn8lg581prs6j9ba50l8s.apps.googleusercontent.com"
        data-context="signin"
        data-ux-mode="redirect"
        data-login_uri={`https://prueba-server-b762.onrender.com/auth/google/callback?accion=${accionquery}`}
        data-auto_prompt="false"
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="pill"
        data-size="large"
        data-text="continue_with"
      ></div>
    </>
  );
}
