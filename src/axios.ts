import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const instance = axios.create({
  baseURL: apiKey,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;
