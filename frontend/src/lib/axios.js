import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatapp-production-971e.up.railway.app/api",
  withCredentials: true, // Keep for desktop cookies
});

// MOBILE FIX: Add Bearer token to all requests
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});