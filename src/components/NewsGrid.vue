<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="article in articles"
      :key="article.title" cols="12" sm="6" md="6" lg="4" xl="3"
      class="mb-4">
        <news-card :articleData="article" />
      </v-col>
    </v-row>
    </v-container>
</template>

<script>

import NewsCard from './news-card/NewsCard.vue';

import services from '../services/index';

export default {
  name: 'NewsGrid',
  components: {
    NewsCard,
  },
  data: () => ({
    articles: [],
  }),
  async created() {
    this.fetchTopHeadlines();
  },
  methods: {
    async fetchTopHeadlines() {
      const result = await services.newsService.topHeadLines();
      console.log(result.data.articles);
      if (result?.data?.articles) {
        this.articles = result.data.articles;
      }
    },
  },
};
</script>
