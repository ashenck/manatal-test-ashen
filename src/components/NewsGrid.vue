<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="article in topHeadlines"
      :key="article.title" cols="12" sm="6" md="6" lg="4" xl="3"
      class="mb-4">
        <news-card :articleData="article" />
      </v-col>
    </v-row>
    </v-container>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import NewsCard from './news-card/NewsCard.vue';

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
  computed: {
    ...mapGetters({ topHeadlines: 'topHeadlines' }),
  },
  methods: {
    ...mapActions({ fetchTopHeadlines: 'fetchTopHeadlines' }),
  },
};
</script>
