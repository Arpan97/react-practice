import axios, {
  type AxiosRequestConfig,
  type AxiosResponse,
  type AxiosInstance,
} from "axios";

// Create axios instance

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor (attach token)
api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("accessToken");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor (refresh token handler, error handling)
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // handle refresh token logic if needed
      console.error("Unauthorized! Refresh token or redirect to login.");
    }
    return Promise.reject(error.response?.data || error.message);
  }
);

export default api;
