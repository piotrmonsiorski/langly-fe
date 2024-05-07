import axios from 'axios';

import categoriesApi from './categoriesApi';
import wordsApi from './wordsApi';
import sentencesApi from './sentencesApi';

const baseURL = process.env.REACT_APP_API_URL;
const api = axios.create({ baseURL });

api.interceptors.request.use(async req => {
  return req;
});

export const API = api;

const apiMethods = {
  categories: categoriesApi,
  words: wordsApi,
  sentences: sentencesApi,
};

export default apiMethods;
