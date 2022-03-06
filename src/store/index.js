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
    searchTxt: '',
  },
  getters: {
    topHeadlines: (state) => state.topHeadlines,
    article: (state) => state.article,
    history: (state) => state.history,
    searchTxt: (state) => state.searchTxt,
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
    setSearchTxt(state, payload) {
      state.searchTxt = payload;
    },
  },
  actions: {
    async fetchTopHeadlines(state) {
      const params = {};
      if (this.state.searchTxt) {
        params.q = this.state.searchTxt;
      }
      const result = await services.newsService.topHeadLines(params);
      state.commit('setTopHeadlines', result?.data?.articles ? result.data.articles : []);
    },
    async pushToArticle({ commit }, payload) {
      commit('setArticle', payload);
      commit('setHistory', payload);
      router.push('/article');
    },
    async searchTrigger({ commit, dispatch }, payload) {
      commit('setSearchTxt', payload);
      dispatch('fetchTopHeadlines');
    },
  },
  modules: {
  },
});
