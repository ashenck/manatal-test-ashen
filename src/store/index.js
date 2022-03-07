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
    sources: [],
    selectedSource: {},
    loadingArticles: false,
  },
  getters: {
    topHeadlines: (state) => state.topHeadlines,
    article: (state) => state.article,
    history: (state) => state.history,
    searchTxt: (state) => state.searchTxt,
    sources: (state) => state.sources,
    selectedSource: (state) => state.selectedSource,
    loadingArticles: (state) => state.loadingArticles,
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
    setSources(state, payload) {
      state.sources = payload;
    },
    setSelectedSource(state, payload) {
      state.selectedSource = payload;
    },
    setLoadingArticles(state, payload) {
      state.loadingArticles = payload;
    },
    setArticleHeadline(state, payload) {
      state.topHeadlines[payload.index].title = payload.headline;
      console.log(payload);
    },
  },
  actions: {
    async fetchTopHeadlines(state) {
      state.commit('setLoadingArticles', true);
      const params = {};
      if (this.state.selectedSource) {
        params.sources = this.state.selectedSource.value;
      }

      if (!params.sources) {
        params.country = 'us';
      }
      if (this.state.searchTxt) {
        params.q = this.state.searchTxt;
      }
      const result = await services.newsService.topHeadLines(params);
      state.commit('setTopHeadlines', result?.data?.articles ? result.data.articles : []);
      state.commit('setLoadingArticles', false);
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
    async storeSouces({ commit }, payload) {
      commit('setSources', payload);
    },
    async filterBySource({ commit, dispatch }, payload) {
      commit('setSelectedSource', payload);
      dispatch('fetchTopHeadlines');
    },
  },
  modules: {
  },
});
