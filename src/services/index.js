/* eslint-disable no-shadow */
/* eslint-disable arrow-body-style */
import axios from 'axios';
import config from '../config';

const client = axios.create(config.api);

function getLocalStoreToken() {
  // const token = localStorage.getItem('token');
  // Local storage can be used hold the token
  const token = 'f8ae20decfa045069cd7a5a70d424b14';
  return token;
}

// Request interceptor
client.interceptors.request.use(
  (request) => {
    const token = { apiKey: getLocalStoreToken() };
    if (request.params) {
      // eslint-disable-next-line no-param-reassign
      request.params = Object.assign(request.params, token);
    } else {
      // eslint-disable-next-line no-param-reassign
      request.params = token;
    }
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
      url: '/v2/top-headlines',
      params,
    });
  },
  listSources(params) {
    return client.request({
      method: 'get',
      url: '/v2/sources',
      params,
    });
  },
  errorEndPoint(params) {
    return client.request({
      method: 'get',
      url: '/v2/sourceses',
      params,
    });
  },
};

export default {
  newsService,
};
