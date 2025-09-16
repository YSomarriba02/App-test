import axios from "axios";

export const turismoApi = axios.create({
  baseURL: "https://prueba-server-b762.onrender.com",
});
