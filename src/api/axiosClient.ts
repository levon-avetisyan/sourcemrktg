import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { apiBaseUrl } from '../constants';
import { redirectToLogin } from '../utils/navigation.tsx';

if (!apiBaseUrl) {
  throw new Error('VITE_API_URL is not defined in the environment variables');
}

// Create an Axios instance
const axiosClient: AxiosInstance = axios.create({
  baseURL: apiBaseUrl, // API base URL from environment
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

// Request interceptor to add Bearer token for specific routes
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem('token');
    const requiresAuth = ['/reports'].some((url) => config.url?.includes(url));

    if (requiresAuth && token) {
      if (!config.headers) {
        config.headers = {} as AxiosRequestHeaders;
      }
      config.headers.Authorization = token;
    }

    return config;
  },
  (error: AxiosError): Promise<never> => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError): Promise<never> => {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 401) {
        console.error('Unauthorized: The token is not authorized for this scope.');
        redirectToLogin();
      } else {
        console.error(`API Error [${status}]:`, data || error.message);
      }
    } else if (error.request) {
      console.error('No response received from API:', error.request);
    } else {
      console.error('Axios Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
