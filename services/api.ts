import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://quizapi.io/api/v1'
});

api.defaults.headers['X-Api-Key'] = `x5yYMkHgQ0xhz7Q7RD1CfTQESV5gXkBwlfcuNFed`;
api.interceptors.request.use(config => {
  console.log(config);
  return config;
});

