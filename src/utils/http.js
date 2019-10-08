import axios from 'axios';
import store from '@/store';

const baseURL = process.env.VUE_APP_BASE_URL;

axios.defaults.baseURL = baseURL;

const http = axios.create();

// -----------------------------------------------------------------

// Проверяем и устанавливаем в заголовок Access token
const setAccessTokenToHeader = async config => {
  const token = await store.dispatch('auth/getAccessToken');
  if (!token) return false;

  config.headers.Authorization = `Bearer ${token}`;
  return true;
};

// -----------------------------------------------------------------

// При протухшем Access token получаем Refresh и Access
const getRefreshToken = async () => {
  const token = await store.dispatch('auth/getRefreshToken');
  if (!token) return false;

  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const { headers: resHeaders } = await axios.get('/auth/token', headers);

  const { 'access-token': accessToken, 'refresh-token': refreshToken } = resHeaders;
  store.dispatch('auth/setTokens', { accessToken, refreshToken });
  return true;
};

// -----------------------------------------------------------------

// Перед запросом проверяем Access token, и при неуспешной проверке
// пробуем получить новые
const requestUse = async config => {
  if (!config.withoutToken) {
    if (!await setAccessTokenToHeader(config)) {
      if (!await getRefreshToken() || !await setAccessTokenToHeader(config)) {
        return Promise.reject(new Error('REFRESH_TOKEN_INVALID'));
      }
      config.retryAccessToken = true;
    }
  }
  return config;
};

// -----------------------------------------------------------------

const requestError = async error => Promise.reject(error);

// -----------------------------------------------------------------

const responseUse = response => response;

// -----------------------------------------------------------------

// Ошибка запроса
const responseError = async error => {
  const { message, config } = error;
  let code;
  const data = {};

  switch (message) {
    case 'Network Error':
      code = 'NETWORK';
      data.url = error.config.url;
      data.method = error.config.method.toUpperCase();
      break;

    case 'REFRESH_TOKEN_INVALID':
      code = message;
      break;

    default: {
      const { status, config: resConfig, data: dataResponse } = error.response;
      if (status === 400) {
        code = dataResponse;
      } else {
        code = 'HTTP';
        data.statusCode = status;
        data.url = resConfig.url;
        data.method = resConfig.method.toUpperCase();
        data.message = dataResponse;
      }
    }
  }

  if ((code === 'ACCESS_TOKEN_INVALID' && config.retryAccessToken)
    || code === 'REFRESH_TOKEN_INVALID') {
    store.dispatch('auth/removeTokens');
  } else if (code === 'ACCESS_TOKEN_INVALID') {
    store.dispatch('auth/removeAccessToken');
    return http(config);
  }

  store.commit('errors/set', { code, data });
  return Promise.reject(new Error(code));
};

// -----------------------------------------------------------------

http.interceptors.request.use(requestUse, requestError);
http.interceptors.response.use(responseUse, responseError);

// -------------------------
export const authLogin = obj => http.post('/auth/login', obj, { withoutToken: true });
export const authLogout = () => http.post('/auth/logout');

export const getCartridges = () => http.get('/cartridges');
export const removeCartridge = id => http.delete(`/cartridges/${id}`);

export const updateCartridge = ({ id, quantityResource, active }) => http.patch(
  `/cartridges/${id}`,
  { quantityResource, active }
);

export const getDevices = () => http.get('/devices');

export const getUsers = () => http.get('/users');
export const getUser = id => http.get(`/users/${id}`);
export const getUserList = obj => http.get('/users/list', { params: obj });
export const addUser = obj => http.post('/users', obj);
export const updateUser = obj => http.post('/users', obj);

export const getRoles = () => http.get('/roles');


export default {
  authLogin,
  authLogout,

  getCartridges,
  removeCartridge,
  updateCartridge,

  getDevices,

  getUsers,
  getUser,
  getUserList,
  addUser,
  updateUser,

  getRoles
};
