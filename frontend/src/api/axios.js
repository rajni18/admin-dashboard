import axios from "axios";
const isLocalhost = window.location.hostname === "localhost";
const API_URL = isLocalhost
  ? "http://localhost:3000"
  : "https://admin-dashboard-y4eh.onrender.com";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
