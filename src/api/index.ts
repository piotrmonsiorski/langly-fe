import axios from 'axios';

import categoriesApi from './categoriesApi';
import wordsApi from './wordsApi';

const baseURL = process.env.REACT_APP_API_URL;
const api = axios.create({ baseURL });

api.interceptors.request.use(async req => {
  return req;
});

export const API = api;

const apiMethods = {
  categories: categoriesApi,
  words: wordsApi,
};

export default apiMethods;
