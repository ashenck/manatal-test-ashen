<template>
  <v-card elevation="0" class="pa-xl-4 pa-lg-4 pa-md-2 pa-sm-2 pa-xs-2">
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
    <v-card-actions class="pa-0">
      <v-chip
        outlined
        class="my-2"
        v-if="articleData && articleData.source && articleData.source.name"
      >
        <v-avatar left>
          <v-icon>mdi-semantic-web</v-icon>
        </v-avatar>
        {{ articleData.source.name }}
      </v-chip>
      <v-spacer></v-spacer>

      <v-btn icon small>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn text color="warning" @click="pushToArticle(articleData)">
        <span class="mr-1">Read More</span>
        <v-icon>mdi-arrow-right-bold-circle-outline</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

import shared from '../../shared';

export default {
  name: 'NewsCard',
  props: {
    articleData: Object,
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
