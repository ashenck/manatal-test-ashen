<template>
  <v-container fluid class=" pb-0">
    <v-row dense v-show="loadingArticles">
      <v-col class="text-center my-4" cols="12">
        <v-progress-circular
          :size="70"
          :width="7"
          color="deep-orange"
          indeterminate
        ></v-progress-circular>
      </v-col>
    </v-row>
    <v-row dense v-show="!loadingArticles">
      <v-col
        v-for="(article, index) in topHeadlines"
        :key="article.title"
        cols="12"
        sm="6"
        md="6"
        lg="4"
        xl="3"
        class="mb-4"
      >
        <news-card :articleData="article" :index="index" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import NewsCard from './news/NewsCard.vue';

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
    ...mapGetters({ topHeadlines: 'topHeadlines', loadingArticles: 'loadingArticles' }),
  },
  methods: {
    ...mapActions({ fetchTopHeadlines: 'fetchTopHeadlines' }),
  },
};
</script>
