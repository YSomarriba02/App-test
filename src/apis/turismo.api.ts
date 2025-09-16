import axios from "axios";

export const turismoApi = axios.create({
  baseURL: "https://app-test-k6yu.onrender.com",
});
