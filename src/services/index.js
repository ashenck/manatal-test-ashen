/* eslint-disable no-shadow */
/* eslint-disable arrow-body-style */
import axios from 'axios';
import config from '../config';

const client = axios.create(config.api);

function getLocalStoreToken() {
  // const token = localStorage.getItem('token');
  // Local storage can be used hold the token
  const token = '099148be22804e849a0c6fe022b7cf5e';
  return token;
}

// Request interceptor
client.interceptors.request.use(
  (request) => {
    // eslint-disable-next-line no-param-reassign
    request.params = { apiKey: getLocalStoreToken() };
    return request;
  },
  (error) => Promise.reject(error),
);

// Response interceptor
client.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

const newsService = {
  topHeadLines(params) {
    return client.request({
      method: 'get',
      url: '/v2/top-headlines?country=us',
      params,
    });
  },
};

export default {
  newsService,
};
