import { useEffect } from "react";

declare global {
  interface Window {
    google: any;
  }
}

export default function ButtonGoogle() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <div
        id="g_id_onload"
        data-client_id="604063939668-kju71nqdf99fn8lg581prs6j9ba50l8s.apps.googleusercontent.com"
        data-context="signin"
        data-ux-mode="redirect"
        data-login_uri="http://localhost:3000/auth/google/callback"
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
