import axios from 'axios';
import { store } from './app';

export const ADD_API_CACHE = 'ADD_API_CACHE';
export const DEL_API_CACHE = 'DEL_API_CACHE';

const api = axios.create({
  // baseURL: 'https://devapi.billzero.app/v1/',
  baseURL: 'https://api.billzero.app/v1/',
});

api.interceptors.request.use(
<<<<<<< HEAD
  async function(config) {
    const { token } = store.getState();
    config.headers['bz-api-token'] = token;
    return config;
  },
  error => Promise.reject(error)
=======
  async function (config) {
    const {token} = store.getState();
    config.headers['bz-api-token'] = token;
    return config;
  },
  (error) => Promise.reject(error),
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
);

export function getApiCache(uid, min = 10) {
  const { api } = store.getState();
  if (api[uid]) {
    const currentTime = new Date().getTime();
    const oldTime = api[uid].timestamp;
    const diffMin = (currentTime - oldTime) / 1000 / 60;

    if (diffMin < min) {
      return api[uid].payload;
    } else {
      store.dispatch({ type: 'DEL_API_CACHE', uid });
    }
  }
  return null;
}
export default api;
