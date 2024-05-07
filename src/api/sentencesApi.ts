import { Sentence } from 'types/sentence.model';
import { API } from './index';

const route = '/sentences';

const sentencesApi = {
  get: () => API.get(route),
  add: (sentence: Sentence) => API.post(route, { sentence }),
  removeAll: () => API.delete(route),
};

export default sentencesApi;
