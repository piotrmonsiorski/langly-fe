import { API } from './index';

const route = '/categories';

const categoriesApi = {
  get: () => API.get(route),
};

export default categoriesApi;
