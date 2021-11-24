import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://quizapi.io/api/v1'
});

api.defaults.headers['X-Api-Key'] = process.env.NEXT_PUBLIC_API_KEY;
api.interceptors.request.use(config => {
  console.log(config);
  return config;
});

