import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

// Ensure the API URL is defined
const API_BASE_URL = import.meta.env.VITE_API_URL;
if (!API_BASE_URL) {
  throw new Error('VITE_API_URL is not defined in the environment variables');
}

// Create an Axios instance
const axiosClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL, // API base URL from environment
  headers: {
    'Content-Type': 'application/json',
    // 'User-Type': 'admin', // Uncomment if needed
  },
  withCredentials: false,
});

// Response interceptor
axiosClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError): Promise<never> => {
    if (error.response) {
      // API responded with an error status
      const { status, data } = error.response;

      if (status === 401) {
        console.error('Unauthorized: The token is not authorized for this scope.');
      } else {
        console.error(`API Error [${status}]:`, data || error.message);
      }
    } else if (error.request) {
      // No response received (network error, server down, etc.)
      console.error('No response received from API:', error.request);
    } else {
      // Other errors
      console.error('Axios Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
