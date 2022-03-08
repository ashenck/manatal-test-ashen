<template>
  <v-card elevation="0" class="pa-xl-4 pa-lg-4 pa-md-2 pa-sm-2 pa-xs-2 mb-4">
    <p
      class="headline font-weight-bold headline-truncate mb-1 pointer"
      @click="pushToArticle(articleData)"
      aria-hidden="true"
    >
      {{ articleData.title }}
    </p>
    <v-img
      @click="pushToArticle(articleData)"
      aria-hidden="true"
      v-if="articleData.urlToImage"
      :src="articleData.urlToImage"
      class="rounded-xl pointer"
    >
    </v-img>
    <v-img
      v-if="!articleData.urlToImage"
      @click="pushToArticle(articleData)"
      aria-hidden="true"
      src="@/assets/newsPlaceholder.png"
      class="rounded-xl pointer"
      height="250px"
    >
    </v-img>
    <p class="text-justify pt-2 mb-2">
      {{ articleData.description }}
    </p>
    <h5 v-if="articleData && articleData.author">
      Author : <span class="font-weight-light">{{ articleData.author }}</span>
    </h5>
    <h5 v-if="formattedDate">
      Date : <span class="font-weight-light">{{ formattedDate }}</span>
    </h5>
    <NewsCardToolBar :articleData="articleData" :index="index" />
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

import NewsCardToolBar from './NewsCardToolBar.vue';

import shared from '../../shared';

export default {
  name: 'NewsCard',
  components: {
    NewsCardToolBar,
  },
  props: {
    articleData: Object,
    index: Number,
  },
  created() {
    this.dateFormatter();
  },
  data: () => ({
    formattedDate: '',
  }),
  methods: {
    ...mapActions({ pushToArticle: 'pushToArticle' }),
    dateFormatter() {
      const publishedAt = this.articleData && this.articleData.publishedAt ? this.articleData.publishedAt : '';
      const date = shared.format_date(publishedAt);
      if (date !== 'Invalid date') {
        this.formattedDate = date;
      } else {
        this.formattedDate = '';
      }
    },
  },
};
</script>
