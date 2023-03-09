import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://photo-gallery-server.onrender.com/',
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;
