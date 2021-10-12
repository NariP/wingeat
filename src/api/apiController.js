import axios from 'axios';
axios.defaults.baseURL = 'https://node.wingeat.com/test-api';
const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);
export default axiosInstance;
