import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';

import services from '../services/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    article: {},
    topHeadlines: [],
    history: [],
  },
  getters: {
    topHeadlines: (state) => state.topHeadlines,
    article: (state) => state.article,
    history: (state) => state.history,
  },
  mutations: {
    setTopHeadlines(state, payload) {
      state.topHeadlines = payload;
    },
    setArticle(state, payload) {
      state.article = payload;
    },
    setHistory(state, payload) {
      state.history.push(payload);
    },
  },
  actions: {
    async fetchTopHeadlines(state) {
      const result = await services.newsService.topHeadLines();
      state.commit('setTopHeadlines', result?.data?.articles ? result.data.articles : []);
    },
    async pushToArticle({ commit }, payload) {
      commit('setArticle', payload);
      commit('setHistory', payload);
      router.push('/article');
    },
  },
  modules: {
  },
});
