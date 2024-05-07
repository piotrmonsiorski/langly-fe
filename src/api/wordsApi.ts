import { Word } from 'types/word.model';
import { API } from './index';

const route = '/words';

const wordsApi = {
  get: (category: string) => API.get(`${route}/${category}`),
  add: (word: Word) => API.post(route, { word }),
  removeAll: () => API.delete(route),
};

export default wordsApi;
